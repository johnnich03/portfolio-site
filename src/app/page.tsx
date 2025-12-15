"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


export default function HomePage() {
  return (
    <main className="min-h-screen text-textPrimary overflow-hidden">
      <div className="-m-8 fixed inset-0 z-10 flex items-center justify-center px-6">
        <div className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-center gap-12">
        {/* LEFT SECTION */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-accent"
          >
            John Nicholson
          </motion.h1>    
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold text-textSecondary"
          >
            DATA SCIENCE & ECONOMICS 
          </motion.h2>
          <p className="text-textSecondary max-w-md leading-relaxed">
            I'm currently a college Senior with skills in SQL, Python, and R.
            I specialize in transforming complex data into actionable insights.
            Check out my{" "}
            <Link href="/projects" className="text-accent hover:underline">
              personal projects
            </Link>{" "}
            or download my resume below.
          </p>

          <div>
            <a
              href="/resume.pdf"
              download="/resume.pdf"
              className="inline-block bg-accent text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              Download Resume
            </a>
          </div>

        </div>
        {/* RIGHT SECTION */}
        <div className="flex-1 flex justify-center">
          <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-accent shadow-lg">
            <Image
              src="/screenshots/headshot.jpg"
              alt="Profile photo"
              width={224}
              height={224}
              className="object-cover object-top w-full h-full"
            />
          </div>
        </div>
        </div>
      </div>
    </main>
  );
}
