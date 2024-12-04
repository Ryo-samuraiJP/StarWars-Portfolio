import CredentialTimeline from "../components/ui/CredentialTimeline";

const CredentialSection = () => {
  return (
    <section id="credential">
      <hr className="my-16" />
      <p className="md:text-lg my-2 font-bold font-serif text-yellow-500">
        Episode IV
      </p>
      <p className="text-yellow-500 star-wars-font text-[1.75rem] md:text-[3rem] lg:text-[3.25rem]">
        credentials
      </p>
      <p className="mt-4 mb-6 md:mb-10 text-yellow-500 text-sm md:text-base">
        Professional & educational backgrounds and certifications
      </p>
      <CredentialTimeline />
    </section>
  );
};

export default CredentialSection;
