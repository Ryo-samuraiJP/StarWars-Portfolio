import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProjectCards from "./ProjectCards";

const ProjectTabs = () => {
  return (
    <div>
      <hr className="my-16" />
      <h1 className="font-semibold">Projects</h1>
      <p className="mt-5 mb-10">Most recent work</p>
      <Tabs>
        <TabList>
          <Tab>All</Tab>
          <Tab>Web</Tab>
          <Tab>Mobile</Tab>
          <Tab>AI</Tab>
          <Tab>Others</Tab>
        </TabList>

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
