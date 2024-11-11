import { BsDatabase } from "react-icons/bs";
import {
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiExpress,
  SiPython,
  SiMongodb,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";

export interface Skill {
  name: string;
  icon: React.ComponentType<{ size: string; color: string }>;
  color: string;
  size: string;
}

export const skillsData = [
  {
    id: 1,
    category: "Frontend Development",
    skills: [
      {
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
        progress: 70,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
        progress: 50,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
        progress: 70,
      },
      {
        name: "Tailwind",
        icon: SiTailwindcss,
        color: "#06B6D4",
        progress: 80,
      },
      {
        name: "CSS",
        icon: SiCss3,
        color: "#1572B6",
        progress: 80,
      },
      {
        name: "HTML",
        icon: SiHtml5,
        color: "#E34F26",
        progress: 90,
      },
    ],
  },
  {
    id: 2,
    category: "Backend Development",
    skills: [
      {
        name: "Node",
        icon: SiNodedotjs,
        color: "#5FA04E",
        progress: 60,
      },
      {
        name: "Express",
        icon: SiExpress,
        color: "#FCFCFCFC",
        progress: 50,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
        progress: 50,
      },
      {
        name: "SQL",
        icon: BsDatabase,
        color: "#E10098",
        progress: 70,
      },
      {
        name: "Python",
        icon: SiPython,
        color: "#3776AB",
        progress: 60,
      },
    ],
  },
  {
    id: 3,
    category: "DevOps",
    skills: [
      {
        name: "Git",
        icon: SiGit,
        color: "#F05032",
        progress: 70,
      },
      {
        name: "GitHub",
        icon: SiGithub,
        color: "#8730A5",
        progress: 70,
      },
      {
        name: "GitHub Actions",
        icon: SiGithubactions,
        color: "#2088FF",
        progress: 50,
      },
    ],
  },
];
