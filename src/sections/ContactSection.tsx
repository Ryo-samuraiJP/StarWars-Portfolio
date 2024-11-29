import ReactHookForm from "../ReactHookForm";

const ContactSection = () => {
  return (
    <section id="contact">
      <hr className="mt-[5.5rem] mb-[4rem]" />
      <p className="text-lg my-[0.5rem] font-bold text-yellow-500">
        Episode VI
      </p>
      <h1 className="text-yellow-500 star-wars-font">contact me</h1>
      <p className="mt-[1rem] mb-[2.5rem] text-yellow-500">
        Feel free to get in touch for any inquiries
      </p>
      <ReactHookForm />
    </section>
  );
};

export default ContactSection;
