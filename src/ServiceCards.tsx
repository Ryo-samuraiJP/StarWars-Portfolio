import {
  SiDiagramsdotnet,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiOracle,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiUml,
  SiVite,
} from "react-icons/si";
import Spotlight, { SpotlightCard } from "./components/ui/spotlight-card";
import { servicesData } from "./data/servicesData";
import { GrMysql } from "react-icons/gr";
import { Meteors } from "./components/ui/meteros";

const ServiceCards = () => {
  return (
    <>
      <div className="w-full max-w-[72rem] mx-auto px-[1rem] md:px-[1.5rem]">
        <Spotlight className="max-w-sm mx-auto grid gap-[1.5rem] lg:grid-cols-4 items-start lg:max-w-none group">
          {servicesData.map((service) => (
            <SpotlightCard key={service.id}>
              <div
                className="relative h-full border border-[rgba(75,30,133,0.5)] rounded-[inherit] 
                bg-gradient-to-br from-[rgba(75,30,133,0.8)] to-[rgb(0,0,0)] p-[2.5rem] pb-[2rem] z-20 overflow-hidden"
              >
                {/* background blur position */}
                {/* <div
                  className="absolute mb-[19.5rem] bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 translate-z-0 bg-purple-900 rounded-full blur-[37px]"></div>
                </div> */}
                <div className="flex flex-col h-full items-center text-center">
                  <div className="relative inline-flex p-[2.5rem]">
                    <div
                      className="w-[40%] h-[40%] border absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                      aria-hidden="true"
                    ></div>
                    <div className="grow">
                      <div className="absolute inset-[1.5rem] border-2 border-slate-400 rounded-full">
                        {/* Fetch the service objects from the servicesData array and reder them here */}
                        {service.id === 1 && (
                          <SiReact className="text-[1.25rem] relative z-10 -mt-[1.25rem]" />
                        )}
                      </div>
                      <div className="absolute inset-[0.5rem] border-2 border-slate-500 rounded-full">
                        {(service.id === 1 && (
                          <>
                            <SiTailwindcss className="text-[1.25rem] relative z-10 ml-[5rem]" />
                            <SiVite className="relative z-10 mt-[4.75rem] ml-[2rem] " />
                          </>
                        )) ||
                          (service.id === 2 && (
                            <>
                              <SiNodedotjs className="text-[1.25rem] relative z-10 ml-[1rem]" />
                              <SiExpress className="text-[1.25rem] relative z-10 ml-[6rem]" />
                            </>
                          )) ||
                          (service.id === 3 && (
                            <>
                              <SiMongodb className="text-[1.25rem] relative z-10 ml-[1rem]" />
                              <SiOracle className="text-[1.25rem] relative z-10 ml-[5.5rem]" />
                            </>
                          )) ||
                          (service.id === 4 && (
                            <SiDiagramsdotnet className="text-[1.25rem] relative z-10 mt-[1rem]" />
                          ))}
                      </div>
                      <div className="absolute inset-[-8px] border-2 border-slate-600 rounded-full">
                        {(service.id === 1 && (
                          <>
                            <SiTypescript className="text-[1rem] mt-[4rem] ml-[0.5rem]" />
                            <SiJavascript className="text-[1rem] ml-[7.25rem]" />
                          </>
                        )) ||
                          (service.id === 2 && (
                            <SiPython className="text-[1.25rem] relative z-10 mt-[6.25rem] ml-[1.75rem]" />
                          )) ||
                          (service.id === 3 && (
                            <GrMysql className="text-[1.25rem] relative z-10 mt-[6.25rem] ml-[2rem]" />
                          )) ||
                          (service.id === 4 && (
                            <SiUml className="text-[1.25rem] relative z-10 mt-[6rem] ml-[7rem]" />
                          ))}
                      </div>
                      <service.icon className="text-[3rem] relative z-10" />
                    </div>
                  </div>
                  <div className="grow mb-[0.5rem]">
                    <h2 className="text-xl text-slate-100 font-bold my-[1.25rem]">
                      {service.name}
                    </h2>
                    <p className="text-[0.875rem] text-slate-400">
                      {service.desc}
                    </p>
                  </div>
                </div>
                <Meteors number={12} />
              </div>
            </SpotlightCard>
          ))}
        </Spotlight>
      </div>
    </>
  );
};

export default ServiceCards;
