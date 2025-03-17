import { useEffect, useState } from "react";
import { NumbersCounterAnimation } from "./ui/numbers-counter-animation";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const NumbersCounter = () => {
  // State to store the number of posts on DEV
  const [postCount, setPostCount] = useState<number>();

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });

  // Fetch DEV data to get the number of posts
  useEffect(() => {
    const fetchDevData = async () => {
      try {
        const res = await fetch(
          "https://dev.to/api/articles?username=ryoichihomma&per_page=100"
        );
        const data = await res.json();

        // console.log("Fetched data:", data); // Degugger

        setPostCount(data.length);
      } catch (error) {
        console.error("Error fetching DEV data:", error);
      }
    };
    fetchDevData();
  }, []);

  return (
    <motion.div className="flex flex-col xl:flex-row xl:gap-x-14">
      <div className="sm:flex sm:flex-row sm:gap-x-40 md:gap-x-48 lg:gap-x-96 xl:gap-x-14">
        <motion.div
          className="flex items-center justify-end md:justify-normal sm:gap-x-0 md:gap-x-2.5 lg:gap-x-0 mb-5 sm:mb-12 lg:mb-16 xl:mb-0"
          initial={{
            opacity: 0,
            y: isMobile ? 100 : 150,
          }}
          {...((isMobile && { whileInView: { opacity: 1, y: 0 } }) || {
            animate: { opacity: 1, y: 0 },
          })}
          transition={{
            delay: isMobile ? 0 : isDesktop ? 1 : 0.75,
            duration: 1.5,
          }}
          viewport={{ once: true }}
        >
          <div className="font-bold tracking-tighter md:w-[3.5rem] text-left text-5xl sm:text-[3.2rem]">
            <NumbersCounterAnimation value={4} />+
          </div>
          <p className="w-20 sm:w-36 md:w-40 lg:w-44 font-light text-sm md:text-base text-right sm:text-center">
            YEARS OF BUILDING SOFTWARE
          </p>
        </motion.div>
        <motion.div
          className="flex items-center justify-end md:justify-normal gap-x-3 sm:gap-x-4 lg:gap-x-5 xl:gap-x-4 mb-5 sm:mb-12 lg:mb-16 xl:mb-0"
          initial={{
            opacity: 0,
            y: isMobile ? 100 : 150,
          }}
          {...((isMobile && { whileInView: { opacity: 1, y: 0 } }) || {
            animate: { opacity: 1, y: 0 },
          })}
          transition={{
            delay: isMobile ? 0.25 : isDesktop ? 1 : 0.75,
            duration: 1.5,
          }}
          viewport={{ once: true }}
        >
          <div className="font-bold tracking-tighter text-left text-5xl sm:text-[3.2rem]">
            <NumbersCounterAnimation value={15} />
          </div>
          <p className="font-light text-sm md:text-base text-right sm:text-center">
            CERTIFICATIONS
          </p>
        </motion.div>
      </div>
      <div className="sm:flex sm:flex-row sm:gap-x-24 md:gap-x-32 lg:gap-x-[20.5rem] xl:gap-x-14">
        <motion.div
          className="flex items-center justify-end md:justify-normal sm:gap-x-2 md:gap-x-2.5 xl:gap-x-2 mb-5 sm:mb-0"
          initial={{
            opacity: 0,
            y: isMobile ? 100 : 150,
          }}
          {...((isMobile && { whileInView: { opacity: 1, y: 0 } }) || {
            animate: { opacity: 1, y: 0 },
          })}
          transition={{
            delay: isMobile ? 0.5 : isDesktop ? 1 : 1,
            duration: 1.5,
          }}
          viewport={{ once: true }}
        >
          <div className="font-bold tracking-tighter text-left text-5xl sm:text-[3.2rem]">
            <NumbersCounterAnimation value={postCount ?? 0} />
          </div>
          <p className="w-28 md:w-32 font-light text-sm md:text-base text-right sm:text-center">
            TECH BLOG POSTS ON DEV
          </p>
        </motion.div>
        <motion.div
          className="flex items-center justify-end md:justify-normal sm:gap-x-0.5 md:gap-x-2.5 lg:gap-x-3.5 xl:gap-x-2"
          initial={{
            opacity: 0,
            y: isMobile ? 100 : 150,
          }}
          {...((isMobile && { whileInView: { opacity: 1, y: 0 } }) || {
            animate: { opacity: 1, y: 0 },
          })}
          transition={{
            delay: isMobile ? 0.75 : isDesktop ? 1 : 1,
            duration: 1.5,
          }}
          viewport={{ once: true }}
        >
          <div className="font-bold tracking-tighter text-left text-5xl sm:text-[3.2rem]">
            <NumbersCounterAnimation value={6000} />+
          </div>
          <p className="w-28 font-light text-sm md:text-base text-right sm:text-center">
            TOTAL POST VIEWS ON DEV
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NumbersCounter;
