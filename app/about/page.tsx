"use client";

import { motion } from "framer-motion";

interface Tech {
  name: string;
  confidence: number; // 1–10 dots
  category: "Frontend" | "Backend" | "Database" | "Mobile" | "Language";
}

//  EDIT HERE — confidence is out of 10 dots
const technologies: Tech[] = [
  // Languages
  { name: "Python",        confidence: 8,  category: "Language" },
  { name: "C# (.NET)",     confidence: 8,  category: "Language" },
  { name: "Java",          confidence: 5,  category: "Language" },
  { name: "JavaScript",    confidence: 5,  category: "Language" },

  // Backend
  { name: "Django + DRF",  confidence: 8,  category: "Backend"  },
  { name: "ASP.NET Core",  confidence: 8,  category: "Backend"  },
  { name: "Express.js",    confidence: 4,  category: "Backend"  },
  { name: "PHP + Laravel", confidence: 5,  category: "Backend"  },

  // Frontend
  { name: "Next.js",       confidence: 8,  category: "Frontend" },
  { name: "TailwindCSS",   confidence: 7,  category: "Frontend" },
  { name: "HTML & CSS",    confidence: 9,  category: "Frontend" },

  // Database
  { name: "PostgreSQL",    confidence: 8,  category: "Database" },
  { name: "MySQL",         confidence: 7,  category: "Database" },

  // Mobile
  { name: "Flutter",       confidence: 5,  category: "Mobile"   },
];

const CATEGORY_ORDER: Tech["category"][] = [
  "Language", "Backend", "Frontend", "Database", "Mobile",
];

const TOTAL_DOTS = 10;

function TechRow({ tech, delay }: { tech: Tech; delay: number }) {
  return (
    <div className="flex items-center gap-3 group">
      <span className="w-32 shrink-0 text-sm text-gray-300 group-hover:text-white transition-colors">
        {tech.name}
      </span>

      <div className="flex gap-1.5">
        {Array.from({ length: TOTAL_DOTS }).map((_, i) => {
          const filled = i < tech.confidence;
          return filled ? (
            <motion.span
              key={i}
              className="w-2 h-2 rounded-full bg-white"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: [1, 1.35, 1],
                boxShadow: [
                  "0 0 0px 0px rgba(255,255,255,0)",
                  "0 0 6px 3px rgba(255,255,255,0.35)",
                  "0 0 0px 0px rgba(255,255,255,0)",
                ],
              }}
              transition={{
                opacity:   { duration: 0.2, delay: delay + i * 0.06 },
                scale:     { duration: 1.2, delay: delay + i * 0.06, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
                boxShadow: { duration: 1.2, delay: delay + i * 0.06, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
              }}
            />
          ) : (
            <span key={i} className="w-2 h-2 rounded-full bg-gray-700" />
          );
        })}
      </div>
    </div>
  );
}

export default function About() {
  const grouped = CATEGORY_ORDER.map((cat) => ({
    category: cat,
    items: technologies.filter((t) => t.category === cat),
  }));

  // Split categories into two columns
  const mid = Math.ceil(grouped.length / 2);
  const leftCol = grouped.slice(0, mid);
  const rightCol = grouped.slice(mid);

  return (
    <motion.section
      className="max-w-6xl mx-auto py-20 px-6 pt-[calc(80px+5rem)]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-4xl font-bold text-white mb-10 text-left pl-42">
        About Me
      </h1>

      <div className="max-w-3xl mx-auto space-y-8 text-justify text-white text-lg leading-relaxed">
        <p>
          Hey! I'm a software developer from{" "}
          <span className="font-semibold text-indigo-300">University of Mindanao</span>{" "}
          who genuinely enjoys the craft — not just writing code, but writing code that
          actually makes sense six months later. I care about clean architecture, scalable
          systems, and building things that solve real problems for real people.
        </p>

        <p>
          I started where most developers do — the holy trinity of HTML, CSS, and JavaScript.
          From there, curiosity took over. PHP and Laravel, Express.js, Flutter, Java, Python —
          I've poked around enough stacks to know what I like and, more importantly, what works.
          Django was my first serious backend framework, and honestly, it still holds a special place.
        </p>

        <p>
          These days, I'm going deep on{" "}
          <span className="font-semibold text-indigo-300">C# and ASP.NET Core</span> as
          my primary focus — it's sharp, performant, and built for serious backend work. Python
          stays close as my reliable second. On the data side, PostgreSQL is my go-to, with MySQL
          when the project calls for it. I like my databases like I like my code: structured and predictable.
        </p>

        {/* ── Technologies ── */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">
            Technologies I work with
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-7">
            {/* Left column */}
            <div className="space-y-7">
              {leftCol.map(({ category, items }, groupIdx) => (
                <div key={category}>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-gray-500">
                    {category}
                  </p>
                  <div className="space-y-3">
                    {items.map((tech, i) => (
                      <TechRow
                        key={tech.name}
                        tech={tech}
                        delay={groupIdx * 0.15 + i * 0.08}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Right column */}
            <div className="space-y-7">
              {rightCol.map(({ category, items }, groupIdx) => (
                <div key={category}>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-gray-500">
                    {category}
                  </p>
                  <div className="space-y-3">
                    {items.map((tech, i) => (
                      <TechRow
                        key={tech.name}
                        tech={tech}
                        delay={groupIdx * 0.15 + i * 0.08}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p>
          At the end of the day, I'm here to build software that's smart, maintainable, and
          worth shipping. Whether that's elegant backend logic, a smooth frontend experience,
          or that one tricky feature nobody else wanted to touch — I'm in.
        </p>
      </div>
    </motion.section>
  );
}