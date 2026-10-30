"use client";

import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const TYPE_MS = 60;
const DELETE_MS = 28;
const HOLD_MS = 1700;
const ARRIVE_MS = 700;
// The section crossing this fraction of the viewport height is "in focus".
const FOCUS_LINE = 0.4;
// Bubble width limits: it wraps to fit the space right of the arrow, and drops
// below the title when even the minimum doesn't fit.
const BUBBLE_MAX = 208;
const BUBBLE_MIN = 112;
const EDGE_GAP = 24;

// Near the top of the page the cursor stays on the hero.
const HERO_SCROLL_LIMIT = 120;

// Hero: the arrow lands in the empty top padding above the name. Cards: it
// lands just past the end of the card's title (Card renders `${id}-title`).
const HERO_ANCHOR = { fx: 0.45, dy: 8 };
const TITLE_GAP = 10;

interface RoamingCursorProps {
  containerRef: RefObject<HTMLElement | null>;
  label: string;
  // Speech-bubble lines keyed by the id of the element the cursor visits.
  notes: Record<string, string[]>;
}

// Figma-style multiplayer cursor that glides to whichever section is in view
// and types out a note about it. Cards sharing a row are visited in turn.
export default function RoamingCursor({ containerRef, label, notes }: RoamingCursorProps) {
  const prefersReduced = useReducedMotion();
  const [targetId, setTargetId] = useState<string | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0, maxWidth: BUBBLE_MAX });
  const candidatesRef = useRef<string[]>([]);
  const targetRef = useRef<string | null>(null);

  const positionFor = useCallback(
    (id: string) => {
      const container = containerRef.current;
      const el = document.getElementById(id);
      if (!container || !el) return null;
      const c = container.getBoundingClientRect();
      const title = document.getElementById(`${id}-title`)?.getBoundingClientRect();
      let x: number;
      let y: number;
      if (title) {
        x = title.right - c.left + TITLE_GAP;
        y = title.top - c.top - 2;
      } else {
        const r = el.getBoundingClientRect();
        x = r.left - c.left + r.width * HERO_ANCHOR.fx;
        y = r.top - c.top + HERO_ANCHOR.dy;
      }
      let room = c.width - x - EDGE_GAP;
      if (room < BUBBLE_MIN) {
        x = Math.max(0, c.width - EDGE_GAP - BUBBLE_MIN);
        if (title) y = title.bottom - c.top + 4;
        room = BUBBLE_MIN;
      }
      return { x, y, maxWidth: Math.min(room, BUBBLE_MAX) };
    },
    [containerRef]
  );

  const moveTo = useCallback(
    (id: string) => {
      const next = positionFor(id);
      if (!next) return;
      targetRef.current = id;
      setTargetId(id);
      setPos(next);
    },
    [positionFor]
  );

  // Track which sections cross the focus line as the page scrolls.
  useEffect(() => {
    let frame = 0;
    const ids = Object.keys(notes);

    const update = () => {
      frame = 0;
      const focusY = window.innerHeight * FOCUS_LINE;
      const rects = ids
        .map((id) => ({ id, rect: document.getElementById(id)?.getBoundingClientRect() }))
        .filter((e): e is { id: string; rect: DOMRect } => Boolean(e.rect));
      if (rects.length === 0) return;

      let candidates =
        window.scrollY < HERO_SCROLL_LIMIT && notes.hero
          ? ["hero"]
          : rects
              .filter(({ rect }) => rect.top <= focusY && rect.bottom >= focusY)
              .map(({ id }) => id);
      if (candidates.length === 0) {
        const nearest = rects.reduce((best, e) =>
          Math.abs(e.rect.top - focusY) < Math.abs(best.rect.top - focusY) ? e : best
        );
        candidates = [nearest.id];
      }
      candidatesRef.current = candidates;

      const current = targetRef.current;
      if (current && candidates.includes(current)) {
        // Same target: just follow it if the layout shifted.
        const next = positionFor(current);
        if (next) setPos(next);
      } else {
        moveTo(candidates[0]);
      }
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [notes, moveTo, positionFor]);

  // After a note finishes, hop to the next card in the same row, if any.
  const handleNoteDone = useCallback(() => {
    const candidates = candidatesRef.current;
    const current = targetRef.current;
    if (candidates.length < 2 || !current) return;
    const next = candidates[(candidates.indexOf(current) + 1) % candidates.length];
    moveTo(next);
  }, [moveTo]);

  const lines = targetId ? notes[targetId] : undefined;
  if (!targetId || !lines) return null;

  return (
    <motion.div
      className="pointer-events-none select-none absolute top-0 left-0 z-20 flex items-start"
      aria-hidden
      initial={false}
      animate={{ x: pos.x, y: pos.y }}
      transition={prefersReduced ? { duration: 0 } : { type: "spring", stiffness: 70, damping: 16, mass: 0.9 }}
    >
      <svg className="w-5 h-5 -mr-1 shrink-0 text-accent drop-shadow-sm" viewBox="0 0 16 16">
        <path
          d="M1.5 1.2l12.3 5.3-5.4 1.6-2 5.3L1.5 1.2z"
          fill="currentColor"
          stroke="var(--surface)"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
      <TypingBubble
        key={targetId}
        label={label}
        lines={lines}
        maxWidth={pos.maxWidth}
        reduced={Boolean(prefersReduced)}
        onDone={handleNoteDone}
      />
    </motion.div>
  );
}

interface TypingBubbleProps {
  label: string;
  lines: string[];
  maxWidth: number;
  reduced: boolean;
  onDone: () => void;
}

// Types each line, holds, deletes, then pops in with the next. Calls onDone
// after the last line so the cursor can move on; loops if it doesn't.
function TypingBubble({ label, lines, maxWidth, reduced, onDone }: TypingBubbleProps) {
  const [lineIndex, setLineIndex] = useState(0);
  const [chars, setChars] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [started, setStarted] = useState(false);

  const line = lines[lineIndex % lines.length];

  useEffect(() => {
    if (reduced) return;

    let delay = deleting ? DELETE_MS : TYPE_MS;
    if (!started) delay = ARRIVE_MS;
    else if (!deleting && chars === line.length) delay = HOLD_MS;

    const timer = setTimeout(() => {
      if (!started) setStarted(true);
      else if (!deleting && chars < line.length) setChars(chars + 1);
      else if (!deleting) setDeleting(true);
      else if (chars > 0) setChars(chars - 1);
      else {
        setDeleting(false);
        setLineIndex((i) => (i + 1) % lines.length);
        if (lineIndex === lines.length - 1) onDone();
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [chars, deleting, started, line, lineIndex, lines.length, reduced, onDone]);

  const text = reduced ? lines[0] : line.slice(0, chars);
  const visible = reduced || (started && (chars > 0 || !deleting));

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key={reduced ? "static" : lineIndex}
          className="mt-3 rounded-lg rounded-tl-sm bg-accent text-accent-contrast px-2.5 py-1.5 shadow-md"
          initial={reduced ? false : { scale: 0.4, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.6, opacity: 0 }}
          transition={{ type: "spring", stiffness: 520, damping: 22 }}
          style={{ transformOrigin: "top left", maxWidth }}
        >
          <p className="text-[10px] font-semibold leading-none opacity-75">{label}</p>
          <p className="mt-1 text-xs font-medium leading-snug">
            {text}
            {!reduced && (
              <span className="ml-px inline-block w-px h-3 align-[-2px] bg-current animate-pulse" />
            )}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
