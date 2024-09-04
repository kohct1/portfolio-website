// framer
import { motion } from "framer-motion";

function Sections({ isAbout, isEducation, isSkills }: { isAbout: boolean, isEducation: boolean, isSkills: boolean }) {
    return (
        <div className="flex flex-col mt-16 mb-8 gap-4 max-lg:hidden">
            <motion.div className="w-fit flex items-center gap-4" whileHover="hover">
                <motion.div className="w-8 h-[1px] bg-white" animate={isAbout ? { x: 16, scaleX: 2 } : {}} variants={{ hover: { x: 16, scaleX: 2 } }}></motion.div>
                <a href="#about"><motion.h1 className={isAbout ? "text-pink-400 font-semibold" : "text-white font-semibold"} animate={isAbout ? { x: 48, scale: 1.5 } : {}} variants={{ hover: { x: 48, scale: 1.5 } }}>About</motion.h1></a>
            </motion.div>
                <motion.div className="flex items-center gap-4" whileHover="hover">
                <motion.div className="w-8 h-[1px] bg-white" animate={isEducation ? { x: 16, scaleX: 2 } : {}} variants={{ hover: { x: 16, scaleX: 2 } }}></motion.div>
                <a href="#education"><motion.h1 className={isEducation ? "text-pink-400 font-semibold" : "text-white font-semibold"} animate={isEducation ? { x: 48, scale: 1.5 } : {}} variants={{ hover: { x: 48, scale: 1.5 } }}>Education</motion.h1></a>
            </motion.div>
                <motion.div className="flex items-center gap-4" whileHover="hover">
                <motion.div className="w-8 h-[1px] bg-white" animate={isSkills ? { x: 16, scaleX: 2 } : {}} variants={{ hover: { x: 16, scaleX: 2 } }}></motion.div>
                <a href="#skills"><motion.h1 className={isSkills ? "text-pink-400 font-semibold" : "text-white font-semibold"} animate={isSkills ? { x: 48, scale: 1.5 } : {}} variants={{ hover: { x: 48, scale: 1.5 } }}>Skills</motion.h1></a>
            </motion.div>
        </div>
    );
}

export default Sections
