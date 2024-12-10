import Globe from "../components/ui/ContactWithGlobe";
import ReactHookForm from "../ReactHookForm";

const ContactSection = () => {
  return (
    <section id="contact">
      <hr className="my-16" />
      <p className="md:text-xl my-2 font-bold font-serif text-yellow-500">
        Episode VI
      </p>
      <p className="text-yellow-500 star-wars-font text-[1.75rem] md:text-[3rem] lg:text-[3.25rem]">
        contact me
      </p>
      <p className="mt-4 mb-6 md:mb-10 text-yellow-500 text-sm md:text-base">
        Feel free to get in touch for any inquiries
      </p>
      <div className="grid grid-rows md:grid-cols-2 lg:space-x-10 md:w-[95%] lg:w-[90%]">
        <div className="md:order-2">
          <ReactHookForm />
        </div>
        <div className="flex justify-center">
          <Globe />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
