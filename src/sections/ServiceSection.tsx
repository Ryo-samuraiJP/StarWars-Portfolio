import ServiceCards from "../ServiceCards";

const ServiceSection = () => {
  return (
    <section id="service">
      <hr className="my-[4rem]" />
      <p className="text-lg my-[0.5rem] font-bold text-yellow-500">
        Episode III
      </p>
      <h1 className="text-yellow-500 star-wars-font">services</h1>
      <p className="mt-[1rem] mb-[2.5rem] text-yellow-500">
        What I offer and how I help you achieve your goals
      </p>
      <ServiceCards />
    </section>
  );
};

export default ServiceSection;
