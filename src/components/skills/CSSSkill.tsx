// components
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

function CSSSkill() {
    return (
        <Card className="flex justify-between items-center bg-black border-black ease-in-out duration-300 px-8 hover:bg-primary/90 max-lg:px-0 max-lg:hover:bg-black">
            <CardHeader className="w-3/4 flex flex-col px-0 gap-2 max-lg:w-2/3">
                <CardTitle className="text-white max-lg:text-xl">CSS</CardTitle>
                <CardDescription className="text-white max-lg:text-sm">A style sheet language used to design and format the look of web pages.</CardDescription>
            </CardHeader>
            <svg width="48px" height="48px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><polygon className="fill-white" points="5.902 27.201 3.656 2 28.344 2 26.095 27.197 15.985 30 5.902 27.201" /><polygon className="fill-white" points="16 27.858 24.17 25.593 26.092 4.061 16 4.061 16 27.858" /><polygon className="fill-black" points="16 13.191 20.09 13.191 20.372 10.026 16 10.026 16 6.935 16.011 6.935 23.75 6.935 23.676 7.764 22.917 16.282 16 16.282 16 13.191" /><polygon className="fill-black" points="16.019 21.218 16.005 21.222 12.563 20.292 12.343 17.827 10.67 17.827 9.24 17.827 9.673 22.68 16.004 24.438 16.019 24.434 16.019 21.218" /><polygon className="fill-black" points="19.827 16.151 19.455 20.29 16.008 21.22 16.008 24.436 22.344 22.68 22.391 22.158 22.928 16.151 19.827 16.151" /><polygon className="fill-black" points="16.011 6.935 16.011 8.855 16.011 10.018 16.011 10.026 8.555 10.026 8.555 10.026 8.545 10.026 8.483 9.331 8.342 7.764 8.268 6.935 16.011 6.935" /><polygon className="fill-black" points="16 13.191 16 15.111 16 16.274 16 16.282 12.611 16.282 12.611 16.282 12.601 16.282 12.539 15.587 12.399 14.02 12.325 13.191 16 13.191" /></svg>
        </Card>
    );
}

export default CSSSkill
