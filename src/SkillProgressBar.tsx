import { skillsData } from "./skillsData";
import { Meteors } from "./components/ui/meteros";
import Spotlight, { SpotlightCard } from "./components/ui/spotlight-card";

const SkillProgressBar = () => {
  return (
    <div className="w-full max-w-[72rem] mx-auto px-[1rem] md:px-[1.5rem]">
      <Spotlight className="max-w-sm mx-auto grid gap-[1.5rem] lg:grid-cols-1 items-start lg:max-w-none group">
        {skillsData.map((category) => (
          <SpotlightCard key={category.id} className="w-full lg:w-[170%]">
            <div className="relative h-full bg-slate-900 p-[0.5rem] rounded-[inherit] z-20 overflow-hidden">
              {/* whtie blur */}
              <div
                className="absolute mb-[19.5rem] -top-[11rem] translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square lg:top-[0.75rem]"
                aria-hidden="true"
              >
                <div className="absolute inset-0 translate-z-0 bg-slate-700 rounded-full blur-[40px]"></div>
              </div>
              <div className="flex flex-col h-full items-center text-center">
                <div className="relative inline-flex p-[1rem]">
                  {/* blue blur */}
                  <div
                    className="w-[40%] h-[40%] border absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                    aria-hidden="true"
                  ></div>
                  <div className="grow">
                    <h3 className="text-[1.125rem] font-semibold text-gray-200 mb-[1rem]">
                      <p>{category.category}</p>
                    </h3>
                    {/* skill icon grid */}
                    <div className="grid grid-cols-3 gap-4 lg:grid-cols-6 justify-center">
                      {category.skills.map((skill, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center m-2 lg:m-0"
                        >
                          <div className="relative flex items-center justify-center">
                            <div className="relative flex items-center justify-center w-[4rem] h-[4rem]">
                              <div
                                className="absolute inset-0"
                                style={{
                                  clip: "rect(0, 4rem, 4rem, 2rem)",
                                  borderColor: skill.color,
                                  borderWidth: "0.25rem",
                                  borderStyle: "solid",
                                  borderRadius: "50%",
                                  transform: `rotate(${
                                    skill.progress > 50
                                      ? 180
                                      : (skill.progress / 100) * 360
                                  }deg)`,
                                }}
                              ></div>
                              {skill.progress > 50 && (
                                <div
                                  className="absolute inset-0"
                                  style={{
                                    clip: "rect(0, 2rem, 4rem, 0)",
                                    borderColor: skill.color,
                                    borderWidth: "0.25rem",
                                    borderStyle: "solid",
                                    borderRadius: "50%",
                                    transform: `rotate(${
                                      ((skill.progress - 50) / 100) * 360
                                    }deg)`,
                                  }}
                                ></div>
                              )}
                              <skill.icon size="2rem" color={skill.color} />
                            </div>
                          </div>
                          <p className="text-sm mt-[0.25rem] text-gray-200">
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
        ))}
      </Spotlight>
    </div>
  );
};

export default SkillProgressBar;
