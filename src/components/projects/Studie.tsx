// framer
import { motion } from "framer-motion";

// components
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

function Studie() {
    return (
        <motion.div className="w-1/2 h-fit max-lg:w-full" initial={{ x: "-20%", opacity: 0 }} animate={{ x: 0, opacity: 100 }} whileHover="hover">
            <Card className="grid grid-cols-1 bg-primary/90 border-black overflow-hidden px-8">
                <CardHeader className="flex flex-col justify-between row-start-1 col-start-1 px-0 pb-0 gap-2">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-4">
                            <CardTitle className="text-5xl text-white max-lg:text-2xl">Studie</CardTitle>
                            <motion.a href="https://chinteck2.github.io/FED-Assignment1" target="_blank" whileHover={{ scale: 1.2 }}><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path className="stroke-pink-400" d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/><path className="stroke-white" d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/></svg></motion.a>
                        </div>
                        <p className="w-2/5 text-xl text-white max-lg:text-sm">A mock productivity SaaS website</p>
                    </div>
                    <CardFooter className="flex items-end row-start-1 col-start-1 px-0 gap-4 z-10">
                        <motion.a href="https://github.com/chinteck2/FED-Assignment1" target="_blank" whileHover={{ scale: 1.2 }}><svg width="48px" height="48px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path className="fill-white" fill-rule="evenodd" clip-rule="evenodd" d="M7.49936 0.850006C3.82767 0.850006 0.849976 3.8273 0.849976 7.50023C0.849976 10.4379 2.75523 12.9306 5.39775 13.8104C5.73047 13.8712 5.85171 13.6658 5.85171 13.4895C5.85171 13.3315 5.846 12.9135 5.84273 12.3587C3.99301 12.7604 3.60273 11.4671 3.60273 11.4671C3.30022 10.6988 2.86423 10.4942 2.86423 10.4942C2.26044 10.0819 2.90995 10.0901 2.90995 10.0901C3.57742 10.137 3.9285 10.7755 3.9285 10.7755C4.52167 11.7916 5.48512 11.4981 5.86396 11.3279C5.92438 10.8984 6.09625 10.6053 6.28608 10.4391C4.80948 10.2709 3.25695 9.70063 3.25695 7.15241C3.25695 6.42615 3.51618 5.83298 3.94157 5.368C3.87299 5.1998 3.64478 4.52375 4.00689 3.60807C4.00689 3.60807 4.56494 3.42926 5.83538 4.28941C6.36568 4.14204 6.93477 4.06856 7.50018 4.0657C8.06518 4.06856 8.63386 4.14204 9.16498 4.28941C10.4346 3.42926 10.9918 3.60807 10.9918 3.60807C11.3548 4.52375 11.1266 5.1998 11.0584 5.368C11.4846 5.83298 11.7418 6.42615 11.7418 7.15241C11.7418 9.70716 10.1868 10.2693 8.70571 10.4338C8.94412 10.6392 9.15681 11.045 9.15681 11.6655C9.15681 12.5542 9.14865 13.2715 9.14865 13.4895C9.14865 13.6675 9.26867 13.8745 9.60588 13.8095C12.2464 12.9282 14.15 10.4375 14.15 7.50023C14.15 3.8273 11.1723 0.850006 7.49936 0.850006Z" fill="#000000" /></svg></motion.a>
                        <Badge className="bg-pink-400 hover:bg-pink-400 max-md:hidden">HTML</Badge>
                        <Badge className="bg-pink-400 hover:bg-pink-400 max-md:hidden">CSS</Badge>
                        <Badge className="bg-pink-400 hover:bg-pink-400 max-md:hidden">JavaScript</Badge>
                    </CardFooter>
                </CardHeader>
                <CardContent className="flex relative left-1/2 top-1/4 row-start-1 col-start-1 -rotate-6 px-0 gap-4">
                    <AspectRatio ratio={16 / 9}>
                        <motion.img className="rounded" variants={{ hover: { y: -16 } }} src="./studie.png" />
                    </AspectRatio>
                </CardContent>
            </Card>
        </motion.div>
    );
}

export default Studie
