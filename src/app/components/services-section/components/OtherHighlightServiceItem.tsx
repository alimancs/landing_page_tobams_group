import { ArrowUpRight, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ServiceItemProps {
    title: string;
    subTitle: string;
    description: string[];
    bulletPoints: string[];
    imageSrc: string;
}


const OtherHighlightServiceItem = ({ title, subTitle, description, bulletPoints, imageSrc}: ServiceItemProps) => {
    return (
        <section className={`w-full rounded-lg flex bg-[#EF435333] gap-2 items-start justify-between flex-col p-5 md:p-8`}>
            <div>
                <p className="text-[#1671D9] w-full text-start text-lg">
                    {subTitle}
                </p>
                <h1 className="text-[#571244] mt-2 w-full text-start text-xl mb-3 italic font-bold">{title}</h1>
                { description.map((desc, index) => (
                    <p key={index} className="text-black mb-5">
                        {desc}
                    </p>
                )) }
            </div>


            <div className="flex-1 text-[18px] h-full w-full flex flex-col md:flex-row justify-between">
                <div className="relative w-full md:w-[48%] h-[30vh] md:h-[50vh] overflow-hidden rounded-l-lg rounded-tr-lg">
                    <Image src={imageSrc} alt={`Services-${title.split(" ").join("-")}`} fill className="mx-auto object-cover mb-8" />
                </div>
                <div className="w-full md:w-[48%] md:mt-0 mt-6 p-5 rounded-lg bg-[#FFFFFF]/30">
                    <div className="flex md:flex-row flex-col gap-4 flex-wrap w-full">
                        { bulletPoints.map((course, index) => (
                            <div key={index} className="text-black w-full md:w-[48%] h-fit py-4 px-4 text-[15px] rounded-md bg-white">
                                <Zap size={13} fill="#EF435333" color="#571244" className="inline-block mr-2"/>
                                {course}
                            </div>
                        )) }
                    </div>
                    <Link href={"#"}>
                        <button className="bg-[#571244] hover:bg-[#7a195c] text-[16px] text-white px-7 hover:scale-105 cursor-pointer transition py-3 rounded mt-8 hover:text-white">
                            Learn More
                            <ArrowUpRight size={22} className="inline-block ml-2"/>
                        </button>
                    </Link>
                </div>
            </div>

        </section>
    );
}

export default OtherHighlightServiceItem;