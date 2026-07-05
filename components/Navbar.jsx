"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const linkClass = (id) =>
    `cursor-pointer transition ${
      active === id ? "text-blue-500" : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        {/* LOGO */}
        <h1 className="text-2xl font-bold">
          Amit<span className="text-blue-500">.</span>
        </h1>

        {/* LINKS */}
        <div className="hidden md:flex gap-8">

          <a href="#home" className={linkClass("home")}>Home</a>
          <a href="#about" className={linkClass("about")}>About</a>
          <a href="#skills" className={linkClass("skills")}>Skills</a>
          <a href="#projects" className={linkClass("projects")}>Projects</a>
          <a href="#experience" className={linkClass("experience")}>Experience</a>
          <a href="#services" className={linkClass("services")}>Services</a>
          <a href="#contact" className={linkClass("contact")}>Contact</a>

        </div>

      </div>
    </nav>
  );
}