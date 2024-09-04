// components
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

function FramerMotionSkill() {
    return (
        <Card className="flex justify-between items-center bg-black border-black ease-in-out duration-300 px-8 hover:bg-primary/90 max-lg:px-0 max-lg:hover:bg-black">
            <CardHeader className="w-3/4 flex flex-col px-0 gap-2 max-lg:w-2/3">
                <CardTitle className="text-white max-lg:text-xl">Framer Motion</CardTitle>
                <CardDescription className="text-white max-lg:text-sm">A library for creating animations and interactions in React applications.</CardDescription>
            </CardHeader>
            <svg width="48px" height="48px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="none"/><path className="fill-white" d="M9.3,2H38.7V16.7H24Zm0,14.7H24L38.7,31.3H9.3Zm0,14.6H24V46Z"/></svg>
        </Card>
    );
}

export default FramerMotionSkill
