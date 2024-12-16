import { icons } from "../data/iconCloudData";
import { IconCloud } from "./ui/skills-cloud";
import { motion } from "framer-motion";

const IconSphere = () => {
  return (
    <motion.div
      className="relative md:max-w-md xl:max-w-lg md:px-20 pb-20 pt-8 cursor-pointer"
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
      <IconCloud iconSlugs={icons} />
    </motion.div>
  );
};

export default IconSphere;
