import { useMediaQuery } from "react-responsive";
import ReactHookForm from "../ReactHookForm";
import { motion } from "framer-motion";
import ContactWithGlobe from "../components/ui/ContactWithGlobe";

const ContactSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <section id="contact" className="overflow-x-hidden">
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
          Episode VI
        </p>
        <p className="text-yellow-500 star-wars-font text-[1.75rem] md:text-[3rem] lg:text-[3.25rem]">
          contact me
        </p>
        <p className="mt-4 mb-6 md:mb-10 text-yellow-500 text-sm md:text-base">
          Feel free to get in touch for any inquiries
        </p>
      </motion.div>
      <div className="grid grid-rows md:grid-cols-2 lg:space-x-10 md:w-[95%] lg:w-[90%]">
        {/* Framer motion animation for ReactHookForm */}
        <motion.div
          className="md:order-2"
          initial={{
            opacity: 0,
            x: 200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{ delay: isMobile ? 0.25 : 0.4, duration: 1.5 }}
          viewport={{ once: true }}
        >
          <ReactHookForm />
        </motion.div>
        <div className="flex justify-center">
          <ContactWithGlobe />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
