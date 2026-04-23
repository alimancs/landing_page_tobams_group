import { Zap } from "lucide-react";
import Image from "next/image";

interface ServiceItemProps {
    title: string;
    description: string[];
    bulletPoints: string[];
    imageSrc: string;
}


const HighlightServiceItem = ({ title, description, bulletPoints, imageSrc }: ServiceItemProps) => {
    return (
        <section className={`w-full rounded-lg flex md:gap-10 bg-[#2C0922] gap-6 items-center justify-between flex-col md:flex-row p-5 md:p-8`}>
            <h1 className="text-white w-full text-start md:hidden text-xl font-bold">{title}</h1>

            <div className="relative w-full md:w-[50%] h-[40vh] md:h-[90vh] overflow-hidden rounded-l-lg rounded-tr-lg">
                <Image src={imageSrc} alt={`Services-${title.split(" ").join("-")}`} fill className="mx-auto object-cover mb-8" />
            </div>

            <div className="flex-1 text-[18px] h-full w-full md:w-[50%]">
                <h1 className="text-white hidden md:block text-2xl md:text-4xl font-bold">
                    {title}
                </h1>
                <div className="w-full md:mt-5">
                    { description.map((desc, index) => (
                        <p key={index} className="text-white mb-5">
                            {desc}
                        </p>
                    )) }

                    <div className="flex flex-col w-full items-center gap-4 md:px-6 mt-6">
                        { bulletPoints.map((course, index) => (
                            <div key={index} className="text-white w-full p-2 md:px-6 px-4 text-[15px] rounded-md bg-[#8F6182]">
                                <Zap size={13} fill="white" className="inline-block mr-2"/>
                                {course}
                            </div>
                        )) }
                    </div>

                </div>
            </div>

        </section>
    );
}

export default HighlightServiceItem;