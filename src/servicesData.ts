import { BsDiagram3 } from "react-icons/bs";
import { BiServer } from "react-icons/bi";
import { PiCode, PiDatabase } from "react-icons/pi";

export const servicesData = [
  {
    id: 1,
    name: "Fronend Development",
    desc: "I build modern and responsive user interfaces using React.js, TypeScript, JavaScript, and Tailwind CSS for styling and animations.",
    icon: PiCode,
  },
  {
    id: 2,
    name: "Backend Development",
    desc: "I offer server-side applications using Node.js and Express.js for seamless routing and API integrations.",
    icon: BiServer,
  },
  {
    id: 3,
    name: "Database Management",
    desc: "I manage and optimize SQL and NoSQL databases using Oracle, MySQL, and MongoDB to ensure data integrity and performance.",
    icon: PiDatabase,
  },
  {
    id: 4,
    name: "Agile Software Modeling",
    desc: "I design and implement UML diagrams using diagramming tools for efficient software development, following Agile methodologies.",
    icon: BsDiagram3,
  },
];
