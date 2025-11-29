"use client";

import { motion } from "framer-motion";
import { certificates } from "../../lib/data/certificate"; // adjust path accordingly

export default function Certificates() {
  return (
    <section className="max-w-6xl mx-auto py-35 px-4">
      <h1 className="text-3xl font-bold mb-6 text-white">Certificates</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificates.map(({ name, link }, idx) => (
          <motion.div
            key={idx}
            className="
              p-6 rounded-lg shadow-sm
              border border-gray-700
              hover:border-white
              hover:shadow-[0_0_15px_4px_rgba(255,255,255,0.9)]
              transition-all duration-300
              cursor-pointer
              flex items-center justify-center
              text-white text-lg font-semibold
              select-none
              min-h-[80px]
            "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6, ease: "easeOut" }}
            onClick={() => window.open(link, "_blank")}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") window.open(link, "_blank");
            }}
            aria-label={`Open certificate: ${name}`}
          >
            {name}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
