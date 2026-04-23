import Link from "next/link";

const BookCTA = () => {
    return (
        <div className="w-full flex justify-center items-center py-14 md:px-0 px-[5%]">
            <div className="bg-[#571244] flex flex-col text-center justify-center items-center py-9 rounded p-5 w-full max-w-5xl">
                <p className="text-lg hidden md:block">Want to accelerate professional growth and development at your organisation?</p>
                <p className="text-lg hidden md:block">See how we can help.</p>
                <p className="text-lg md:hidden">
                    Don't just dream it—let's build it! Click now and start your project with Tobams Group. Your journey to digital excellence begins here.
                </p>
                <Link href={"#"}>
                    <button className="text-[#571244] hover:bg-gray-100 text-[16px] bg-white px-7 hover:scale-105 cursor-pointer transition py-3 rounded mt-5">
                        Book a Consultation
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default BookCTA;