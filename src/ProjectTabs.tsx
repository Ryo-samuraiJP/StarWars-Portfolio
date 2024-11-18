import { useState } from "react";
import { Tab, Tabs, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProjectCards from "./components/ui/ProjectCards";
import { genres } from "./data/projectsData";

const ProjectTabs = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
      <Tabs
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      >
        <div className="grid grid-cols-5 justify-self-center mb-[3rem]">
          {genres.map((genre, index) => (
            <Tab key={genre}>
              <button
                className={`border-2 py-[0.3rem] px-[1.5rem] rounded-[1rem] transition-all duration-300 ${
                  selectedIndex === index
                    ? "bg-white text-black"
                    : "hover:bg-white hover:text-black"
                }`}
              >
                {genre}
              </button>
            </Tab>
          ))}
        </div>

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
