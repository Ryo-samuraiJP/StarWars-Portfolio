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
  SiOracle,
  SiAmazonwebservices,
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
        progress: 60,
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
        name: "CSS3",
        icon: SiCss3,
        color: "#1572B6",
        progress: 80,
      },
      {
        name: "HTML5",
        icon: SiHtml5,
        color: "#E34F26",
        progress: 95,
      },
    ],
  },
  {
    id: 2,
    category: "Backend Development",
    skills: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "#5FA04E",
        progress: 60,
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "#FCFCFCFC",
        progress: 60,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
        progress: 50,
      },
      {
        name: "OracleDB",
        icon: SiOracle,
        color: "#C74634",
        progress: 60,
      },
      {
        name: "Python",
        icon: SiPython,
        color: "#3776AB",
        progress: 50,
      },
    ],
  },
  {
    id: 3,
    category: "Cloud & DevOps",
    skills: [
      {
        name: "AWS",
        icon: SiAmazonwebservices,
        color: "#FF9000",
        progress: 40,
      },
      {
        name: "Git",
        icon: SiGit,
        color: "#F05032",
        progress: 80,
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
