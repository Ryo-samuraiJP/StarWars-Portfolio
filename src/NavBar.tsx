import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaBriefcase,
  FaCode,
  FaDev,
  FaHandshake,
  FaHome,
  FaLaptopCode,
  FaPaperPlane,
} from "react-icons/fa";

const tabs = [
  {
    id: "home",
    label: "Home",
    icon: <FaHome className="text-2xl" />,
  },
  {
    id: "project",
    label: "Project",
    icon: <FaLaptopCode className="text-2xl" />,
  },
  {
    id: "skill",
    label: "Tech Skill",
    icon: <FaCode className="text-2xl" />,
  },
  {
    id: "service",
    label: "Service",
    icon: <FaHandshake className="text-2xl" />,
  },
  {
    id: "credential",
    label: "Credential",
    icon: <FaBriefcase className="text-2xl" />,
  },
  {
    id: "blog",
    label: "Tech Blog",
    icon: <FaDev className="text-2xl" />,
  },
  {
    id: "contact",
    label: "Contact",
    icon: <FaPaperPlane className="text-2xl" />,
  },
];

const NavBar = () => {
  // State to keep track of the active tab and the previous active tab for animation
  const [activeTab, setActiveTab] = useState("");
  const [prevActiveTab, setPrevActiveTab] = useState("");

  // Function to handle tab click and set the active tab and previous active tab accordingly
  const handleTabClick = (tabId: string) => {
    setPrevActiveTab(activeTab);
    setActiveTab(tabId);
  };

  // Function to get the index of the tab in the tabs array based on the tab id
  const getTabIndex = (tabId: string) =>
    tabs.findIndex((tab) => tab.id === tabId);

  return (
    <div className="flex items-center justify-center">
      <div className="relative flex w-[80%] overflow-hidden border border-gray-600 rounded-full bg-transparent py-[0.175rem] shadow-xl shadow-gray-800">
        <AnimatePresence initial={false}>
          <motion.div
            key={activeTab}
            className="absolute inset-y-0 my-[0.2rem] border border-gray-400 rounded-full bg-gray-800"
            initial={{ x: `${getTabIndex(prevActiveTab) * 100}%` }}
            animate={{ x: `${getTabIndex(activeTab) * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ width: `${100 / tabs.length}%` }}
          />
        </AnimatePresence>
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            className={`relative z-10 flex w-full items-center justify-center gap-[0.375rem] py-[0.625rem] font-medium transition-all duration-300 ${
              activeTab === tab.id ? "font-bold text-white" : "text-gray-500"
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.icon}
            {tab.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
