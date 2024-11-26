import ServiceCards from "../ServiceCards";

const ServiceSection = () => {
  return (
    <section id="service">
      <hr className="my-[4rem]" />
      <h1 className="font-semibold">Services</h1>
      <p className="mt-[1.25rem] mb-[2.5rem]">
        What I offer and how I contribute to your organization
      </p>
      <ServiceCards />
    </section>
  );
};

export default ServiceSection;
