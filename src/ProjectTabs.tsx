import { Tab, Tabs, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProjectCards from "./ProjectCards";
import { genres } from "./projectsData";
import { useState } from "react";

const ProjectTabs = () => {
  // State to keep track of the selected tab
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      <Tabs
        selectedIndex={selectedTab}
        onSelect={(index) => setSelectedTab(index)}
      >
        <div className="grid grid-cols-5 justify-self-center mb-[3rem] border-2 border-white rounded-full">
          {/* Loop through the genres array to create tabs */}
          {genres.map((genre, index) => (
            <Tab key={genre}>
              <button
                className={`py-[0.3rem] px-[1.5rem] rounded-[1rem] transition-all duration-300 ${
                  selectedTab === index
                    ? "bg-white text-black"
                    : "hover:bg-white hover:text-black"
                }`}
              >
                {genre}
              </button>
            </Tab>
          ))}
        </div>

        {/* Loop through the genres array to create tab panels */}
        {genres.map((genre) => (
          <TabPanel key={genre}>
            <ProjectCards genre={genre} />
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default ProjectTabs;
