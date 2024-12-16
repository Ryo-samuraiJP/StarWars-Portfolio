import { skillsData } from "../data/skillsData";
import { Meteors } from "./ui/meteros";
import Spotlight, { SpotlightCard } from "./ui/spotlight-card";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const SkillProgressBar = () => {
  const isLaptop = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <div className="flex md:px-6 lg:px-0 xl:px-6">
      <Spotlight className="grid gap-6 lg:grid-cols-1 items-start group">
        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: !isLaptop ? (index % 2 === 0 ? -200 : 200) : 200,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ delay: index * 0.25, duration: 1.5 }}
            viewport={{ once: true }}
          >
            <SpotlightCard key={category.id} className="w-full lg:w-[170%]">
              <div
                className="relative h-full border-2 border-[rgba(75,30,133,0.5)] rounded-[inherit] 
              bg-gradient-to-br from-[rgba(75,30,133,0.8)] to-[rgb(0,0,0)] p-2 z-20"
              >
                {/* white blur */}
                {/* <div
                className="absolute mb-[19.5rem] -top-44 translate-y-[50%] left-[50%] -translate-x-[50%] pointer-events-none -z-10 w-[50%] aspect-square lg:top-3"
                aria-hidden="true"
              >
                <div className="absolute inset-0 translate-z-0 bg-slate-700 rounded-full blur-[2.5rem]"></div>
              </div> */}
                <div className="flex flex-col h-full items-center text-center">
                  <div className="relative inline-flex p-4">
                    {/* blue blur */}
                    <div
                      className="w-[40%] h-[40%] border absolute inset-0 m-auto blur-3xl -z-10 rounded-full bg-purple-800"
                      aria-hidden="true"
                    ></div>
                    <div className="grow">
                      <div className="text-[1.125rem] font-semibold text-gray-200 mb-4">
                        <p>{category.category}</p>
                      </div>
                      {/* skill icon grid */}
                      <div className="grid grid-cols-3 gap-x-4 xl:gap-x-6 sm:grid-cols-6 justify-center">
                        {category.skills.map((skill, index) => (
                          <div
                            key={index}
                            className="flex flex-col items-center m-2 lg:m-0"
                          >
                            <div className="relative flex items-center justify-center">
                              <div className="relative flex items-center justify-center w-16 h-16">
                                {/* progress bar */}
                                <svg
                                  className="w-[100%] h-[100%] transform rotate-[-90deg] "
                                  viewBox="0 0 200 200"
                                >
                                  {/* background circle stroke */}
                                  <circle
                                    className="stroke-gray-700"
                                    r="90"
                                    cx="100"
                                    cy="100"
                                    fill="transparent"
                                    strokeWidth="16px"
                                    strokeDasharray="565.48px"
                                    strokeDashoffset="0"
                                  ></circle>
                                  {/* progress circle stroke with animation */}
                                  <circle
                                    r="90"
                                    cx="100"
                                    cy="100"
                                    stroke={skill.color}
                                    strokeWidth="16px"
                                    strokeLinecap="round"
                                    fill="transparent"
                                    strokeDasharray="565.48px"
                                    strokeDashoffset="565.48px"
                                  >
                                    <animate
                                      attributeName="stroke-dashoffset"
                                      from="565.48"
                                      to={
                                        (565.48 * (100 - skill.progress)) / 100
                                      }
                                      dur="1s"
                                      fill="freeze"
                                    />
                                  </circle>
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <skill.icon size="2rem" color={skill.color} />
                                </div>
                              </div>
                            </div>
                            <p className="text-sm mt-1 text-gray-200">
                              {skill.name}
                            </p>
                            <p className="text-sm font-light text-gray-400">
                              {skill.progress}%
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <Meteors number={7} />
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </Spotlight>
    </div>
  );
};

export default SkillProgressBar;
