import { ArrowUpRight } from "lucide-react";
import Link from "next/link";



const EngagementSection = () => {

    const keyPoints = [
        {
            title:"Expert-led Learning",
            description:"Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis."
        },
        {
            title:"Interactive Workshops",
            description:"Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights."
        },
        {
            title:"Comprehensive Curriculum",
            description:"Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding."
        },
        {
            title:"Global Recognition",
            description:"You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition."
        },
    ]

    return (
        <section className={`w-full flex bg-[#5712441A] gap-2 items-start justify-between flex-col px-[5%] py-16`}>
            <div>
                <h1 className="text-[#571244] mb-3 w-full text-start text-2xl font-bold">
                    Training The Consultant
                </h1>
                <p className="text-[#571244] w-full text-start text-lg mb-5">
                    Maximise Your Potential as a Certified Trainer
                </p>
                <p className="text-black text-[18px] mb-5">
                    With the help of our Training Consultants program, take a revolutionary step toward becoming a distinguished certified training consultant. Learn from professionals in the field, immerse yourself in a thorough curriculum, and hone your training methods through interactive workshops. Participating in our program will enable you to gain expertise in diverse courses while also developing the abilities to mentor and encourage others in their career advancement.
                </p>
            </div>

            <div className="bg-[#571244] w-full p-5 rounded gap-5 flex flex-col md:flex-row flex-wrap">
                { keyPoints.map((point, index) => (
                    <div key={`${index}_${point.title}`} className="w-full md:w-[48%]">
                        <h4 className="font-semibold">{point.title}</h4>
                        <p className="mt-2 text-sm">{point.description}</p>
                    </div>
                ))}
            </div>

            <Link href={"#"}>
                <button className="bg-[#571244] hover:bg-[#7a195c] text-[16px] text-white px-7 hover:scale-105 cursor-pointer transition py-3 rounded mt-8 hover:text-white">
                    Learn More
                    <ArrowUpRight size={22} className="inline-block ml-2"/>
                </button>
            </Link>

        </section>
    );
}

export default EngagementSection;