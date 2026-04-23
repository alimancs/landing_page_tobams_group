import { Mail, Phone, XIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { InstagramIcon, LinkedInIcon } from "./icons";



const whatWeDo = [
  "Sustainability Services",
  "Strategy Planning and Implementation",
  "Tech Talent Solutions",
  "Training and Development",
  "IT Consulting Services",
  "Social Impact",
  "Talent Recruitment",
];

const company = [
  "About",
  "Jobs",
  "Projects",
  "Our Founder",
  "Business Model",
  "The Team",
  "Contact Us",
  "Blog",
  "FAQs",
  "Testimonials",
];

const solution = [
  "Tobams Group Academy",
  "Help a Tech Talent",
  "Campus Ambassadors Program",
  "Join Our Platform",
  "Pricing",
  "Book a Consultation",
  "Join Our Slack Community",
];

export default function Footer() {
  return (
    <footer className="bg-[#11040E] text-[#e5e5e5] w-full">
      {/* Top Navigation Section */}
      <div className="max-w-screen mx-auto md:px-[5%] px-[7%] py-16 grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
        {/* Brand Column */}
        <div className="flex flex-col gap-5">
          <div className="relative w-34 md:w-38 h-20 md:h-23">
            <Image 
              src="/tobams-secondary-logo.svg" 
              alt="Logo" 
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm leading-relaxed text-[#aaaaaa] max-w-[300px]">
            Tobams Group is an innovative consultancy firm reshaping the future of tech talent
            development in Africa, specializing in talent acquisition, internships, and skill
            development with a global perspective.
          </p>
          <div className="flex gap-3 mt-1">
            {[LinkedInIcon, InstagramIcon, XIcon].map((Icon, i) => (
              <button 
                key={i} 
                className="w-[42px] h-[42px] rounded-full border-2 border-[#444444] flex items-center justify-center text-white cursor-pointer transition-all duration-200 hover:border-[#EF4353] hover:bg-[#EF4353]/10 bg-transparent"
              >
                <Icon />
              </button>
            ))}
          </div>
        </div>

        {/* What We Do */}
        <div className="flex flex-col">
          <h3 className="text-[17px] font-bold text-white mb-[18px] tracking-wide">What We Do</h3>
          {whatWeDo.map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-sm text-[#aaaaaa] leading-none pb-[14px] cursor-pointer transition-colors duration-200 hover:text-white block"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Company */}
        <div className="flex flex-col">
          <h3 className="text-[17px] font-bold text-white mb-[18px] tracking-wide">Company</h3>
          {company.map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-sm text-[#aaaaaa] leading-none pb-[14px] cursor-pointer transition-colors duration-200 hover:text-white block"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Solution */}
        <div className="flex flex-col">
          <h3 className="text-[17px] font-bold text-white mb-[18px] tracking-wide">Solution</h3>
          {solution.map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-sm text-[#aaaaaa] leading-none pb-[14px] cursor-pointer transition-colors duration-200 hover:text-white block"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Info Box Section */}
      <div className="max-w-screen mx-auto px-[7%] md:px-[5%] mb-7">
        <div className="grid grid-cols-1 md:grid-cols-3 bg-white/6 border border-[#2a2a2a] rounded-lg overflow-hidden">
          {/* Registered Offices heading + UK */}
          <div className="p-7 md:p-8 border-r border-[#2a2a2a]">
            <h4 className="text-base font-bold text-white mb-5">Registered Offices</h4>
            <p className="text-[13px] font-semibold text-[#EF4353] mb-1.5">United Kingdom</p>
            <p className="text-[13px] text-[#aaaaaa] leading-relaxed mb-0">
              07451196 (Registered by Company House)
              <br />
              Vine Cottages, 215 North Street, Romford,
              <br />
              Essex, United Kingdom, RM1 4QA
            </p>
          </div>

          {/* Nigeria */}
          <div className="p-7 md:p-8 pt-8 border-r border-[#2a2a2a]">
            <p className="text-[13px] font-semibold text-[#EF4353] mb-1.5">Nigeria</p>
            <p className="text-[13px] text-[#aaaaaa] leading-relaxed mb-0">
              RC 1048722 (Registered by the Corporate Affairs Commission)
              <br />
              4, Muaz Close, Angwar-Rimi
            </p>
          </div>

          {/* Contact Information */}
          <div className="p-7 md:p-8">
            <h4 className="text-base font-bold text-white mb-5">Contact Information</h4>
            <div className="flex items-center gap-2.5 mb-3 text-[#aaaaaa] text-[13px]">
              <span className="w-7 h-7 bg-[#EF4353] rounded-md flex items-center justify-center shrink-0 text-white">
                <Mail />
              </span>
              <span>theteam@tobamsgroup.com</span>
            </div>
            <div className="flex items-center gap-2.5 mb-3 text-[#aaaaaa] text-[13px]">
              <span className="w-7 h-7 bg-[#EF4353] rounded-md flex items-center justify-center shrink-0 text-white">
                <Phone />
              </span>
              <span>+447886600748</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-screen mx-auto px-12 md:flex-row flex-col-reverse py-5 border-t border-[#2a2a2a] flex flex-wrap justify-between items-center gap-3">
        <span className="text-[13px] text-gray-400 md:text-start text-center">
          Copyright © Tobams Group, 2024. All rights reserved.
        </span>
        <div className="flex flex-row flex-wrap items-center justify-center  md:gap-8 gap-3">
          <a href="#" className="text-[14px] text-gray-400 cursor-pointer transition-colors duration-200 hover:text-white">
            Terms and Conditions
          </a>
          <a href="#" className="text-[14px] text-gray-400 cursor-pointer transition-colors duration-200 hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="text-[14px] text-gray-400 cursor-pointer transition-colors duration-200 hover:text-white">
            Cookies Policy
          </a>
        </div>
      </div>
    </footer>
  );
}