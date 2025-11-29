"use client"; // if Next.js app router

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="max-w-6xl mx-auto py-20 px-6 pt-[calc(80px+5rem)]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-10 text-left pl-42">
        About Me
      </h1>

      <div className="max-w-3xl mx-auto space-y-8 text-justify text-gray-700 text-lg leading-relaxed">
        <p>
          Hey, I'm a passionate software developer currently studying at the{" "}
          <span className="font-semibold text-indigo-600">University of Mindanao</span>. 
          I’m all about crafting efficient, scalable, and clean applications that solve real problems.
        </p>

        <p>
          My journey in tech started with mastering the fundamentals—HTML, CSS, and JavaScript. 
          I’ve also dabbled in PHP and Laravel, explored Express.js, Flutter, and have solid experience with Java and Python (including Django, which was my first love).
        </p>

        <p>
          Currently, I’m deep-diving into C# and ASP.NET Core as part of my professional growth, making C# my primary language while keeping Python as my trusted secondary. 
          I’ve worked hands-on with databases too, mostly PostgreSQL and some MySQL, which I enjoy for building robust backend solutions.
        </p>

        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-left">
          Technologies I work with:
        </h2>
        <ul className="list-disc pl-6 space-y-2 max-w-full text-left">
          <li>Next.js (React)</li>
          <li>Django + DRF</li>
          <li>ASP.NET Core (C#)</li>
          <li>Java</li>
          <li>Python</li>
          <li>JavaScript, HTML, CSS (Fundamentals)</li>
          <li>Express.js</li>
          <li>Flutter</li>
          <li>PHP + Laravel (basic)</li>
          <li>PostgreSQL & MySQL</li>
          <li>TailwindCSS</li>
        </ul>

        <p>
          I’m driven by solving complex problems, designing clean architectures, and leveling up my skills every day. Whether it’s backend magic or crafting smooth frontend experiences, I’m here to build smart and impactful software.
        </p>
      </div>
    </motion.section>
  );
}
