import SwiperBlog from "../SwiperBlog";

const TechBlogSection = () => {
  return (
    <section id="tech-blog">
      <hr className="my-16" />
      <p className="md:text-xl my-2 font-bold font-serif text-yellow-500">
        Episode V
      </p>
      <p className="text-yellow-500 star-wars-font text-[1.75rem] md:text-[3rem] lg:text-[3.25rem]">
        tech blog
      </p>
      <p className="mt-4 mb-6 md:mb-10 text-yellow-500 text-sm md:text-base">
        Latest posts on the DEV Community
      </p>
      <SwiperBlog />
    </section>
  );
};

export default TechBlogSection;
