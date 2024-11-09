import { filterProjects } from "./projectsData";

interface ProjectCardsProps {
  genre: string;
}

const ProjectCards = ({ genre }: ProjectCardsProps) => {
  const filteredProjects = filterProjects(genre);

  return (
    <div className="flex flex-wrap -mx-2">
      {filteredProjects.map((project) => (
        <div key={project.id} className="flex flex-col w-1/2 px-2 mb-4">
          <div className="h-70 max-h-82 bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 cursor-pointer p-2.5 hover:transform hover:-translate-y-2 hover:shadow-lg">
            <div className="w-full h-2/3 rounded-lg mb-3 overflow-hidden bg-gray-400 flex items-center justify-center">
              <img
                src={project.image}
                alt="Project"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="m-0 text-lg font-semibold cursor-default truncate">
              {project.name}
            </p>
            <p className="m-0 text-sm cursor-default truncate-3-lines">
              {project.desc}
            </p>
            <div className="flex justify-between items-center mt-3">
              {project.links.map((link, index) => (
                <div key={index} className="flex items-center space-x-1">
                  <link.icon />
                  <span>{link.text}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-3">
              <p className="text-bold">Primary tech used:</p>
              {project.tech_used.map((tech, index) => (
                <div key={index} className="flex items-center space-x-1">
                  <tech.icon />
                  <span>{tech.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
