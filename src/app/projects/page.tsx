"use client"

// react
import { useState, useRef } from "react";

// framer
import { motion } from "framer-motion";

// components
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import MouseEffect from "@/components/MouseEffect";
import Studie from "@/components/projects/Studie";
import FormBuilder from "@/components/projects/FormBuilder";
import TwitchStats from "@/components/projects/TwitchStats";
import Inkwell from "@/components/projects/Inkwell";

function Projects() {
    const [mousePosition, setMousePosition] = useState<{ x: number, y: number }>({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const divRef = useRef<HTMLDivElement>(null);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>): void {
        if (!divRef.current) return;
        const div: HTMLDivElement = divRef.current;
        const rect: DOMRect = div.getBoundingClientRect();
        setMousePosition({ x: e.clientX - rect.left - 128, y: e.clientY - rect.top - 64 });
    }

    return (
        <div className="w-full h-full flex bg-black" ref={divRef} onMouseMove={handleMouseMove}>
            <MouseEffect mousePosition={mousePosition} />
            <div className="w-full h-full flex flex-col items-center">
                <div className="w-5/6 h-full flex flex-col justify-center items-center gap-8">
                    <h1 className="text-8xl text-white text-center font-semibold max-lg:text-6xl">Projects</h1>
                    <p className="text-xl text-white max-lg:text-base">These are my projects</p>
                </div>
                <div className="w-5/6 flex flex-col gap-8">
                    <div className="w-full flex gap-8 max-lg:flex-col">
                        <Studie />
                        <FormBuilder />
                    </div>
                    <div className="w-full flex gap-8 max-lg:flex-col">
                        <TwitchStats />
                        <Inkwell />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects
