import { IoLogoGithub, IoLogoYoutube, IoMdOpen } from "react-icons/io";
import rag_chatbot from "./../assets/images/rag_chatbot.png";
import portfolio from "./../assets/images/portfolio.png";
import itone from "./../assets/images/itone.png";
import ai_visual_doppelganger from "./../assets/images/ai_visual_doppelganger.jpg";
import platemate from "./../assets/images/platemate.jpeg";
import platemate_architecture from "./../assets/images/platemate_architecture.png";
import campus_network_simulator from "./../assets/images/network_simulator.png";
import {
  SiAmazons3,
  SiAmazonwebservices,
  SiAndroidstudio,
  SiCisco,
  SiCss3,
  SiDiagramsdotnet,
  SiDotenv,
  SiFlask,
  SiGoogledrive,
  SiHtml5,
  SiJavascript,
  SiNumpy,
  SiOpensearch,
  SiPrezi,
  SiPython,
  SiReact,
  SiReacthookform,
  SiRender,
  SiTailwindcss,
  SiTypescript,
  SiUml,
  SiVercel,
  SiVite,
  SiZod,
} from "react-icons/si";
import { TbApi, TbBrandFramerMotion } from "react-icons/tb";
import { FiDownload } from "react-icons/fi";
import { BsFiletypeXml } from "react-icons/bs";
import { AiOutlineJava } from "react-icons/ai";

export const projectsData = [
  {
    id: 1,
    title: "RAG Chatbot in Amazon Bedrock",
    desc: "RAG chatbot for several use cases solving real problems",
    image: rag_chatbot,
    genre: "AI / ML",
    links: [
      {
        icon: IoLogoGithub,
        text: "GitHub",
        url: "https://github.com/Ryo-samuraiJP/RAG-Chatbot-in-AmazonBedrock",
      },
      {
        icon: SiGoogledrive,
        text: "Docs",
        url: "https://drive.google.com/file/d/1q_Tdz_m4Zty3XiQAxinzxfZFH6I6k66z/view?usp=sharing",
      },
    ],
    tech_used: [
      { icon: SiAmazonwebservices, name: "Amazon Bedrock" },
      { icon: SiAmazons3, name: "Amazon S3" },
      { icon: SiOpensearch, name: "OpenSearch Serverless" },
    ],
  },
  {
    id: 2,
    title: "StarWars Portfolio",
    desc: "Modern web portfolio animated by Framer Motion",
    image: portfolio,
    genre: "Web",
    links: [
      { icon: IoMdOpen, text: "Live", url: "https://www.ryoichihomma.me/" },
      {
        icon: IoLogoGithub,
        text: "GitHub",
        url: "https://github.com/Ryo-samuraiJP/StarWars-Portfolio",
      },
    ],
    tech_used: [
      { icon: SiReact, name: "React" },
      { icon: SiVite, name: "Vite" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: TbBrandFramerMotion, name: "Framer Motion" },
      { icon: TbApi, name: "APIs" },
      { icon: SiDotenv, name: "Dotenv" },
      { icon: SiReacthookform, name: "React Hook Form" },
      { icon: SiZod, name: "Zod" },
      { icon: SiVercel, name: "Vercel" },
    ],
  },
  {
    id: 3,
    title: "iTone",
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
      { icon: SiReact, name: "React" },
      { icon: SiVite, name: "Vite" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiVercel, name: "Vercel" },
    ],
  },
  {
    id: 4,
    title: "AI Visual Doppelganger",
    desc: "AI-powered image replication web tool",
    image: ai_visual_doppelganger,
    genre: ["Web", "AI / ML"],
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
        text: "Demo",
        url: "https://www.youtube.com/watch?v=VT6eddrVVOA&feature=youtu.be",
      },
    ],
    tech_used: [
      { icon: SiFlask, name: "Flask" },
      { icon: SiNumpy, name: "NumPy" },
      { icon: SiPython, name: "Python" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiHtml5, name: "HTML" },
      { icon: SiCss3, name: "CSS" },
      { icon: SiRender, name: "Render" },
    ],
  },
  {
    id: 5,
    title: "PlateMate",
    desc: "Food delivery mobile application for Android OS",
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
        text: "Demo",
        url: "https://www.youtube.com/watch?v=N_yUfrnbgWI&feature=youtu.be",
      },
    ],
    tech_used: [
      { icon: AiOutlineJava, name: "Java" },
      { icon: BsFiletypeXml, name: "XML" },
      { icon: SiAndroidstudio, name: "Android Studio" },
    ],
  },
  {
    id: 6,
    title: "PlateMate Architectural Model",
    desc: "Food delivery system architectural design",
    image: platemate_architecture,
    genre: "Others",
    links: [
      {
        icon: IoLogoGithub,
        text: "GitHub",
        url: "https://github.com/Ryo-samuraiJP/PlateMate?tab=readme-ov-file#architectural-model",
      },
      {
        icon: SiPrezi,
        text: "Demo",
        url: "https://prezi.com/view/U2BLmG4mcBCIPllKAI79/",
      },
    ],
    tech_used: [
      { icon: SiUml, name: "UML" },
      { icon: SiDiagramsdotnet, name: "diagrams.net" },
    ],
  },
  {
    id: 7,
    title: "Campus Network Simulator",
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
        text: "Docs",
        url: "https://drive.google.com/file/d/1EPAgZVmzu8FohEzQUeSY3xldoKdnoyNy/view?usp=sharing",
      },
      {
        icon: FiDownload,
        text: "Download",
        url: "https://drive.usercontent.google.com/u/0/uc?id=1HVgYZu9RMIlfEn8bxssOG3lytE-uWUOh&export=download/",
      },
    ],
    tech_used: [{ icon: SiCisco, name: "Cisco Packet Tracer" }],
  },
];

export const genres = [
  // Add "ALL" to the beginning of the array
  "All",
  ...Array.from(new Set(projectsData.flatMap((project) => project.genre))),
];

// Function to filter projects based on genre
export const filterProjects = (genre: string) => {
  if (genre === "All") {
    return projectsData;
  }
  return projectsData.filter((project) =>
    Array.isArray(project.genre)
      ? project.genre.includes(genre)
      : project.genre === genre
  );
};
