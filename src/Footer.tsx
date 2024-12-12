import { useMediaQuery } from "react-responsive";
import SocialIcons from "./components/ui/SocialIcons";
import { motion } from "framer-motion";

const Footer = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <footer>
      <motion.hr
        className="my-24"
        initial={{ width: "0%", marginLeft: "50%" }}
        whileInView={{ width: "100%", marginLeft: "0%" }}
        transition={{ duration: isMobile ? 2 : 1.5 }}
        viewport={{ once: true }}
      />
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <p className="sm:text-xl my-2 font-bold font-serif text-yellow-500">
          Episode VII
        </p>
        <h1 className="text-yellow-500 star-wars-font text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.25rem]">
          the code awakens
        </h1>
        <p className="mt-4 sm:mx-16 lg:mx-[12rem] xl:mx-80 text-yellow-500 text-xs sm:text-base">
          Reach out to me today and let's discuss how I can help you achieve
          your goals. Let's build something impactful together!
        </p>
      </motion.div>
      <motion.div
        className="flex justify-center py-14"
        initial={{
          opacity: 0,
          y: -100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ delay: isMobile ? 0.25 : 0.4, duration: 1.5 }}
        viewport={{ once: true }}
      >
        <SocialIcons />
      </motion.div>
      <motion.div
        className="flex flex-col sm:flex-row justify-center text-xs sm:text-sm lg:text-base font-light gap-x-1"
        initial={{
          opacity: 0,
          y: -100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ delay: isMobile ? 0.5 : 0.65, duration: 1.5 }}
        viewport={{ once: true }}
      >
        <p>&#169; 2024 Ryoichi (Rio) Homma.</p>
        <div className="flex flex-row justify-center">
          <p>May the</p>
          <p className="text-shadow-neon font-semibold">&nbsp;Code&nbsp;</p>
          <p>be with you.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
