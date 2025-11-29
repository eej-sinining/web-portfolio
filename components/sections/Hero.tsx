"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const roles = [
    "Computer Science Student",
    "Software Developer",
    "Freelancer",
    "Shopify Store Builder",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="flex flex-col items-center justify-center text-center py-24 px-6 min-h-screen"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1
        className="text-6xl font-extrabold mb-6 tracking-tight text-gray-900"
        style={{ fontFamily: "'Geist Sans', sans-serif", paddingLeft: "1rem" }}
      >
        Greetings! <span className="inline-block animate-wave">👋</span>
      </h1>
      <p
        className="text-3xl font-semibold mb-8 leading-relaxed max-w-lg text-gray-900 whitespace-nowrap"
        style={{ fontFamily: "'Geist Mono', monospace", letterSpacing: "0.04em" }}
      >
        I'm{" "}
        <span className="text-indigo-600 underline decoration-indigo-400 decoration-2 underline-offset-2">
          Ean Endrew Jade Sinining
        </span>
        ,
      </p>

      <div className="relative h-16 w-72 overflow-hidden pl-0">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute w-full text-2xl font-semibold text-gray-800 leading-8 tracking-wide"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            {roles[index]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Social Links */}
      <div className="mt-8 flex space-x-6 justify-center">
        {/* GitHub */}
        <a
          href="https://github.com/eej-sinining"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          <svg
            className="w-7 h-7"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.774.42-1.304.763-1.605-2.665-.3-5.466-1.334-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.52.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.137 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.657.243 2.874.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.625-5.476 5.92.43.37.823 1.096.823 2.21 0 1.594-.014 2.877-.014 3.27 0 .32.218.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>

        {/* Facebook */}
        <a
          href="https://facebook.com/Ephisshy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-blue-700 hover:text-blue-900 transition-colors"
        >
          <svg
            className="w-7 h-7"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M22.675 0h-21.35C.592 0 0 .592 0 1.325v21.351C0 23.406.592 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.466.099 2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.675V1.325C24 .592 23.406 0 22.675 0z" />
          </svg>
        </a>

        {/* Gmail */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=eej.sinining%40gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:text-red-800 transition-colors"
        >
          <svg
            className="w-7 h-7"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M20 4H4c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2V6c0-1.104-.896-2-2-2zm0 2v.511l-8 5.004-8-5.004V6h16zM4 18V8.489l7.513 4.696a1 1 0 001.027 0L20 8.489V18H4z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="www.linkedin.com/in/ean-endrew-jade-sinining-828893337"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-blue-700 hover:text-blue-900 transition-colors"
        >
          <svg
            className="w-7 h-7"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.762 0 5-2.24 5-5v-14c0-2.76-2.238-5-5-5zm-11.66 19h-2.67v-9.71h2.67v9.71zm-1.34-11.12c-.86 0-1.56-.7-1.56-1.56 0-.87.7-1.57 1.56-1.57.87 0 1.57.7 1.57 1.57 0 .87-.7 1.56-1.57 1.56zm13 11.12h-2.67v-4.66c0-1.11-.03-2.55-1.56-2.55-1.56 0-1.8 1.22-1.8 2.48v4.73h-2.67v-9.71h2.56v1.33h.04c.36-.69 1.24-1.42 2.55-1.42 2.73 0 3.23 1.8 3.23 4.13v5.67z" />
          </svg>
        </a>
      </div>

      {/* Wave emoji animation */}
      <style>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-wave {
          display: inline-block;
          animation-name: wave;
          animation-duration: 2.5s;
          animation-iteration-count: infinite;
          transform-origin: 70% 70%;
        }
      `}</style>
    </motion.section>
  );
}
