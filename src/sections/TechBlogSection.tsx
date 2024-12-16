import { useMediaQuery } from "react-responsive";
import SwiperBlog from "../components/SwiperBlog";
import { motion } from "framer-motion";

const TechBlogSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <section id="tech-blog">
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
          Episode V
        </p>
        <p className="text-yellow-500 star-wars-font text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.25rem]">
          tech blog
        </p>
        <p className="mt-4 mb-6 md:mb-10 text-yellow-500 text-sm sm:text-base">
          Latest posts on the DEV Community
        </p>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: isMobile ? 0 : -100,
          x: isMobile ? -200 : 0,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          x: 0,
        }}
        transition={{ delay: isMobile ? 0.25 : 0.4, duration: 1.5 }}
        viewport={{ once: true }}
      >
        <SwiperBlog />
      </motion.div>
    </section>
  );
};

export default TechBlogSection;
