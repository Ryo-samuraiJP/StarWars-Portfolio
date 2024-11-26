import CredentialTimeline from "../components/ui/CredentialTimeline";

const CredentialSection = () => {
  return (
    <section id="credential">
      <hr className="mt-[5.5rem] mb-[4rem]" />
      <h1 className="font-semibold">Credentials</h1>
      <p className="mt-[1.25rem] mb-[2.5rem]">
        Professional and academic backgrounds and certifications
      </p>
      <CredentialTimeline />
    </section>
  );
};

export default CredentialSection;
