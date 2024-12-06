import { filterProjects } from "../../data/projectsData";

interface ProjectCardsProps {
  genre: string;
}

const ProjectCards = ({ genre }: ProjectCardsProps) => {
  const filteredProjects = filterProjects(genre);

  return (
    <div className="md:flex md:flex-wrap md:mx-8">
      {filteredProjects.map((project) => (
        <div key={project.id} className="flex flex-col lg:w-[50%] md:px-6 my-6">
          <div
            className="h-[27.5rem] md:h-[35rem] lg:h-[33rem] px-6 border-2 border-[rgba(75,30,133,0.5)] rounded-3xl bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] 
            font-nunito flex justify-center items-left flex-col backdrop-blur-[.75rem] shadow-md overflow-hidden transition-all duration-300 cursor-pointer hover:transform hover:-translate-y-2"
          >
            <div className="rounded-lg overflow-hidden -mt-6 md:-mt-4 border-2 border-gray-400">
              <img src={project.image} alt="Project" className="object-cover" />
            </div>
            <div className="text-xl md:text-2xl font-semibold text-left mt-2 md:mt-4">
              {project.title}
            </div>
            <p className="text-base font-light text-left">{project.desc}</p>
            <div className="grid grid-cols-2 md:flex md:flex-row gap-2 md:gap-3 pr-3 md:pr-0 my-5 text-sm">
              {project.links.map((link, index) => (
                <button
                  key={index}
                  className="flex items-center justify-center gap-x-2 border-2 py-1 md:px-3 rounded-2xl transition-all duration-300 hover:bg-white hover:text-black"
                >
                  <link.icon className="text-[1.2rem]" />
                  <span>{link.text}</span>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-x-3 md:gap-x-4 mt text-sm md:text-base">
              <p className="font-semibold text-left ">Skill Used:</p>
              <div className="flex flex-row gap-2 md:gap-3">
                {project.tech_used.map((tech, index) => (
                  <div key={index} className="relative group">
                    <tech.icon className="text-xl" />
                    <div
                      className="absolute top-full left-[50%] transform -translate-x-[50%] mt-2 w-max px-2 py-1
                      border-2 rounded-full opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
                    >
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
