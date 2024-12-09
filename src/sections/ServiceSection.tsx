import { useMediaQuery } from "react-responsive";
import ServiceCards from "../ServiceCards";
import { motion } from "framer-motion";

const ServiceSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <section id="service">
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
        <p className="md:text-xl my-2 font-bold font-serif text-yellow-500">
          Episode III
        </p>
        <p className="text-yellow-500 star-wars-font text-[1.75rem] md:text-[3rem] lg:text-[3.25rem]">
          services
        </p>
        <p className="mt-4 mb-6 md:mb-10 text-yellow-500 text-sm md:text-base">
          What I offer and how I contribute to your projects
        </p>
      </motion.div>
      <ServiceCards />
    </section>
  );
};

export default ServiceSection;
