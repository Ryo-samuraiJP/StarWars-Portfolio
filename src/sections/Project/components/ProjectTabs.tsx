import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";

interface TabProps {
  text: string;
  selected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

interface ProjectTabsProps {
  tabs: string[];
  renderContent: (selectedTab: string) => React.ReactNode;
}

// Tab component to render each tab
const Tab = ({ text, selected, setSelected }: TabProps) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={cn(
        "relative p-[0.65rem] transition-all duration-300 ease-in-out",
        selected
          ? "text-white"
          : "text-slate-400 hover:text-white hover:font-medium duration-0"
      )}
    >
      <p className="relative z-10 min-w-20">{text}</p>
      {selected && (
        <motion.span
          layoutId="tabs"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 border-2 border-gray-600 rounded-full
          bg-gradient-to-br from-[rgb(75,30,133)] to-[rgba(75,30,133,0.01)]"
        />
      )}
    </button>
  );
};

const ProjectTabs = ({ tabs, renderContent }: ProjectTabsProps) => {
  // State to keep track of the selected tab
  const [selected, setSelected] = useState<string>(tabs[0]);

  return (
    <>
      <div className="md:flex md:flex-wrap justify-center lg:gap-4 text-xs sm:text-sm">
        {/* Map through the tabs and render each tab component with the props */}
        {tabs.map((tab) => (
          <Tab
            text={tab}
            selected={selected === tab}
            setSelected={setSelected}
            key={tab}
          />
        ))}
      </div>
      <div className="mt-8">{renderContent(selected)}</div>
    </>
  );
};

export default ProjectTabs;
