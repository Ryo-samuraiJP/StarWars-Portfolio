import CredentialTimeline from "../components/ui/CredentialTimeline";

const CredentialSection = () => {
  return (
    <section id="credential">
      <hr className="mt-[5.5rem] mb-[4rem]" />
      <p className="text-lg my-[0.5rem] font-bold text-yellow-500">
        Episode IV
      </p>
      <h1 className="text-yellow-500 star-wars-font">credentials</h1>
      <p className="mt-[1rem] mb-[2.5rem] text-yellow-500">
        Professional & educational backgrounds and certifications
      </p>
      <CredentialTimeline />
    </section>
  );
};

export default CredentialSection;
