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
      <h1 className="text-3xl font-bold mb-10 text-left">Contact Me</h1>

      <div className="flex flex-col md:flex-row md:space-x-16">
        {/* Left side - text content */}
        <div className="md:w-1/2 text-left mb-10 md:mb-0 mt-6">
          <p className="text-gray-700 max-w-lg">
            Got a question or a project idea? Feel free to reach out.
          </p>
        </div>

        {/* Right side - form, moved up ~48px */}
        <form className="md:w-1/2 space-y-4 -mt-12">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border p-3 rounded h-32"
          ></textarea>

          <button className="bg-gray-900 text-white px-5 py-3 rounded hover:bg-gray-800 transition">
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
}
