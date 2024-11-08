import { FaDev, FaHandshake, FaHome, FaPaperPlane } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { TbSettingsCode } from "react-icons/tb";

const NavBar = () => {
  return (
    <div className="absolute top-2 right-20 flex justify-around gap-4 items-center px-4 py-1 bg-black rounded-[15px] ring-1 ring-white">
      <div className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500">
        <FaHome size={22} color="white" />
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
          Home
        </div>
      </div>
      <div className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500">
        <RiComputerFill size={22} color="white" />
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
          Projects
        </div>
      </div>
      <div className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500">
        <TbSettingsCode size={22} color="white" />
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
          Skills
        </div>
      </div>
      <div className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500">
        <FaHandshake size={22} color="white" />
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
          Services
        </div>
      </div>
      <div className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500">
        <FaDev size={22} color="white" />
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
          Blog
        </div>
      </div>
      <div className="relative group hover:cursor-pointer hover:bg-slate-800 p-2 rounded-full transition-all duration-500">
        <FaPaperPlane size={22} color="white" />
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-max px-2 py-1 text-white bg-black rounded-md opacity-0 transform scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
          Contact
        </div>
      </div>
    </div>
  );
};

export default NavBar;
