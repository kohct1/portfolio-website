
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

function WestSpringSecondarySchool() {
    return (
        <Card className="flex bg-black border-black px-8 ease-in-out duration-300 hover:bg-primary/90 max-lg:flex-col max-lg:px-0 max-lg:hover:bg-black">
            <CardHeader className="w-1/4 px-0 max-lg:w-full max-lg:py-0">
                <CardTitle className="text-md text-white max-lg:text-sm">2019 - 2022</CardTitle>
            </CardHeader>
            <div className="w-3/4 max-lg:w-full">
            <CardHeader className="pr-0 max-lg:pl-0 max-lg:py-4">
                <CardTitle className="text-white max-lg:text-xl">West Spring Secondary School</CardTitle>
            </CardHeader>
            <CardContent className="pr-0 max-lg:pl-0">
                <p className="text-white max-lg:text-sm">I attended West Spring Secondary School, achieving an L1R5 score of 8 and an L1R4 score of 4 in my GCE O-Levels. I received the Edusave Scholarship from 2019 to 2021 and the Edusave Merit Bursary in 2022. I also served as Assistant Sergeant Major and Warren Officer in the National Civil Defence Cadet Corps and was Class Chairperson from 2019 to 2020.</p>
            </CardContent>
            </div>
        </Card>
    );
}

export default WestSpringSecondarySchool