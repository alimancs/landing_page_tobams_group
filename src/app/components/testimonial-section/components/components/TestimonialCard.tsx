import { FC } from "react";
import Avatar from "@/app/components/Avatar";

interface TestimonialCardProps {
  data: {
    avatar: string;
    bgColor: string;
    name: string;
    company: string;
    role: string;
    text: string;
  };
}

const TestimonialCard: FC<TestimonialCardProps> = ({ data }) => {
  return (
    <div
      className="border border-[#e8e8e8] border-l-4 border-l-[#c0305a] rounded-lg p-7 pb-8 bg-white flex flex-col gap-5 w-full h-full"
    >
      {/* Author Row */}
      <div className="flex items-center gap-[14px]">
        <Avatar name={data.name} avatar={data.avatar} bgColor={data.bgColor} />
        <div>
          <p className="text-[15px] font-bold text-[#111111] leading-tight">
            {data.name}
          </p>
          <p className="text-[13px] text-[#888888] mt-[3px] leading-tight">
            {data.role}, {data.company}
          </p>
        </div>
      </div>

      {/* Quote */}
      <p className="text-[14.5px] text-[#333333] leading-relaxed">
        {data.text}
      </p>
    </div>
  );
};

export default TestimonialCard;