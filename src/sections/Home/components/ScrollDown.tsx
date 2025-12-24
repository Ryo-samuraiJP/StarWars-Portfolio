import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const ScrollDown = () => {
  // To adjust the delay and duration of the animation for special cases
  const isSpecial = useMediaQuery({
    query: "(min-width: 1280px) and (min-height: 941px)",
  });

  return (
    <motion.div
      className="relative w-[1.875rem] h-[3.125rem] ml-[0.938rem] border-[0.188rem] rounded-[3.125rem] mb-4 cursor-pointer"
      initial={{
        opacity: 0,
        scale: 0,
        y: 200,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        delay: isSpecial ? 1 : 0,
        duration: isSpecial ? 2 : 1.5,
      }}
      viewport={{ once: true }}
    >
      <div className="absolute bottom-[1.875rem] left-[50%] w-[0.375rem] h-[0.375rem] -ml-[0.188rem] bg-white rounded-full animate-scrolldown shadow-[0px_-5px_3px_1px_rgba(42,84,112,0.4)]"></div>
      <div className="flex flex-col items-center mt-12 pt-[0.375rem]">
        <div className="w-[0.625rem] h-[0.625rem] border-[0.188rem] border-gray-100 border-t-0 border-l-0 rotate-45 animate-arrow"></div>
        <div className="w-[0.625rem] h-[0.625rem] border-[0.188rem] border-gray-100 border-t-0 border-l-0 rotate-45 animate-arrow-delay"></div>
      </div>
    </motion.div>
  );
};

export default ScrollDown;
