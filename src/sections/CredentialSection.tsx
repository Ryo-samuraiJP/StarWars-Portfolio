import { useMediaQuery } from "react-responsive";
import CredentialTimeline from "../components/ui/CredentialTimeline";
import { motion } from "framer-motion";

const CredentialSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <section id="credential">
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
        <p className="md:text-lg my-2 font-bold font-serif text-yellow-500">
          Episode IV
        </p>
        <p className="text-yellow-500 star-wars-font text-[1.75rem] md:text-[3rem] lg:text-[3.25rem]">
          credentials
        </p>
        <p className="mt-4 mb-6 md:mb-10 text-yellow-500 text-sm md:text-base">
          Professional & educational backgrounds and certifications
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
        transition={{ delay: isMobile ? 0.25 : 0.4, duration: 1.5 }}
        viewport={{ once: true }}
      >
        <CredentialTimeline />
      </motion.div>
    </section>
  );
};

export default CredentialSection;
