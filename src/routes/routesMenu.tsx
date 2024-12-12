import {
  FaCode,
  FaDev,
  FaHandshake,
  FaHome,
  FaLaptopCode,
  FaPaperPlane,
} from "react-icons/fa";
import { IoBriefcase } from "react-icons/io5";

// Routes menu data in the navigation bar
export const routesMenu = [
  {
    id: "home",
    label: "Home",
    path: "/#home",
    icon: <FaHome />,
  },
  {
    id: "project",
    label: "Project",
    path: "/#project",
    icon: <FaLaptopCode />,
  },
  {
    id: "technical-skill",
    label: "Tech Skill",
    path: "/#technical-skill",
    icon: <FaCode />,
  },
  {
    id: "service",
    label: "Service",
    path: "/#service",
    icon: <FaHandshake />,
  },
  {
    id: "credential",
    label: "Credential",
    path: "/#credential",
    icon: <IoBriefcase />,
  },
  {
    id: "tech-blog",
    label: "Tech Blog",
    path: "/#tech-blog",
    icon: <FaDev />,
  },
  {
    id: "contact",
    label: "Contact",
    path: "/#contact",
    icon: <FaPaperPlane />,
  },
];
