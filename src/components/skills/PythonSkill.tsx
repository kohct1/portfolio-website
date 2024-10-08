// components
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

function PythonSkill() {
    return (
        <Card className="flex justify-between items-center bg-black border-black ease-in-out duration-300 px-8 hover:bg-primary/90 max-lg:px-0 max-lg:hover:bg-black">
            <CardHeader className="w-3/4 flex flex-col px-0 gap-2 max-lg:w-2/3">
                <CardTitle className="text-white max-lg:text-xl">Python</CardTitle>
                <CardDescription className="text-white max-lg:text-sm">A user-friendly programming language used for web development, data science, and automation.</CardDescription>
            </CardHeader>
            <svg width="48px" height="48px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path className="fill-white" d="M11.9135 0C5.82079 4.36975e-07 6.20126 2.65599 6.20126 2.65599L6.20805 5.40757H12.0222V6.23372H3.89871C3.89871 6.23372 0 5.78926 0 11.969C-4.34699e-07 18.1488 3.40288 17.9296 3.40288 17.9296H5.43374V15.062C5.43374 15.062 5.32428 11.6413 8.78229 11.6413C12.2403 11.6413 14.5489 11.6413 14.5489 11.6413C14.5489 11.6413 17.7887 11.6939 17.7887 8.4937C17.7887 5.29347 17.7887 3.20221 17.7887 3.20221C17.7887 3.20221 18.2806 0 11.9135 0ZM8.70758 1.85032C9.28604 1.85032 9.75357 2.3203 9.75357 2.90179C9.75357 3.48328 9.28604 3.95326 8.70758 3.95326C8.12912 3.95326 7.66158 3.48328 7.66158 2.90179C7.66158 2.3203 8.12912 1.85032 8.70758 1.85032Z" fill="#000000"/><path className="fill-white" d="M12.0867 24C18.1794 24 17.7989 21.344 17.7989 21.344L17.7921 18.5924H11.978V17.7663H20.1014C20.1014 17.7663 24.0002 18.2108 24.0002 12.031C24.0002 5.85123 20.5973 6.07038 20.5973 6.07038H18.5664V8.93803C18.5664 8.93803 18.6759 12.3587 15.2179 12.3587C11.7598 12.3587 9.4513 12.3587 9.4513 12.3587C9.4513 12.3587 6.21143 12.3061 6.21143 15.5063C6.21143 18.7065 6.21143 20.7978 6.21143 20.7978C6.21143 20.7978 5.71953 24 12.0867 24ZM15.2926 22.1497C14.7141 22.1497 14.2466 21.6797 14.2466 21.0982C14.2466 20.5167 14.7141 20.0468 15.2926 20.0468C15.871 20.0468 16.3386 20.5167 16.3386 21.0982C16.3386 21.6797 15.871 22.1497 15.2926 22.1497Z" fill="#000000"/></svg>
        </Card>
    );
}

export default PythonSkill
