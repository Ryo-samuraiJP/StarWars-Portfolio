import ServiceCards from "../ServiceCards";

const ServiceSection = () => {
  return (
    <section id="service">
      <hr className="my-16" />
      <p className="md:text-xl my-2 font-bold font-serif text-yellow-500">
        Episode III
      </p>
      <p className="text-yellow-500 star-wars-font text-[1.75rem] md:text-[3rem] lg:text-[3.25rem]">
        services
      </p>
      <p className="mt-4 mb-6 md:mb-10 text-yellow-500 text-sm md:text-base">
        What I offer and how I contribute to your projects
      </p>
      <ServiceCards />
    </section>
  );
};

export default ServiceSection;
