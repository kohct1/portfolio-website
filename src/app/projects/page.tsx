"use client"

// react
import { useState, useEffect, useRef } from "react";

// framer
import { motion } from "framer-motion";

// components
import MouseEffect from "@/components/MouseEffect";
import Studie from "@/components/projects/Studie";
import FormBuilder from "@/components/projects/FormBuilder";
import TwitchStats from "@/components/projects/TwitchStats";
import Inkwell from "@/components/projects/Inkwell";
import SGHDBResales from "@/components/projects/SGHDBResales";
import ComingSoon from "@/components/projects/ComingSoon";

function Projects() {
    const [mousePosition, setMousePosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
    const divRef = useRef<HTMLDivElement>(null);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>): void {
        if (!divRef.current) return;
        const div: HTMLDivElement = divRef.current;
        const rect: DOMRect = div.getBoundingClientRect();
        setMousePosition({ x: e.clientX - rect.left - 128, y: e.clientY - rect.top - 64 });
    }

    useEffect(() => {
        setMousePosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    }, [])

    return (
        <div className="w-full h-full flex bg-black" ref={divRef} onMouseMove={handleMouseMove}>
            <MouseEffect mousePosition={mousePosition} />
            <div className="w-full h-full flex flex-col items-center">
                <motion.div className="w-5/6 h-full flex flex-col justify-center items-center gap-8" initial={{ opacity: 0 }} animate={{ opacity: 100 }}>
                    <h1 className="text-8xl text-white text-center font-semibold max-lg:text-6xl">Projects</h1>
                    <p className="text-xl text-white max-lg:text-base">Explore my work: from ideas to execution</p>
                </motion.div>
                <div className="w-5/6 flex flex-col gap-8">
                    <div className="w-full flex gap-8 max-lg:flex-col">
                        <Studie />
                        <FormBuilder />
                    </div>
                    <div className="w-full flex gap-8 max-lg:flex-col">
                        <TwitchStats />
                        <Inkwell />
                    </div>
                    <div className="w-full flex gap-8 max-lg:flex-col">
                        <SGHDBResales />
                        <ComingSoon />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects
