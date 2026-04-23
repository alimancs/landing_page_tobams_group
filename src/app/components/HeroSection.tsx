import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="relative w-full h-[50vh] md:h-[75vh] bg-gray-100 flex items-center justify-center">
            <Image src="/jpgs/hero.jpg" alt="Hero Image" fill className="object-cover" />
            <div className="text-center gap-y-3 z-500 bg-black/70 h-full w-full flex flex-col justify-center items-center px-3">
                <div className="px-15 rounded-full py-2 bg-white/10">
                    <span className="text-white">WHAT WE DO</span>
                </div>
                <h1 className="text-2xl md:text-6xl font-extrabold text-white">Training and Development</h1>
                <p className="text-white max-w-[92%] md:max-w-[70%] mb-6">
                    Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward in today's ever-evolving landscape.

                </p>
                <a href="#contact" className="inline-block hover:scale-105 transition bg-[#571244] text-white px-6 py-3 rounded-md hover:bg-[#7a195c]">
                    Book a Consultation
                </a>
            </div>
        </section>
    );
}

export default HeroSection;