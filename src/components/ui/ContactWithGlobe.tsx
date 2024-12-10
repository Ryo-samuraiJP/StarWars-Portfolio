import { BsPencilSquare } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import Globe from "./Globe";

const ContactWithGlobe = () => {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-row gap-x-2 items-center justify-center md:justify-normal mt-10 lg:mt-11 md:ml-16 lg:ml-20 text-lg lg:text-xl font-thin">
        <BsPencilSquare />
        <p>GET IN TOUCH</p>
      </div>
      <div className="flex flex-col gap-y-4 text-left text-slate-500">
        <div
          className="flex flex-col relative z-10 
          hover:text-slate-300 transition-all duration-300 ease-in-out"
        >
          <a
            href="https://linkedin.com/in/ryoichihomma/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-row gap-x-1 items-center">
              <FaLinkedin className="text-xl lg:text-2xl" />
              <span>LinkedIn</span>
            </div>
            <span className="text-[.9rem] lg:text-base hover:underline">
              @in/ryoichihomma
            </span>
          </a>
        </div>
        <div
          className="flex flex-col relative z-10 
          hover:text-slate-300 transition-all duration-300 ease-in-out"
        >
          <a
            href="mailto:r.homma.inbox@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-row gap-x-1 items-center">
              <IoMdMail className="text-xl lg:text-2xl" />
              <span>Email</span>
            </div>
            <span className="text-[.9rem] lg:text-base hover:underline">
              r.homma.inbox@gmail.com
            </span>
          </a>
        </div>
        <div>
          <div className="flex flex-row gap-x-1">
            <FaLocationDot className="text-xl lg:text-2xl" />
            <p className="text-[.9rem] lg:text-base">Resident in BC, Canada</p>
          </div>
        </div>
        <div>
          <Globe className="flex relative md:-ml-8 -mt-5" />
        </div>
      </div>
    </div>
  );
};

export default ContactWithGlobe;
