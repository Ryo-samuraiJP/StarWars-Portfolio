import SwiperBlog from "../SwiperBlog";

const TechBlogSection = () => {
  return (
    <section id="tech-blog">
      <hr className="mt-[5.5rem] mb-[4rem]" />
      <h1 className="font-semibold">Tech Blog</h1>
      <p className="mt-[1.25rem] mb-[2.5rem]">Latest posts on DEV Community</p>
      <SwiperBlog />
    </section>
  );
};

export default TechBlogSection;
