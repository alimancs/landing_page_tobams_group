import Link from "next/link";

const ContactCTA = () => {
    return (
        <div className="w-full py-10 md:px-[5%] px-[7%] flex flex-col md:flex-row md:justify-between justify-start items-start md:items-center bg-[#1D0617]">
            <div>
                <p className="text-lg">Ready to be a part of something extraordinary?</p>
                <p className="text-2xl md:text-3xl font-semibold mt-2">Let’s work together to create a difference</p>
            </div>
            <Link href={"#"}>
                <button className="bg-[#571244] hover:bg-[#7a195c] text-[16px] hover:text-white px-7 hover:scale-105 cursor-pointer transition py-3 rounded md:mt-0 mt-7">
                    Get In Touch
                </button>
            </Link>
        </div>
    )
}

export default ContactCTA;