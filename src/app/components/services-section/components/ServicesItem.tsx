import { Zap } from "lucide-react";
import Image from "next/image";

interface ServiceItemProps {
    title: string;
    description: string;
    bulletPoints: string[];
    imageSrc: string;
    imagePosition?: "left" | "right";
}


const ServiceItem = ({ title, description, bulletPoints, imageSrc, imagePosition }: ServiceItemProps) => {
    return (
        <section className={`w-full flex md:gap-[5%] gap-6 items-center justify-between flex-col md:flex-row py-5 md:py-16 px-[5%]`}>
            <h1 className="text-black w-full text-start md:hidden text-xl font-bold">{title}</h1>
            { imagePosition === "left" && (
            <div className="relative hidden md:block w-[42%] h-[60vh] overflow-hidden rounded-r-2xl rounded-bl-2xl rounded-tl-[50px]">
                <Image src={imageSrc} alt={`Services-${title.split(" ").join("-")}`} fill className="mx-auto object-cover mb-8" />
            </div>
            ) }

            <div className="relative block md:hidden w-full h-[25vh] overflow-hidden rounded-r-2xl rounded-bl-2xl rounded-tl-[50px]">
                <Image src={imageSrc} alt={`Services-${title.split(" ").join("-")}`} fill className="mx-auto object-cover mb-8" />
            </div>

            <div className="flex-1 text-[18px] h-full w-full md:w-[53%]">
                <h1 className="text-black hidden md:block text-2xl md:text-4xl font-bold">
                    {title}
                </h1>
                <div className="w-full md:mt-5">
                    <span className="text-gray-700">
                       {description}
                    </span>

                    <div className="flex flex-col gap-x-4 px-6 gap-y-1 mt-4">
                        { bulletPoints.map((course, index) => (
                            <div key={index} className="text-gray-700">
                                <Zap size={13} fill="#571244" className="inline-block mr-2"/>
                                {course}
                            </div>
                        )) }
                    </div>

                </div>
            </div>

            { imagePosition === "right" && (
            <div className="relative hidden md:block  w-[42%] h-[60vh] overflow-hidden rounded-r-2xl rounded-bl-2xl rounded-tl-[50px]">
                <Image src={imageSrc} alt={`Services-${title.split(" ").join("-")}`} fill className="mx-auto object-cover mb-8" />
            </div>
            ) }
        </section>
    );
}

export default ServiceItem;