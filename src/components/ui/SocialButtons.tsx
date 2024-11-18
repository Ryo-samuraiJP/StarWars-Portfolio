import { FaDev, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
const SocialButtons = () => {
  return (
    <div className="flex gap-3">
      <a href="https://www.linkedin.com/in/ryoichihomma/" target="_blank">
        <button className="w-[40px] h-[40px] rounded-full bg-[#0A66C2] flex items-center justify-center group">
          <FaLinkedinIn className="absolute text-xl text-white z-10" />
          <div className="absolute bg-gray-400 w-[42px] h-[42px] rounded-full duration-500 group-hover:scale-0"></div>
        </button>
      </a>
      <a href="https://github.com/Ryo-samuraiJP" target="_blank">
        <button className="w-[40px] h-[40px] rounded-full bg-[#181717] flex items-center justify-center group">
          <FaGithub className="absolute text-xl text-white z-10" />
          <div className="absolute bg-gray-400 w-[42px] h-[42px] rounded-full duration-500 group-hover:scale-0"></div>
        </button>
      </a>
      <a href="https://www.youtube.com/@rh.project_gallery" target="_blank">
        <button className="w-[40px] h-[40px] rounded-full bg-[#FF0000] flex items-center justify-center group">
          <FaYoutube className="absolute text-xl text-white z-10" />
          <div className="absolute bg-gray-400 w-[42px] h-[42px] rounded-full duration-500 group-hover:scale-0"></div>
        </button>
      </a>
      <a href="https://dev.to/ryoichihomma" target="_blank">
        <button className="w-[40px] h-[40px] rounded-full bg-[#0A0A0A] flex items-center justify-center group">
          <FaDev className="absolute text-xl text-white z-10" />
          <div className="absolute bg-gray-400 w-[42px] h-[42px] rounded-full duration-500 group-hover:scale-0"></div>
        </button>
      </a>
      <a href="mailto:r.homma.inbox@gmail.com" target="_blank">
        <button className="w-[40px] h-[40px] rounded-full bg-[#009BD5] flex items-center justify-center group">
          <IoMdMail className="absolute text-xl text-white z-10" />
          <div className="absolute bg-gray-400 w-[42px] h-[42px] rounded-full duration-500 group-hover:scale-0"></div>
        </button>
      </a>
    </div>
  );
};
export default SocialButtons;
