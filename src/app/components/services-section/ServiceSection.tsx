import { buffer } from "stream/consumers";
import ServiceItem from "./components/ServicesItem";
import HighlightServiceItem from "./components/HighlightServiceItem";
import image from "next/image";
import OtherHighlightServiceItem from "./components/OtherHighlightServiceItem";

const ServiceSection = () => {
    const services = [
        {
            title: "Corporate Trainings",
            description: "Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values.",
            image: "/jpgs/corporate-training.jpg",
            bulletPoints: [
                "Leadership Training",
                "Strategic Planning & Implementation",
                "Project Management",
                "Sustainability Training",
            ]
        },

        {
            title: "Personnalised Individual Training",
            description: "Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals.",
            image: "/jpgs/p-individual-training.jpg",
            bulletPoints: [
                "Leadership Development",
                "Soft Skills Development",
                "Industry-Specific Knowledge",
                "Technical Skills Enhancement",
                "Time Management & Productivity",
                "Career Development",
            ]
        },

        {
            title: "Capacity Development",
            description: "At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:",
            image: "/jpgs/capacity-dev.jpg",
            bulletPoints: [
                "Tailored Training Programs",
                "Expert-Led Workshops",
                "Personalized Mentorship",
                "Technical Skills Enhancement",
                "Collaborative Learning Environment",
                "Ongoing Support and Resources",
            ]
        },
    ];

    const highlightService = {
        title: "Management Development Program",
        description: ["Tobams Group offers a comprehensive Management Development Program designed to equip corporate organisations with the high  -performing leaders they need to  thrive."," Our program includes workshops, seminars, coachin  sessions, online courses, and experiential learnin  opportunities designed to improve leadership, strategic  thinking, communication, and other essential manageria  competencies for corporate organisations."],
        image: "/jpgs/m-dev-program.jpg",
        bulletPoints: [
            "Enhanced Leadership Skills",
            "Improved Employee Engagement",
            "Stronger Organizational Culture",
            "Substantial Growth",
        ]
    };

    const otherHighlightService = {
        title: "Transformation Hub With Jite Newton",
        subTitle: "Learn With Our CEO",
        description: ["Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights and strategies for personal and professional growth. Whether you're seeking to advance your career or enhance your leadership skills, the Transformation Hub provides a transformative learning experience to unlock your full potential and drive success in your endeavours."],
        image: "/jpgs/training-hub.jpg",
        bulletPoints: [
            "Strategic Career Guidance",
            "Leadership Development",
            "CV Development",
            "Sustainability Leadership",
            "Communication Skills",
            "Business Model"
        ]
    };

    return (
        <section className="w-full flex flex-col gap-2 py-7 md:py-16 bg-white">
            { services.map((service, index) => (
                <ServiceItem 
                key={index} 
                imagePosition={((index+1)%2)!==0?"right":"left"}
                title={service.title} 
                description={service.description} 
                imageSrc={service.image} 
                bulletPoints={service.bulletPoints} />
            )) }
            <div className="bg-gray-100 flex flex-col gap-16 px-[5%] py-16">
                <HighlightServiceItem
                title={highlightService.title} 
                description={highlightService.description} 
                imageSrc={highlightService.image} 
                bulletPoints={highlightService.bulletPoints} 
                 />
            </div>
            <div className="flex flex-col gap-16 px-[5%] py-16">
                <OtherHighlightServiceItem
                title={otherHighlightService.title}
                subTitle={otherHighlightService.subTitle}
                description={otherHighlightService.description}
                imageSrc={otherHighlightService.image}
                bulletPoints={otherHighlightService.bulletPoints}
                />
            </div>
        </section>  
    )
};

export default ServiceSection;