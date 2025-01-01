import { useState } from "react";
import { filterProjects } from "../data/projectsData";
import { motion } from "framer-motion";

interface ProjectCardsProps {
  genre: string;
}

const ProjectCards = ({ genre }: ProjectCardsProps) => {
  const filteredProjects = filterProjects(genre);

  // Check if the image is loaded and in view
  const [isLoaded, setIsLoaded] = useState(false);
  const [inViewStates, setInViewStates] = useState<boolean[]>(
    // Initialize the array with false values for each project
    new Array(filteredProjects.length).fill(false)
  );

  // Masks for the image to show/hide
  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

  const handleViewportEnter = (index: number) => {
    setInViewStates((prev) => {
      const newStates = [...prev];
      newStates[index] = true;
      return newStates;
    });
  };

  return (
    <div className="sm:grid sm:grid-cols-2 sm:gap-x-3 lg:gap-x-0">
      {filteredProjects.map((project, index) => (
        <div key={project.id} className="flex flex-col my-6">
          <motion.div
            className="h-[27.5rem] sm:h-[29rem] md:h-[30rem] lg:h-[33rem] sm:mx-1 lg:mx-5 xl:mx-12 px-6 sm:px-7 md:px-8.5 lg:px-12 
              border-2 border-[rgba(75,30,133,0.5)] rounded-3xl bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] 
              flex flex-col justify-center items-left transition-all duration-300 hover:transform hover:-translate-y-2
              relative z-10"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            {/* Mast image animation */}
            <motion.div
              className="rounded-lg overflow-hidden -mt-6 md:-mt-4 border-2 border-gray-400"
              initial={false}
              animate={
                isLoaded && inViewStates[index]
                  ? { WebkitMaskImage: visibleMask, maskImage: visibleMask } // Show the image with a mask
                  : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask } // Hide the image with a mask
              }
              transition={{ delay: 0.5, duration: 1 }}
              onViewportEnter={() => handleViewportEnter(index)} // Set the state to true when the image is in view to show the image
            >
              <img
                src={project.image}
                alt="Project"
                className="object-cover"
                onLoad={() => setIsLoaded(true)} // Set the state to true when the image is loaded to show the image
              />
            </motion.div>
            <div className="text-xl lg:text-2xl font-semibold text-left mt-2 lg:mt-4">
              {project.title}
            </div>
            <p className="text-base font-light text-left">{project.desc}</p>
            <div className="grid grid-cols-2 lg:flex lg:flex-row gap-2 sm:gap-2.5 md:gap-3 pr-3 md:pr-0 my-5 text-sm">
              {project.links.map((link, index) => (
                <button
                  key={index}
                  className="flex items-center justify-center gap-x-2 border-2 py-1 sm:px-4 md:px-3 lg:px-4 rounded-2xl 
                    transition-all duration-300 hover:bg-white hover:text-black cursor-pointer relative z-10"
                  onClick={() => window.open(link.url, "_blank")}
                >
                  <link.icon className="text-[1.2rem]" />
                  <span>{link.text}</span>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-x-3 lg:gap-x-4 mt-2 text-sm lg:text-base">
              <p className="font-semibold text-left">Tech Used:</p>
              {project.tech_used.length > 6 ? (
                <div
                  className="flex flex-row gap-2 md:gap-2.5 lg:gap-3
                  w-[65%] sm:w-[63%] md:w-[70%] lg:w-[73%] xl:w-[77%] overflow-hidden overflow-x-scroll scrollbarX"
                >
                  {project.tech_used.map((tech, index) => (
                    <div key={index} className="relative group">
                      <tech.icon className="text-xl cursor-pointer mb-1.5" />
                      <div
                        className="absolute top-full left-[50%] transform -translate-x-[50%] mt-2 w-max px-2 py-1 border-2 rounded-full
                        opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
                      >
                        {tech.name}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-row gap-2 md:gap-2.5 lg:gap-3">
                  {project.tech_used.map((tech, index) => (
                    <div key={index} className="relative group">
                      <tech.icon className="text-xl cursor-pointer" />
                      <div
                        className="absolute top-full left-[50%] transform -translate-x-[50%] mt-2 w-max px-2 py-1 border-2 rounded-full
                        opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
                      >
                        {tech.name}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
