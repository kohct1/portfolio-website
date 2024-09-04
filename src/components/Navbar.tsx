"use client"

// next
import Link from "next/link";

// framer
import { motion } from "framer-motion";

// components
import { Button } from "./ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

function Navbar() {
    return (
        <div className="w-full h-14 flex justify-center bg-black border-b-[1px] border-b-neutral-800">
            <div className="w-1/2 h-full flex justify-between items-center max-lg:w-5/6">
                <Link href="/">
                    <motion.div className="flex text-white font-semibold" whileHover="hover">
                        <motion.h1 variants={{ hover: { x: -8 } }}>{"<"}</motion.h1><h1 className="mr-2">kohchinteck</h1><motion.h1 variants={{ hover: { x: 8 } }}>{"/>"}</motion.h1>
                    </motion.div>
                </Link>
                <div className="flex gap-4 max-lg:hidden">
                    <Link href="/"><Button className="bg-black">Home</Button></Link>
                    <Link href="/projects"><Button className="bg-black">Projects</Button></Link>
                    <Button className="bg-black">Resume</Button>
                </div>
                <div className="flex items-center lg:hidden">
                    <Sheet>
                        <SheetTrigger className="text-white"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path className="fill-white" d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></SheetTrigger>
                        <SheetContent className="bg-black border-l-1px border-l-neutral-800">
                            <SheetHeader className="flex flex-col items-start">
                                <SheetTitle className="text-white ml-4">{"<kohchinteck />"}</SheetTitle>
                                <Link href="/"><Button className="bg-black">Home</Button></Link>
                                <Link href="/projects"><Button className="bg-black">Projects</Button></Link>
                                <Button className="bg-black">Resume</Button>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    );
}

export default Navbar
