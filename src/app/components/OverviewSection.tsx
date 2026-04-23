import { ArrowUpRight, Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const OverviewSection = () => {
    const courses = [
        "Business Analysis",
        "Design Thinking",
        "Effective Communication",
        "Entrepreneurship",
        "Career Development",
        "Business Model"
    ];

    return (
        <section className="w-full flex md:gap-[5%] gap-6 items-center justify-between flex-col md:flex-row py-9 md:py-16 bg-[#5712441A] px-[5%]">
            <h1 className="text-[#571244] md:hidden text-2xl md:text-4xl font-bold">Learning Management System</h1>
            <div className="relative w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] md:h-[85vh] md:w-[85vh] overflow-hidden rounded-full">
                <Image src="/jpgs/man-and-woman.jpg" alt="Overview Image" fill className="mx-auto object-cover mb-8" />
            </div>
            <div className="flex-1 h-full">
                <h1 className="text-[#571244] hidden md:block text-2xl md:text-4xl font-bold">Learning Management System</h1>
                <div className="bg-[#5712441A] w-full md:mt-10 p-6 rounded">
                    <span className="text-black">
                        TG Academy is a hub of knowledge and skill-building resources designed to empower
                         tech talents on their learning journey. From technical courses covering the latest
                          programming languages and development frameworks to soft skills training in leadership,
                           effective communication and project management, TG Academy offers a wide range of
                            courses to cater to diverse learning needs. With accessible and interactive learning materials,
                             individuals can enhance their skills and stay ahead in today's competitive tech landscape.
                    </span>
            
                    <h3 className="text-[#571244] font-bold mt-4">Some of our courses include:</h3>

                    <div className="flex flex-row gap-x-4 gap-y-1 mt-3 flex-wrap">
                        { courses.map((course, index) => (
                            <div key={index} className="text-black">
                                <Dot className="inline-block"/>
                                {course}
                            </div>
                        )) }
                    </div>

                    <Link href={"#"}>
                        <button className="bg-[#571244] hover:bg-[#7a195c] md:hidden text-[16px] text-white px-7 hover:scale-105 cursor-pointer transition py-3 rounded mt-8 hover:text-white">
                            Learn More
                            <ArrowUpRight size={22} className="inline-block ml-2"/>
                        </button>
                    </Link>
                </div>
                <Link href={"#"}>
                    <button className="bg-[#571244] hover:bg-[#7a195c] hidden md:block text-[16px] text-white px-7 hover:scale-105 cursor-pointer transition py-3 rounded mt-8 hover:text-white">
                        Learn More
                        <ArrowUpRight size={22} className="inline-block ml-2"/>
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default OverviewSection;