import { Tab, Tabs, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProjectCards from "./ProjectCards";

const ProjectTabs = () => {
  return (
    <div>
      <hr className="my-[4rem]" />
      <h1 className="font-semibold">Projects</h1>
      <p className="mt-[1.25rem] mb-[2.5rem]">Most recent work</p>
      <Tabs>
        <div className="space-x-[2.5rem] mb-[3rem]">
          <Tab>
            <button className="border-2 py-[0.3rem] px-[1.5rem] rounded-[1rem] transition-all duration-300 hover:bg-white hover:text-black">
              All
            </button>
          </Tab>
          <Tab>
            <button className="border-2 py-[0.3rem] px-[1.5rem] rounded-[1rem] transition-all duration-300 hover:bg-white hover:text-black">
              Web
            </button>
          </Tab>
          <Tab>
            <button className="border-2 py-[0.3rem] px-[1.5rem] rounded-[1rem] transition-all duration-300 hover:bg-white hover:text-black">
              Mobile
            </button>
          </Tab>
          <Tab>
            <button className="border-2 py-[0.3rem] px-[1.5rem] rounded-[1rem] transition-all duration-300 hover:bg-white hover:text-black">
              AI
            </button>
          </Tab>
          <Tab>
            <button className="border-2 py-[0.3rem] px-[1.5rem] rounded-[1rem] transition-all duration-300 hover:bg-white hover:text-black">
              Others
            </button>
          </Tab>
        </div>

        <TabPanel>
          <ProjectCards genre="All" />
        </TabPanel>
        <TabPanel>
          <ProjectCards genre="Web" />
        </TabPanel>
        <TabPanel>
          <ProjectCards genre="Mobile" />
        </TabPanel>
        <TabPanel>
          <ProjectCards genre="AI" />
        </TabPanel>
        <TabPanel>
          <ProjectCards genre="Others" />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ProjectTabs;
