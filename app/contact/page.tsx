"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      className="max-w-6xl mx-auto py-20 px-4 pt-[calc(80px+5rem)]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-3xl font-bold mb-10 text-left text-white">
        Contact Me
      </h1>

      <div className="flex flex-col md:flex-row md:space-x-16">
        {/* Left side */}
        <div className="md:w-1/2 text-left mt-6 mb-8 md:mb-0">
          {/* ✅ added pb-2 for breathing room below the description */}
          <p className="text-gray-300 max-w-lg pb-2">
            Got a question or a project idea? Feel free to reach out.
          </p>
        </div>

        {/* Right side — ✅ removed -mt-12 which caused overlap on mobile */}
        <form className="md:w-1/2 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-white bg-gray-900 text-white p-3 rounded placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-70 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-white bg-gray-900 text-white p-3 rounded placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-70 transition"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border border-white bg-gray-900 text-white p-3 rounded h-32 placeholder-white placeholder-opacity-60 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-70 transition"
          ></textarea>

          <button className="bg-white text-gray-900 px-5 py-3 rounded shadow-lg hover:shadow-[0_0_15px_4px_rgba(255,255,255,0.6)] transition shadow-white">
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
}