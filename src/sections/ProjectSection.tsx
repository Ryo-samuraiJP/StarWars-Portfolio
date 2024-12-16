import { genres } from "../data/projectsData";
import ProjectCards from "../components/ProjectCards";
import ProjectTabs from "../components/ProjectTabs";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const ProjectSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <section id="project">
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
          Episode I
        </p>
        <p className="text-yellow-500 star-wars-font text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.25rem]">
          project
        </p>
        <p className="mt-4 mb-6 sm:mb-10 text-yellow-500 text-sm sm:text-base">
          Featured projects categorized by genre
        </p>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ delay: 0.25, duration: 1.5 }}
        viewport={{ once: true }}
      >
        <ProjectTabs
          tabs={genres}
          renderContent={(selectedTab) => <ProjectCards genre={selectedTab} />}
        />
      </motion.div>
    </section>
  );
};

export default ProjectSection;
