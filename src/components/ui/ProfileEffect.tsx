import { useMediaQuery } from "react-responsive";
import profile from "../../assets/images/profile.jpeg";
import { motion } from "framer-motion";

const ProfileEffect = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
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
    ></motion.div>
  );
};

export default ProfileEffect;
