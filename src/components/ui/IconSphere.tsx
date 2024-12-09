import { IconCloud } from "./skills-cloud";
import { motion } from "framer-motion";

const icons = [
  "html5",
  "css3",
  "markdown",
  "tailwindcss",
  "javascript",
  "ejs",
  "typescript",
  "react",
  "vite",
  "npm",
  "swiper",
  "scrollreveal",
  "nodedotjs",
  "express",
  "postman",
  "python",
  "flask",
  "c",
  "java",
  "axios",
  "mongodb",
  "oracle",
  "mysql",
  "vercel",
  "netlify",
  "render",
  "git",
  "github",
  "githubactions",
  "uml",
];

const IconSphere = () => {
  return (
    <motion.div
      className="relative md:max-w-md lg:max-w-lg md:px-20 pb-20 pt-8 cursor-pointer"
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
