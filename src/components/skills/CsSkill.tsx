// components
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
function CsSkill() {
    return (
        <Card className="flex justify-between items-center bg-black border-black ease-in-out duration-300 px-8 hover:bg-primary/90 max-lg:px-0 max-lg:hover:bg-black">
            <CardHeader className="w-3/4 flex flex-col px-0 gap-2 max-lg:w-2/3">
                <CardTitle className="text-white max-lg:text-xl">C#</CardTitle>
                <CardDescription className="text-white max-lg:text-sm">A programming language developed by Microsoft, commonly used for building Windows applications and games.</CardDescription>
            </CardHeader>
            <svg width="48px" height="48px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path className="fill-white" d="M29,10.232a2.387,2.387,0,0,0-.318-1.244,2.451,2.451,0,0,0-.936-.879Q22.552,5.241,17.353,2.376A2.642,2.642,0,0,0,14.59,2.4c-1.378.779-8.275,4.565-10.331,5.706A2.287,2.287,0,0,0,3,10.231V21.77a2.4,2.4,0,0,0,.3,1.22,2.434,2.434,0,0,0,.954.9c2.056,1.141,8.954,4.927,10.332,5.706a2.642,2.642,0,0,0,2.763.026q5.19-2.871,10.386-5.733a2.444,2.444,0,0,0,.955-.9,2.4,2.4,0,0,0,.3-1.22V10.232" /><path className="fill-white" d="M28.549,23.171a2.126,2.126,0,0,0,.147-.182,2.4,2.4,0,0,0,.3-1.22V10.232a2.387,2.387,0,0,0-.318-1.244c-.036-.059-.089-.105-.13-.16L16,16Z" /><path className="fill-white" d="M28.549,23.171,16,16,3.451,23.171a2.435,2.435,0,0,0,.809.72c2.056,1.141,8.954,4.927,10.332,5.706a2.642,2.642,0,0,0,2.763.026q5.19-2.871,10.386-5.733A2.43,2.43,0,0,0,28.549,23.171Z" /><path d="M19.6,18.02a4.121,4.121,0,1,1-.027-4.087l3.615-2.073A8.309,8.309,0,0,0,7.7,16a8.216,8.216,0,0,0,1.1,4.117A8.319,8.319,0,0,0,23.211,20.1L19.6,18.02" /><path d="M27.67,15.271V14.033H26.663V13.027H25.424v1.006H23.916V13.027H22.677v1.006H21.669v1.238h1.006v1.513H21.669v1.237h1.006v1.006h1.239V18.021h1.509v1.006h1.239V18.021h1.006V16.784h-1V15.271Zm-2.246,1.513H23.916V15.271h1.508Z" /></svg>
        </Card>
    );
}

export default CsSkill
