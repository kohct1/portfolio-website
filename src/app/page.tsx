"use client"

// react
import { useState, useEffect, useRef } from "react";

// next
import Link from "next/link";

// framer
import { motion } from "framer-motion";

// components
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MouseEffect from "@/components/MouseEffect";
import NextjsSkill from "@/components/skills/NextjsSkill";
import ReactSkill from "@/components/skills/ReactSkill";
import NodejsSkill from "@/components/skills/NodejsSkill";
import PythonSkill from "@/components/skills/PythonSkill";
import JavaSkill from "@/components/skills/JavaSkill";
import MySQLSkill from "@/components/skills/MySQLSkill";
import JavaScriptSkill from "@/components/skills/JavaScriptSkill";
import TypeScriptSkill from "@/components/skills/TypeScriptSkill";
import HTMLSkill from "@/components/skills/HTMLSkill";
import CSSSkill from "@/components/skills/CSSSkill";
import FirebaseSkill from "@/components/skills/FirebaseSkill";
import CsSkill from "@/components/skills/CsSkill";
import CppSkill from "@/components/skills/CppSkill";
import TailwindCSSSkill from "@/components/skills/TailwindCSSSkill";
import FramerMotionSkill from "@/components/skills/FramerMotionSkill";
import ExpressjsSkill from "@/components/skills/ExpressjsSkill";
import NgeeAnnPolytechnic from "@/components/education/NgeeAnnPolytechnic";
import WestSpringSecondarySchool from "@/components/education/WestSpringSecondarySchool";
import Sections from "@/components/Sections";

function Home() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isAbout, setIsAbout] = useState<boolean>(false);
  const [isEducation, setIsEducation] = useState<boolean>(false);
  const [isSkills, setIsSkills] = useState<boolean>(false);
  const divRef = useRef<HTMLDivElement>(null);
  const educationAnchorRef = useRef<HTMLAnchorElement>(null);
  const skillsAnchorRef = useRef<HTMLAnchorElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>): void {
      if (!divRef.current) return;
      const div: HTMLDivElement = divRef.current;
      const rect: DOMRect = div.getBoundingClientRect();
      setMousePosition({ x: e.clientX - rect.left - 128, y: e.clientY - rect.top - 64 });
  }

  function handleScroll(): void {
    setScrollPosition(document.documentElement.scrollTop);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setMousePosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  }, [])

  useEffect(() => {    
    if (educationAnchorRef.current && scrollPosition < educationAnchorRef.current.getBoundingClientRect().top + window.scrollY) {
      setIsAbout(true);
      setIsEducation(false);
      setIsSkills(false);
    } else if (educationAnchorRef.current && skillsAnchorRef.current && scrollPosition >= educationAnchorRef.current.getBoundingClientRect().top + window.scrollY && scrollPosition < skillsAnchorRef.current.getBoundingClientRect().top + window.scrollY) {
      setIsAbout(false);
      setIsEducation(true);
      setIsSkills(false);
    } else if (skillsAnchorRef.current && scrollPosition >= skillsAnchorRef.current.getBoundingClientRect().top + window.scrollY) {
      setIsAbout(false);
      setIsEducation(false);
      setIsSkills(true);
    }
  }, [scrollPosition])

  return (
    <div className="w-full h-full flex bg-black" ref={divRef} onMouseMove={handleMouseMove}>
      <MouseEffect mousePosition={mousePosition} />
      <div className="w-full h-full flex flex-col items-center">
        <div className="w-5/6 h-screen flex flex-col justify-center items-center pb-14 gap-8">
          <h1 className="text-8xl text-white text-center font-semibold max-lg:text-6xl max-md:text-4xl">{"<kohchinteck />"}</h1>
          <p className="text-xl text-white text-center max-lg:text-base">An aspiring software developer passionate about creating good products</p>
        </div>
        <div className="w-2/3 flex justify-center max-lg:w-5/6 max-lg:flex-col">
          <div className="w-1/2 h-fit flex flex-col sticky top-0 pt-28 gap-4 max-lg:w-full max-lg:static">
            <h1 className="text-6xl text-white font-semibold max-lg:text-4xl">Koh Chin Teck</h1>
            <p className="text-xl text-white max-lg:text-base">Year 2 Information Technology Student</p>
            <Sections isAbout={isAbout} isEducation={isEducation} isSkills={isSkills} />
          </div>
          <div className="w-1/2 flex flex-col max-lg:w-full">
            <div className="flex flex-col gap-8 max-lg:gap-0">
              <a className="text-3xl text-white font-semibold px-8 pt-28 max-lg:text-2xl max-lg:px-0 max-lg:pt-14" id="about">About</a>
              <Card className="flex justify-between items-center bg-black border-black ease-in-out duration-300 px-8 py-6 hover:bg-primary/90 max-lg:px-0 max-lg:py-4 max-lg:hover:bg-black">
                <p className="text-white max-lg:text-sm">As a dedicated Information Technology student with a strong foundation in software development, I am highly self-motivated and driven by an insatiable thirst for knowledge. I continually strive to improve my skills through both study and hands-on practice, always seeking new ways to better myself and stay ahead in the ever-evolving tech landscape.</p>
              </Card>
            </div>
            <div className="flex flex-col gap-8 max-lg:gap-4">
              <a className="text-3xl text-white font-semibold px-8 pt-28 max-lg:text-2xl max-lg:px-0 max-lg:pt-14" id="education" ref={educationAnchorRef}>Education</a>
              <NgeeAnnPolytechnic />
              <WestSpringSecondarySchool />
            </div>
            <div className="flex flex-col gap-8 max-lg:gap-2">
              <a className="text-3xl text-white font-semibold px-8 pt-28 max-lg:text-2xl max-lg:px-0 max-lg:pt-14" id="skills" ref={skillsAnchorRef}>Skills</a>
              <NextjsSkill />
              <ReactSkill />
              <TailwindCSSSkill />
              <FramerMotionSkill />
              <JavaScriptSkill />
              <TypeScriptSkill />
              <HTMLSkill />
              <CSSSkill />
              <NodejsSkill />
              <ExpressjsSkill />
              <FirebaseSkill />
              <CppSkill />
              <CsSkill />
              <JavaSkill />
              <PythonSkill />
              <MySQLSkill />
            </div>
          </div>
        </div>
        <div className="w-2/3 flex flex-col items-center mt-64 gap-12 max-lg:w-5/6 max-lg:mt-16">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-6xl text-white text-center font-semibold max-lg:text-4xl">Talk is cheap. Show me the code.</h1>
            <p className="text-xl text-white max-lg:text-base">- Linus Torvalds</p>
          </div>
          <Link href="/projects"><Button className="bg-black text-white">{"Projects ->"}</Button></Link>
        </div>
      </div>
    </div>
  );
}

export default Home
