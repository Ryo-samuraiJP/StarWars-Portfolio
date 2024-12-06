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
      <div className="w-full max-w-[72rem] mx-auto px-4 md:px-6">
        <Spotlight className="mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-start lg:max-w-none group">
          {servicesData.map((service) => (
            <SpotlightCard key={service.id}>
              <div
                className="relative h-full border border-[rgba(75,30,133,0.5)] rounded-[inherit] 
                bg-gradient-to-br from-[rgba(75,30,133,0.8)] to-[rgb(0,0,0)] p-10 pb-8 z-20 overflow-hidden"
              >
                {/* background blur position */}
                <div
                  className="absolute mb-[18.5rem] xl:mb-[23rem] bottom-0 translate-y-[50%] left-[50%] -translate-x-[50%] pointer-events-none -z-10 w-[50%] aspect-square"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 translate-z-0 bg-purple-900 rounded-full blur-[2.5rem]"></div>
                </div>
                <div className="flex flex-col h-full items-center text-center">
                  <div className="relative inline-flex p-10">
                    <div className="grow">
                      <div className="absolute inset-6 border-2 border-slate-400 rounded-full">
                        {/* Fetch the service objects from the servicesData array and reder them here */}
                        {service.id === 1 && (
                          <SiReact className="text-xl relative z-10 -mt-5" />
                        )}
                      </div>
                      <div className="absolute inset-2 border-2 border-slate-500 rounded-full">
                        {(service.id === 1 && (
                          <>
                            <SiTailwindcss className="text-xl relative z-10 ml-20" />
                            <SiVite className="relative z-10 mt-[4.75rem] ml-8 " />
                          </>
                        )) ||
                          (service.id === 2 && (
                            <>
                              <SiNodedotjs className="text-xl relative z-10 ml-4" />
                              <SiExpress className="text-xl relative z-10 ml-24" />
                            </>
                          )) ||
                          (service.id === 3 && (
                            <>
                              <SiMongodb className="text-xl relative z-10 ml-4" />
                              <SiOracle className="text-xl relative z-10 ml-[5.5rem]" />
                            </>
                          )) ||
                          (service.id === 4 && (
                            <SiDiagramsdotnet className="text-xl relative z-10 mt-4" />
                          ))}
                      </div>
                      <div className="absolute -inset-2 border-2 border-slate-600 rounded-full">
                        {(service.id === 1 && (
                          <>
                            <SiTypescript className="text-base mt-16 ml-2" />
                            <SiJavascript className="text-base ml-[7.25rem]" />
                          </>
                        )) ||
                          (service.id === 2 && (
                            <SiPython className="text-xl relative z-10 mt-[6.25rem] ml-7" />
                          )) ||
                          (service.id === 3 && (
                            <GrMysql className="text-xl relative z-10 mt-[6.25rem] ml-8" />
                          )) ||
                          (service.id === 4 && (
                            <SiUml className="text-xl relative z-10 mt-24 ml-28" />
                          ))}
                      </div>
                      <service.icon className="text-5xl relative z-10" />
                    </div>
                  </div>
                  <div className="grow mb-2">
                    <div className="text-lg md:text-xl text-slate-100 font-bold my-5 -mx-2">
                      {service.name}
                    </div>
                    <div className="text-[0.875rem] text-slate-400 -mx-3">
                      {service.desc}
                    </div>
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
