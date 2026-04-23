"use client";

import Image from "next/image";
import {ChevronDown, Menu, User, X} from "lucide-react";
import colors from "../../utils/colors";
import { useEffect, useRef, useState } from "react";
import HeaderNavItem from "./components/HeaderNavItem";
import NavDropDownItems from "./components/NavDropDownItems";


const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    // Toggle dropdown
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    // Close dropdown when clicking outside
    useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
        }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);


  return (
    <header className="w-full bg-white">
        <div className="flex border-b md:px-[4%] px-[5%] border-transparent md:border-b-gray-200 items-center justify-between w-full">
            <div className="relative md:w-38 w-34 h-20 md:h-23">
                <Image src="/tobams-secondary-logo.svg" alt="Logo" 
                fill
                className="object-contain"
                 />
            </div>

            {/* Mobile menu button */}
            <button onClick={()=>{setIsMobileMenuOpen(!isMobileMenuOpen)}} className={`bg-[#571244] p-2 md:hidden rounded`}>
                { isMobileMenuOpen ? <X size={22} color={"#DDD0DA"} /> : <Menu size={22} color={"#DDD0DA"} /> }
            </button>

            {/* Desktop right Navs */}
            <nav className="md:flex hidden flex-row gap-5">
                <div className="relative" ref={dropdownRef}>
                    <button 
                    onClick={toggleDropdown}
                    className={`bg-[#571244] cursor-pointer hover:scale-105 transition ease-in-out flex flex-row gap-2 items-center rounded px-4 py-2`}>
                        <div className={`bg-[#DDD0DA] p-1 rounded-full`} >
                            <User size={18} color={"#571244"}/>
                        </div>
                        <span>Account</span>
                        <ChevronDown size={18} color={"#DDD0DA"} />
                    </button>
                    
                    {isDropdownOpen && (
                        <div className="absolute top-full right-0 mt-2 bg-white rounded shadow-lg overflow-hidden z-10 min-w-[160px]">
                        <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 transition-colors">
                            Sign In
                        </button>
                        <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 transition-colors">
                            Sign Up
                        </button>
                        </div>
                    )}
                </div>

                <button className={`bg-[#EF4353] cursor-pointer hover:scale-105 transition ease-in-out flex flex-row gap-2 items-center rounded px-4 py-2`}>
                    <span>Take assessment</span>
                </button>
            </nav>
        </div>
        
        {/* Bottom Navs (shown on desktop) */}
        <nav className="w-full md:flex hidden px-[4%]">
            <ul className={`flex flex-row items-center justify-center w-full text-[#571244] gap-7 py-4`}>
                <HeaderNavItem opened={true} label="About" dropdown={true} />
                <HeaderNavItem label="What We Do" dropdown={true} />
                <HeaderNavItem label="Jobs" dropdown={true} />
                <HeaderNavItem label="Projects" />
                <HeaderNavItem label="TG Academy" />
                <HeaderNavItem label="Strategic Partnership" />
                <HeaderNavItem label="Pricing" />
                <HeaderNavItem label="Book a Consultation" />
            </ul>
        </nav>

        { /* Mobile dropdown menu (shown on mobile) */}
        { isMobileMenuOpen &&
            <nav className={`bg-white fixed z-2000 border-y border-y-gray-200 py-5 w-full top-20 left-0`}>
                <ul className="flex flex-col text-start items-start px-[6%] gap-6 py-4">
                    <HeaderNavItem opened={true} label="About" dropdown={true} dropDownItems={
                        <NavDropDownItems 
                        items={["Company", "Team", "Careers"]}/>
                    } />
                    <HeaderNavItem label="What We Do" dropdown={true} dropDownItems={
                        <div className="flex flex-col">
                            <NavDropDownItems 
                            items={["Talent Assessment", "Talent Development", "Talent Acquisition"]} />
                        </div>
                    } />
                    <HeaderNavItem label="Jobs" dropdown={true} dropDownItems={
                        <div className="flex flex-col">
                            <NavDropDownItems 
                            items={["Product Designer", "Software Engineer", "Data Scientist"]} />
                        </div>
                    } />
                    <HeaderNavItem label="Projects" />
                    <HeaderNavItem label="TG Academy" />
                    <HeaderNavItem label="Strategic Partnership" />
                    <HeaderNavItem label="Pricing" />
                    <HeaderNavItem label="Book a Consultation" />
                </ul>
            </nav> 
        }
    </header>
  );
};

export default Header;