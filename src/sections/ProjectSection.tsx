import { genres } from "../data/projectsData";
import ProjectCards from "../components/ui/ProjectCards";
import ProjectTabs from "../ProjectTabs";

const ProjectSection = () => {
  return (
    <section id="project">
      <hr className="my-16" />
      <p className="md:text-xl my-2 font-bold font-serif text-yellow-500">
        Episode I
      </p>
      <p className="text-yellow-500 star-wars-font text-[1.75rem] md:text-[3rem] lg:text-[3.25rem]">
        featured projects
      </p>
      <p className="mt-4 mb-6 md:mb-10 text-yellow-500 text-sm md:text-base">
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
