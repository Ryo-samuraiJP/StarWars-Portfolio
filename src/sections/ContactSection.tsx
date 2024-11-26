import ReactHookForm from "../ReactHookForm";

const ContactSection = () => {
  return (
    <section id="contact">
      <hr className="mt-[5.5rem] mb-[4rem]" />
      <h1 className="font-semibold">Contact</h1>
      <p className="mt-[1.25rem] mb-[2.5rem]">
        Feel free to reach out to me for any inquiries
      </p>
      <ReactHookForm />
    </section>
  );
};

export default ContactSection;
