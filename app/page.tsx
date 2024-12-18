"use client";

import Contact from "../components/contact";
import Landing from "../components/landing";
import Projects from "../components/projects";
import Skills from "../components/skills";
import "../css/slides.css";
import "../css/sphere.css";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(
      "#home, #projects, #skills, #contact"
    );
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <div className="relative landing-background">
        <div className="circle circle1 w-[1100px] h-[1100px] -top-[900px] -left-[900px] lg:w-[1500px] lg:h-[1500px] lg:-top-[1100px] lg:-left-[1200px]"></div>
        <div className="circle circle2 w-[1100px] h-[1100px] -bottom-[900px] -right-[900px] lg:w-[1500px] lg:h-[1500px] lg:-bottom-[1300px] lg:-right-[1000px]"></div>
        <div className="dotted-square absolute bottom-5 left-24 transform -translate-x-1/2"></div>
        <div className="dotted-square absolute top-9 right-[-100px] transform -translate-x-1/2"></div>
        <div
          id="home"
          className=" mx-auto justify-center h-screen relative z-10"
        >
          <Landing />
        </div>
      </div>

      <div id="projects" className="section -z-0">
        <Projects />
      </div>
      <div id="skills" className="section">
        <Skills />
      </div>
      <div id="contact" className="section -z-0">
        <Contact />
      </div>
    </div>
  );
}
