import Image from "next/image";

const Avatar = ({ name, bgColor, avatar }: { name: string; avatar:string; bgColor: string }) => (
  <div
    className="w-[52px] h-[52px] relative rounded-full overflow-hidden flex items-center justify-center font-bold shrink-0"
  >
    <Image src={avatar} fill className="object-cover" alt={name}/>
  </div>
);

export default Avatar;