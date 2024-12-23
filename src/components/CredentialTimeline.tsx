import { useState, useRef, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { credentialsData } from "../data/credentialsData";
import {
  SiAxios,
  SiExpress,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiNpm,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaPlus } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import ShiningButton from "./ShiningButton";

// Map of icons for skill icons and skill text strings
const iconMap: { [key: string]: JSX.Element | string } = {
  Axios: <SiAxios />,
  Express: <SiExpress />,
  Git: <SiGit />,
  Javascript: <SiJavascript />,
  Mongodb: <SiMongodb />,
  Nodedotjs: <SiNodedotjs />,
  Postman: <SiPostman />,
  React: <SiReact />,
  Tailwindcss: <SiTailwindcss />,
  Typescript: <SiTypescript />,
  Npm: <SiNpm />,
  "AI Prompting": "AI prompting,",
  "Analytical Skills": "analytical skills,",
  "Critical Thinking": "critical thinking,",
  "Problem-Solving": "problem-solving,",
  "Generative AI Tools": "generative AI tools,",
  "Quality Assurance": "quality assurance,",
  "Quality Auditing": "quality auditing, etc.",
};

const CredentialTimeline = () => {
  const [credential, setCredential] = useState(credentialsData.slice(0, 3)); // the number of credentials that are loaded initially
  const [, setHasMore] = useState(true); // to check if there are more credentials to load
  const [isExpanded, setIsExpanded] = useState(false); // to check if the credentials are expanded
  const loadMoreRef = useRef<HTMLButtonElement>(null); // to reference for the Plus icon ("Load more" button)
  const [loadMorePosition, setLoadMorePosition] = useState<number | null>(null); // to store the position of the "Load more" button

  const toggleCredential = () => {
    if (isExpanded) {
      setCredential(credentialsData.slice(0, 3)); // Reset to initial credential
      setHasMore(true);
      if (loadMorePosition !== null) {
        window.scrollTo({ top: loadMorePosition, behavior: "auto" }); // Set the scroll position to the stored position without scrolling
      }
    } else {
      setLoadMorePosition(window.scrollY); // Store the current scroll position
      setCredential(credentialsData); // Load all credential
      setHasMore(false); // No more credential to load
    }
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (!isExpanded && loadMorePosition !== null) {
      window.scrollTo({ top: loadMorePosition, behavior: "auto" }); // Set the scroll position to the stored position without scrolling
    }
  }, [isExpanded, loadMorePosition]);

  return (
    <>
      <VerticalTimeline layout={"2-columns"}>
        {/* Loop through the credentialsData array and display each credential as a VerticalTimelineElement */}
        {credential.map((credential, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work text-left"
            contentStyle={{
              background:
                "linear-gradient(180deg, rgba(75,30,133,0.8), rgba(75,30,133,0.01))",
              color: "rgb(203, 213, 225)",
            }}
            contentArrowStyle={{
              borderRight: `0.75rem solid rgba(75,30,133,0.65)`,
            }}
            date={credential.date}
            icon={
              credential.icon && (
                <img
                  src={credential.icon}
                  alt={"credential icon"}
                  className="w-full h-full object-cover rounded-full"
                />
              )
            }
            iconStyle={{
              background: "#fff",
            }}
          >
            <div className="vertical-timeline-element-title text-base md:text-lg text-slate-100 font-bold">
              {credential.title}
            </div>
            <div className="flex flex-col md:flex-row md:gap-5 text-sm md:text-base italic">
              <div className="vertical-timeline-element-subtitle">
                {credential.organization}
              </div>
              {credential.location && (
                <div className="flex flex-row items-center gap-1">
                  <div>
                    <FaLocationDot />
                  </div>
                  <div>{credential.location}</div>
                </div>
              )}
            </div>
            <div className="vertical-timeline-element-title text-sm py-3">
              {credential.desc}
            </div>
            <div className="grid md:grid-cols-2">
              {credential.skills && credential.skills.length > 0 && (
                <div className="flex items-center">
                  <span className="text-sm md:font-medium">Skills:</span>
                  {/* For icon skills: */}
                  <div className="flex flex-row gap-x-2 ml-2">
                    {credential.skills
                      .filter((skill) => typeof iconMap[skill] !== "string")
                      .map((skill, i) => (
                        <span key={i} className="text-xl">
                          {iconMap[skill]}
                        </span>
                      ))}
                  </div>
                  {/* For text skills: */}
                  <div className="overflow-auto md:overflow-visible">
                    <div
                      className="flex flex-row whitespace-nowrap gap-x-1 sm:gap-x-1.5 overflow-hidden
                        overflow-x-scroll scrollbarX w-[23%] sm:w-[50%] md:w-[63%] lg:w-[91%] xl:w-[48%]"
                    >
                      {credential.skills
                        .filter((skill) => typeof iconMap[skill] === "string")
                        .map((skill, i) => (
                          <span
                            key={i}
                            className="text-sm sm:text-base mb-1 sm:mb-0.5 font-light"
                          >
                            {iconMap[skill]}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              )}
              <div className="flex left-0 justify-end mt-3 sm:-mt-7 md:-mt-3">
                {credential.link && (
                  <a
                    href={credential.link}
                    target="_blank"
                    className="text-xs sm:text-sm md:text-base"
                  >
                    <ShiningButton text="See Certification" />
                  </a>
                )}
              </div>
            </div>
          </VerticalTimelineElement>
        ))}
        {/* Add a button to toggle the credential */}
        <VerticalTimelineElement
          iconStyle={{
            background: "linear-gradient(180deg, rgb(75,30,133), rgb(0, 0, 0))",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon={
            <button
              onClick={toggleCredential}
              className="flex pt-3 lg:pt-2"
              ref={loadMoreRef} // Reference to the "Load more" button
            >
              {isExpanded ? (
                <div className="flex items-center gap-x-28 lg:gap-x-[8.25rem]">
                  <IoMdClose />
                  <div className="mb-3 font-semibold text-[#8a9198]">Close</div>
                </div>
              ) : (
                <div className="flex items-center w-max gap-x-36 lg:gap-x-[10.5rem]">
                  <FaPlus />
                  <div className="mb-3 font-semibold text-[#8a9198]">
                    Load more
                  </div>
                </div>
              )}
            </button>
          }
        />
      </VerticalTimeline>
    </>
  );
};

export default CredentialTimeline;
