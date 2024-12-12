import { BsPencilSquare } from "react-icons/bs";
import { FaCanadianMapleLeaf, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { Globe } from "./Globe";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const ContactWithGlobe = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div className="flex flex-col gap-7">
      {/* Framer motion animation for contact information */}
      <motion.div
        initial={{
          opacity: 0,
          x: -200,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{ delay: isMobile ? 0.25 : 0.4, duration: 1.5 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-row gap-x-2 items-center justify-center md:justify-normal mb-4 mt-10 lg:mt-11 md:ml-11 lg:ml-20 md:text-lg lg:text-xl font-thin">
          <BsPencilSquare />
          <p>GET IN TOUCH</p>
        </div>
        <div className="flex flex-col gap-y-4 text-left text-slate-500">
          <div
            className="flex flex-col relative z-10 lg:ml-2
            hover:text-slate-300 transition-all duration-300 ease-in-out"
          >
            <a
              href="https://linkedin.com/in/ryoichihomma/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-row gap-x-1 items-center">
                <FaLinkedin className="text-xl lg:text-2xl" />
                <span className="sm:text-sm md:text-base">Connect me</span>
              </div>
              <span className="text-[.9rem] lg:text-base hover:underline">
                @in/ryoichihomma
              </span>
            </a>
          </div>
          <div
            className="flex flex-col relative z-10 lg:ml-2
            hover:text-slate-300 transition-all duration-300 ease-in-out"
          >
            <a
              href="mailto:r.homma.inbox@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-row gap-x-1 items-center">
                <IoMdMail className="text-xl lg:text-2xl" />
                <span className="sm:text-sm md:text-base">Email me</span>
              </div>
              <span className="text-[.9rem] lg:text-base hover:underline">
                r.homma.inbox@gmail.com
              </span>
            </a>
          </div>
          <div className="flex flex-row gap-x-1 z-10 lg:ml-2 group hover:text-slate-300 transition-all duration-300 ease-in-out">
            <FaLocationDot className="text-xl lg:text-2xl" />
            <p className="sm:text-sm md:text-[.9rem] lg:text-base">
              Based in BC, Canada
            </p>
            <FaCanadianMapleLeaf className="text-xl lg:text-2xl fill-transparent group-hover:fill-red-500 transition-all duration-300 ease-in-out" />
          </div>
        </div>
      </motion.div>
      {/* Framer motion animation for Globe */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <Globe className="flex relative sm:-ml-3 md:-ml-10 -mt-5" />
      </motion.div>
    </div>
  );
};

export default ContactWithGlobe;
