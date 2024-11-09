import {
  IoLogoGithub,
  IoLogoJavascript,
  IoLogoYoutube,
  IoMdOpen,
} from "react-icons/io";
import itone from "./assets/itone.png";
import ai_visual_doppelganger from "./assets/ai_visual_doppelganger.jpg";
import platemate from "./assets/platemate.jpeg";
import platemate_architecture from "./assets/platemate_architecture.png";
import campus_network_simulator from "./assets/network_simulator.png";
import {
  SiAndroidstudio,
  SiCisco,
  SiDiagramsdotnet,
  SiFlask,
  SiGoogledrive,
  SiPrezi,
  SiRender,
  SiVite,
} from "react-icons/si";
import { FiDownload } from "react-icons/fi";
import { FaJava, FaPython, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";
import { BsFiletypeXml } from "react-icons/bs";

export const projectsData = [
  {
    id: 1,
    name: "iTone",
    desc: "Music streaming web application inspired by Spotify",
    image: itone,
    genre: "Web",
    links: [
      { icon: IoMdOpen, text: "Live", url: "https://itone.vercel.app/" },
      {
        icon: IoLogoGithub,
        text: "GitHub",
        url: "https://github.com/Ryo-samuraiJP/iTone",
      },
    ],
    tech_used: [
      { icon: FaReact, text: "React" },
      { icon: SiVite, text: "Vite" },
      { icon: RiTailwindCssFill, text: "Tailwind CSS" },
      { icon: IoLogoJavascript, text: "JavaScript" },
      { icon: IoLogoVercel, text: "Vercel" },
    ],
  },
  {
    id: 2,
    name: "AI Visual Doppelganger",
    desc: "AI-powered replication web application",
    image: ai_visual_doppelganger,
    genre: ["Web", "AI"],
    links: [
      {
        icon: IoMdOpen,
        text: "Live",
        url: "https://ai-visual-doppelganger.onrender.com/",
      },
      {
        icon: IoLogoGithub,
        text: "GitHub",
        url: "https://github.com/Ryo-samuraiJP/AI-Visual-Doppelganger",
      },
      {
        icon: IoLogoYoutube,
        text: "Demo Video",
        url: "https://www.youtube.com/watch?v=VT6eddrVVOA&feature=youtu.be",
      },
    ],
    tech_used: [
      { icon: SiFlask, text: "Flask" },
      { icon: FaPython, text: "Python" },
      { icon: SiRender, text: "SiRender" },
    ],
  },
  {
    id: 3,
    name: "PlateMate",
    desc: "Food delivery mobile app for Android OS",
    image: platemate,
    genre: "Mobile",
    links: [
      {
        icon: IoLogoGithub,
        text: "GitHub",
        url: "https://github.com/Ryo-samuraiJP/PlateMate",
      },
      {
        icon: IoLogoYoutube,
        text: "Demo Video",
        url: "https://www.youtube.com/watch?v=N_yUfrnbgWI&feature=youtu.be",
      },
    ],
    tech_used: [
      { icon: FaJava, text: "Java" },
      { icon: BsFiletypeXml, text: "XML" },
      { icon: SiAndroidstudio, text: "Android Studio" },
    ],
  },
  {
    id: 4,
    name: "PlateMate Architecural Model",
    desc: "Food delivery system architectural design",
    image: platemate_architecture,
    genre: "Others",
    links: [
      {
        icon: IoLogoGithub,
        text: "GitHub",
        url: "https://github.com/Ryo-samuraiJP/PlateMate",
      },
      {
        icon: SiPrezi,
        text: "Demo",
        ulr: "https://prezi.com/view/kiFUg0jNey3zD5mN1ctl/",
      },
    ],
    tech_used: [{ icon: SiDiagramsdotnet, text: "diagrams.net" }],
  },
  {
    id: 5,
    name: "Campus Network Simulator",
    desc: "Network infrastructure design for campus",
    image: campus_network_simulator,
    genre: "Others",
    links: [
      {
        icon: IoLogoGithub,
        text: "GitHub",
        url: "https://github.com/Ryo-samuraiJP/Campus-Network-Simulator",
      },
      {
        icon: SiGoogledrive,
        text: "Documentation",
        url: "https://drive.google.com/file/d/1EPAgZVmzu8FohEzQUeSY3xldoKdnoyNy/view?usp=sharing",
      },
      {
        icon: FiDownload,
        text: "Download pkt",
        url: "https://drive.usercontent.google.com/u/0/uc?id=1HVgYZu9RMIlfEn8bxssOG3lytE-uWUOh&export=download/",
      },
    ],
    tech_used: [{ icon: SiCisco, text: "Cisco Packet Tracer" }],
  },
];

export const filterProjects = (genre: string) => {
  if (genre === "All") {
    return projectsData;
  }
  return projectsData.filter((project) => {
    if (Array.isArray(project.genre)) {
      return project.genre.includes(genre);
    }
    return project.genre === genre;
  });
};
