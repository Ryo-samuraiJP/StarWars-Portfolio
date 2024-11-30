import { filterProjects } from "../../data/projectsData";

interface ProjectCardsProps {
  genre: string;
}

const ProjectCards = ({ genre }: ProjectCardsProps) => {
  const filteredProjects = filterProjects(genre);

  return (
    <div className="flex flex-wrap mx-[2rem]">
      {filteredProjects.map((project) => (
        <div
          key={project.id}
          className="flex flex-col w-1/2 px-[1.5rem] my-[1.5rem]"
        >
          <div
            className="h-[35rem] px-[1.5em] border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] 
            font-nunito flex justify-center items-left flex-col backdrop-blur-[12px] shadow-md overflow-hidden transition-all duration-300 cursor-pointer hover:transform hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="rounded-[0.5rem] overflow-hidden -mt-[1rem] border-2 border-gray-400">
              <img src={project.image} alt="Project" className="object-cover" />
            </div>
            <div className="text-[1.5rem] font-semibold text-left mt-[0.5rem]">
              {project.title}
            </div>
            <p className="text-[1rem] font-light text-left">{project.desc}</p>
            <div className="flex gap-x-[1.5rem] items-center my-[1rem]">
              {project.links.map((link, index) => (
                <button
                  key={index}
                  className="flex items-center gap-[0.5rem] border-2 py-[0.25rem] px-[0.75rem] rounded-[1rem] transition-all duration-300 hover:bg-white hover:text-black"
                >
                  <link.icon className="text-[1.2rem]" />
                  <span>{link.text}</span>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-x-[1.25rem] mt-[0.75rem]">
              <p className="text-bold">Technologies Used:</p>
              {project.tech_used.map((tech, index) => (
                <div key={index} className="relative group">
                  <tech.icon className="text-[1.4rem]" />
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-[0.5rem] w-max px-[0.5rem] py-[0.25rem] border-2 rounded-full opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100">
                    {tech.name}
                  </div>
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
