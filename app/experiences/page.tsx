"use client";

import { motion } from "framer-motion";
import { experiences, Experience as ExperienceType } from "../../lib/data/experience"; // adjust path!

export default function Experience() {
  return (
    <motion.section
      className="max-w-6xl mx-auto py-20 px-6 pt-[calc(80px+5rem)]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-4xl font-bold text-white mb-10 text-left pl-42">
        Experiences
      </h1>

      <div className="max-w-3xl mx-auto relative border-l-2 border-gray-600 pl-16 space-y-10">
        {experiences.map((exp: ExperienceType, index: number) => (
          <div key={index} className="relative">
            {/* Heartbeat Glow Dot */}
            <motion.span
              className="absolute top-2 -left-18 w-4 h-4 bg-white rounded-full border-2 border-gray-800"
              animate={{
                scale: [1, 1.4, 1],
                boxShadow: [
                  "0 0 0 0 rgba(255, 255, 255, 0)",
                  "0 0 8px 4px rgba(255, 255, 255, 0.3)",
                  "0 0 0 0 rgba(255, 255, 255, 0)",
                ],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            ></motion.span>

            <h2 className="text-xl font-semibold text-white">{exp.role}</h2>
            {exp.company && (
              <h3 className="text-gray-300">{exp.company}</h3>
            )}
            <p className="text-sm text-gray-400 mb-2">{exp.period}</p>

            <p className="text-gray-300 text-lg leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
