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
  
    const sections = document.querySelectorAll("#home, #projects, #skills, #contact");
    sections.forEach((section) => observer.observe(section));
  
    return () => observer.disconnect(); 
  }, []);
  
  return (
    <div>
      <div className="relative landing-background">
        <div className="circle circle1 w-[1500px] h-[1500px] -top-[1200px] -left-[900px]"></div>
        <div className="circle circle2 w-[1500px] h-[1500px] -bottom-[1100px] -right-[900px]"></div>
        <div className="dotted-square absolute bottom-5 left-24 transform -translate-x-1/2"></div>
        <div className="dotted-square absolute top-9 right-[-100px] transform -translate-x-1/2"></div>
        <div
          id="home"
          className="w-4/5 mx-auto justify-center h-screen relative z-10 overflow-hidden"
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
