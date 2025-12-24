import React, { useState, useRef, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { credentialsData, iconMap } from "../../../data/credentialsData";
import { FaPlus } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import ShiningButton from "../../TechBlog/components/ShiningButton";

const CredentialTimeline = () => {
  const [credential, setCredential] = useState(credentialsData.slice(-4)); // the last four of credentials that are loaded initially
  const [, setHasMore] = useState(true); // to check if there are more credentials to load
  const [isExpanded, setIsExpanded] = useState(false); // to check if the credentials are expanded
  const loadMoreRef = useRef<HTMLButtonElement>(null); // to reference for the Plus icon ("Load more" button)
  const [loadMorePosition, setLoadMorePosition] = useState<number | null>(null); // to store the position of the "Load more" button

  const toggleCredential = () => {
    if (isExpanded) {
      setCredential(credentialsData.slice(-4)); // Reset to the last four credentials
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
        {[...credential].reverse().map((credential, index) => (
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
              {credential.desc &&
                credential.desc.split("\n").map((bulletPnt, i) => (
                  // Display each bullet point in a separate div for proper line breaks
                  <div key={i} className="mb-2">
                    {bulletPnt}
                  </div>
                ))}
            </div>
            <div className="grid md:grid-cols-2">
              {credential.skills && credential.skills.length > 0 && (
                <div className="flex items-center">
                  <span className="text-sm md:font-medium">Skills:</span>
                  {/* Display skill icons with horizontal scrolling on small screens */}
                  <div
                    className="flex flex-row gap-x-1.5 ml-2 scrollbarX
                      overflow-x-auto sm:overflow-visible w-[45%] sm:w-full"
                  >
                    {credential.skills.map((skill, i) => (
                      <span key={i} className="text-xl">
                        {iconMap[skill] && React.createElement(iconMap[skill])}
                      </span>
                    ))}
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
              className="flex"
              ref={loadMoreRef} // Reference to the "Load more" button
            >
              {isExpanded ? (
                <div className="flex items-center gap-x-28 lg:gap-x-[8.25rem]">
                  <IoMdClose className="-mb-2.5 md:mb-3" />
                  <div className="font-semibold text-[#8a9198]">Close</div>
                </div>
              ) : (
                <div className="flex items-center w-max gap-x-36 lg:gap-x-[10.5rem]">
                  <FaPlus className="-mb-2.5 md:mb-3" />
                  <div className="font-semibold text-[#8a9198]">Load more</div>
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
