import { genres } from "../data/projectsData";
import ProjectCards from "../components/ui/ProjectCards";
import ProjectTabs from "../ProjectTabs";

const ProjectSection = () => {
  return (
    <section id="project">
      <hr className="my-[4rem]" />
      <p className="text-lg my-[0.5rem] font-bold text-yellow-500">Episode I</p>
      <h1 className="text-yellow-500 star-wars-font">featured projects</h1>
      <p className="mt-[1rem] mb-[2.5rem] text-yellow-500">
        Featured works categorized by genre
      </p>
      <ProjectTabs
        tabs={genres}
        renderContent={(selectedTab) => <ProjectCards genre={selectedTab} />}
      />
    </section>
  );
};

export default ProjectSection;
