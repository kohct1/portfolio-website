import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

function NgeeAnnPolytechnic() {
    return (
        <Card className="flex bg-black border-black px-8 ease-in-out duration-300 hover:bg-primary/90 max-lg:flex-col max-lg:px-0 max-lg:hover:bg-black">
            <CardHeader className="w-1/4 px-0 max-lg:w-full max-lg:py-0">
                <CardTitle className="text-md text-white max-lg:text-sm">2023 - Present</CardTitle>
            </CardHeader>
            <div className="w-3/4 max-lg:w-full">
                <CardHeader className="pr-0 max-lg:pl-0 max-lg:py-4">
                    <CardTitle className="text-white max-lg:text-xl">Ngee Ann Polytechnic</CardTitle>
                </CardHeader>
                    <CardContent className="pr-0 max-lg:pl-0">
                    <p className="text-white max-lg:text-sm">I am currently pursuing a Diploma in Information Technology at Ngee Ann Polytechnic, where I have achieved a cumulative GPA of 3.87. My academic excellence has been recognized with a place on the Director&apos;s List for the academic year 2023/2024. Outside of academics, I am actively involved in student life as a member of Overflow and NullSec, contributing to both communities and enhancing my overall experience at the polytechnic.</p>
                </CardContent>
            </div>
        </Card>
    );
}

export default NgeeAnnPolytechnic
