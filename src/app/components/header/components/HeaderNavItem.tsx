import colors from "@/app/utils/colors";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const PRIMARY_COLOR = colors.primary;


const HeaderNavItem = ({ label, dropdown=false, dropDownItems, opened }: { label: string; dropdown?: boolean; dropDownItems?: React.ReactNode; opened?: boolean }) => {
        const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
        const dropdownRef = useRef<HTMLLIElement | null>(null);

        const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

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

        <li className="relative w-fit" ref={dropdownRef}>
            <button className={`cursor-pointer px-1 py-1 text-[#571244] border-b-2 ${opened?"border-b-[#571244]":"border-b-transparent hover:border-b-[#571244]"} text-[]`} onClick={toggleDropdown}>
                {label}
                {dropdown && (
                    <ChevronDown 
                    size={18} 
                    color={PRIMARY_COLOR} 
                    className={`inline-block transition ml-1 ${isDropdownOpen?"rotate-180":""}`} 
                    />)
                }
            </button>
            {dropdown && isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded shadow-lg overflow-hidden z-10 min-w-[160px]">
                    {dropDownItems}
                </div>
            )}
        </li> 
    );
}

export default HeaderNavItem;