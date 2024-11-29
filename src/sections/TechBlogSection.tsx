import SwiperBlog from "../SwiperBlog";

const TechBlogSection = () => {
  return (
    <section id="tech-blog">
      <hr className="mt-[5.5rem] mb-[4rem]" />
      <p className="text-lg my-[0.5rem] font-bold text-yellow-500">Episode V</p>
      <h1 className="text-yellow-500 star-wars-font">tech blog</h1>
      <p className="mt-[1rem] mb-[2.5rem] text-yellow-500">
        Latest posts on the DEV Community
      </p>
      <SwiperBlog />
    </section>
  );
};

export default TechBlogSection;
