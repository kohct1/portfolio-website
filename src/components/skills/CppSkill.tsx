// components
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

function CppSkill() {
    return (
        <Card className="flex justify-between items-center bg-black border-black ease-in-out duration-300 px-8 hover:bg-primary/90 max-lg:px-0 max-lg:hover:bg-black">
            <CardHeader className="w-3/4 flex flex-col px-0 gap-2 max-lg:w-2/3">
                <CardTitle className="text-white max-lg:text-xl">C++</CardTitle>
                <CardDescription className="text-white max-lg:text-sm">An extension of C, used for system software, games, and performance-critical applications.</CardDescription>
            </CardHeader>
            <svg width="48px" height="48px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path className="fill-white" d="M29,10.232a2.387,2.387,0,0,0-.318-1.244,2.451,2.451,0,0,0-.936-.879Q22.552,5.241,17.353,2.376A2.642,2.642,0,0,0,14.59,2.4c-1.378.779-8.275,4.565-10.331,5.706A2.287,2.287,0,0,0,3,10.231V21.77a2.4,2.4,0,0,0,.3,1.22,2.434,2.434,0,0,0,.954.9c2.056,1.141,8.954,4.927,10.332,5.706a2.642,2.642,0,0,0,2.763.026q5.19-2.871,10.386-5.733a2.444,2.444,0,0,0,.955-.9,2.4,2.4,0,0,0,.3-1.22V10.232" /><path className="fill-white" d="M28.549,23.171a2.126,2.126,0,0,0,.147-.182,2.4,2.4,0,0,0,.3-1.22V10.232a2.387,2.387,0,0,0-.318-1.244c-.036-.059-.089-.105-.13-.16L16,16Z" /><path className="fill-white" d="M28.549,23.171,16,16,3.451,23.171a2.435,2.435,0,0,0,.809.72c2.056,1.141,8.954,4.927,10.332,5.706a2.642,2.642,0,0,0,2.763.026q5.19-2.871,10.386-5.733A2.43,2.43,0,0,0,28.549,23.171Z" /><path d="M19.6,18.02a4.121,4.121,0,1,1-.027-4.087l3.615-2.073A8.309,8.309,0,0,0,7.7,16a8.216,8.216,0,0,0,1.1,4.117A8.319,8.319,0,0,0,23.211,20.1L19.6,18.02" /><polygon points="24.076 15.538 23.15 15.538 23.15 14.617 22.225 14.617 22.225 15.538 21.299 15.538 21.299 16.461 22.225 16.461 22.225 17.381 23.15 17.381 23.15 16.461 24.076 16.461 24.076 15.538" /><polygon points="27.549 15.538 26.623 15.538 26.623 14.617 25.697 14.617 25.697 15.538 24.771 15.538 24.771 16.461 25.697 16.461 25.697 17.381 26.623 17.381 26.623 16.461 27.549 16.461 27.549 15.538" /></svg>
        </Card>
    );
}

export default CppSkill
