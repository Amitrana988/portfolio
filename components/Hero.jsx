"use client";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section
      id="home"
      className="relative max-w-7xl mx-auto min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-8 pt-24 overflow-hidden"
    >
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#030712]">

  {/* Glow Orb 1 */}
  <div className="absolute top-[-120px] left-[-100px] w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-[120px] animate-pulse" />

  {/* Glow Orb 2 */}
  <div className="absolute bottom-[-150px] right-[-120px] w-[450px] h-[450px] bg-cyan-500/20 rounded-full blur-[140px] animate-pulse" />

  {/* Center Glow */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[160px]" />

</div>
      <motion.div
  initial={{ opacity: 0, x: -60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative z-10 max-w-xl"  
>

        <p className="inline-block px-4 py-2 mb-6 text-sm font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full">
          ✨ UI/UX Designer • Graphic Designer
        </p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold"
          >
            Amit <span className="text-blue-500">Rana</span>
          </motion.h1>

        <p className="text-gray-300 text-xl mt-8 leading-9 max-w-xl">
          Passionate UI/UX Designer & Graphic Designer focused on creating
          clean, modern and user-friendly digital experiences.
        </p>

        <div className="flex flex-wrap gap-5 mt-10">

          <a
            href="#projects"
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/30"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md font-semibold hover:border-blue-500 hover:bg-white/10 transition-all duration-300"
          >
            Contact Me
          </a>

          <a
            href="/resume/Amit_Rana_Resume.pdf"
            download
            className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md font-semibold hover:border-blue-500 hover:bg-white/10 transition-all duration-300"
          >
            Download Resume
          </a>

        </div>

    </motion.div>

      {/* Right Side */}
      <motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{
    opacity: 1,
    x: 0,
    y: [0, -10, 0],
  }}
  transition={{
    opacity: { duration: 0.8, delay: 0.2 },
    x: { duration: 0.8, delay: 0.2 },
    y: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
  className="relative flex justify-center items-center mt-16 lg:mt-0"
>

        <div className="absolute w-[450px] h-[450px] bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="absolute w-[350px] h-[350px] bg-purple-500/20 rounded-full blur-3xl"></div>

        <Image
          src="/images/amit.png"
          alt="Amit Rana"
          width={420}
          height={420}
          priority
          className="relative z-10 rounded-full border-4 border-blue-500 shadow-[0_0_60px_rgba(59,130,246,0.4)] hover:scale-105 transition-all duration-500"
        />

  </motion.div>
    </section>
  );
}