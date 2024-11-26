import { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { credentialsData } from "../../data/credentialsData";
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
  "Critical Thinking": "critical thinking,",
  "Quality Assurance": "quality assurance, etc.",
};

const CredentialTimeline = () => {
  const [credential, setCredential] = useState(credentialsData.slice(0, 3)); // the number of credentials that are loaded initially
  const [, setHasMore] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCredential = () => {
    if (isExpanded) {
      setCredential(credentialsData.slice(0, 5)); // Reset to initial credential
      setHasMore(true);
    } else {
      setCredential(credentialsData); // Load all credential
      setHasMore(false);
    }
    setIsExpanded(!isExpanded);
  };

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
                "linear-gradient(180deg, rgb(15,19,39), rgb(50, 60, 75))",
              color: "rgb(203, 213, 225)",
            }}
            contentArrowStyle={{
              borderRight: `10px solid rgba(19,24,43,255)`,
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
            <h3 className="vertical-timeline-element-title text-lg font-bold">
              {credential.title}
            </h3>
            <div className="flex items-center gap-[0.5rem] italic">
              <h4 className="vertical-timeline-element-subtitle">
                {credential.organization}
              </h4>
              {credential.location && <h4>| &nbsp;{credential.location}</h4>}
            </div>
            <div className="vertical-timeline-element-title py-[0.75rem]">
              {credential.desc}
            </div>

            <div className="grid grid-cols-2">
              {credential.skills && credential.skills.length > 0 && (
                <div className="flex items-center gap-[0.5rem]">
                  <span className="font-medium">Skills:</span>
                  <div className="flex gap-[0.375rem]">
                    {credential.skills.map((skill, i) => (
                      <span
                        key={i}
                        className={`text-base  ${
                          typeof iconMap[skill] === "string"
                            ? "w-max font-light" // If the skill is a text string, set the font to light
                            : "text-xl" // If the skill is an icon, set the font to normal
                        }`}
                      >
                        {typeof iconMap[skill] === "string"
                          ? iconMap[skill]
                          : iconMap[skill]}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex justify-end">
                {credential.link && (
                  <a href={credential.link} target="_blank">
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
            background:
              "linear-gradient(180deg, rgb(15,19,39), rgb(50, 60, 75))",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon={
            <button onClick={toggleCredential} className="pt-[0.5rem]">
              {isExpanded ? (
                <div className="flex items-center gap-[7.75rem]">
                  <IoMdClose />
                  <div className="mb-[0.75rem] font-semibold text-[#8a9198]">
                    Close
                  </div>
                </div>
              ) : (
                <div className="flex items-center w-max gap-[10.5rem]">
                  <FaPlus />
                  <div className="mb-[0.75rem] font-semibold text-[#8a9198]">
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
