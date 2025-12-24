import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import Saturn from "./../../../assets/images/Saturn.png";
import profile from "./../../../assets/images/profile.jpeg";

const ProfileEffect = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });
  const isLaptop = useMediaQuery({
    query: "(min-width: 1024px) and (max-width: 1440px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 1441px)" });

  return (
    <>
      <motion.img
        src={Saturn}
        alt="Saturn"
        className="absolute -z-10 w-[80%] sm:w-[55%] md:w-[45%] lg:w-[40%] 2xl:w-[35%]
            top-20 sm:top-24 md:top-28 lg:top-12 xl:top-5 2xl:top-7 
            right-40 sm:right-14 md:right-[5.5rem] lg:right-44 xl:right-[10.5rem] 2xl:right-[23rem]"
        initial={{
          opacity: 0,
          scale: 0,
          y: isMobile ? 100 : isDesktop ? 250 : 200,
          x: isMobile || isTablet ? 100 : isLaptop ? 150 : 300,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          y: 0,
          x: 0,
        }}
        transition={{
          delay: 0.5,
          duration: isLaptop ? 2.5 : 2,
        }}
        viewport={{ once: true }}
      />
      <motion.div
        className="bg-cover bg-center bg-no-repeat shadow-[inset_0_0_0_9px_rgba(225,225,225,0.3)]
          w-[12.5rem] h-[18.75rem] sm:w-[12rem] sm:h-[18rem] md:w-[15.625rem] md:h-[21.875rem] lg:w-[18.75rem] lg:h-[27.5rem] animate-profile-effect"
        style={{ backgroundImage: `url(${profile})` }}
        initial={{
          opacity: 0,
          scale: 0,
          y: isMobile ? -150 : 0,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{ delay: isMobile ? 0 : 0.25, duration: 1.5 }}
        viewport={{ once: true }}
      />
    </>
  );
};

export default ProfileEffect;
