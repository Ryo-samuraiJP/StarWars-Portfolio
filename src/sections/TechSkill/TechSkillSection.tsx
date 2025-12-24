import SkillsProgress from "./components/SkillProgressBar";
import IconSphere from "./components/IconSphere";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const TechSkillSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <section id="technical-skill">
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
          Episode II
        </p>
        <p className="text-yellow-500 star-wars-font text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.25rem]">
          technical skill
        </p>
        <p className="mt-4 mb-6 sm:mb-10 text-yellow-500 text-sm sm:text-base">
          Skills cloud and primary technologies
        </p>
      </motion.div>
      <div className="flex flex-col lg:flex-row items-center lg:gap-x-8 px-4 md:px-6">
        <div className="relative inline-flex lg:-mx-14 xl:-mx-5 -mt-10 lg:mt-0 sm:max-w-[20rem] md:max-w-[30rem] lg:max-w-max">
          <div
            className="w-[55%] h-[55%] lg:w-[50%] lg:h-[50%] absolute inset-0 m-auto blur-3xl -z-10 rounded-full bg-violet-800"
            aria-hidden="true"
          ></div>
          <div className="grow">
            <IconSphere />
          </div>
        </div>
        <div className="lg:w-1/3">
          <SkillsProgress />
        </div>
      </div>
    </section>
  );
};

export default TechSkillSection;
