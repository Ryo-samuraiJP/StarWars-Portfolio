import ProjectTabs from "../ProjectTabs";

const ProjectSection = () => {
  return (
    <section id="project">
      <hr className="my-[4rem]" />
      <h1 className="font-semibold">Featured Projects</h1>
      <p className="mt-[1.25rem] mb-[2.5rem]">Most recent work</p>
      <ProjectTabs />
    </section>
  );
};

export default ProjectSection;
