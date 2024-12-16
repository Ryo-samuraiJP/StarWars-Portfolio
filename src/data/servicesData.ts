import { BsDiagram3 } from "react-icons/bs";
import { BiServer } from "react-icons/bi";
import { PiCode, PiDatabase } from "react-icons/pi";

export const servicesData = [
  {
    id: 1,
    name: "Fronend Development",
    desc: "I build animated, responsive, and user-friendly interfaces using React, TypeScript, JavaScript, Tailwind CSS, and Framer Motion. I focus on creating visually appealing and efficient designs to enhance user experiences.",
    icon: PiCode,
  },
  {
    id: 2,
    name: "Backend Development",
    desc: "I develop robust server-side applications with Node.js, Express.js, and Python. I focus on ensuring seamless integration with the front end, optimized performance, and reliable API functionality.",
    icon: BiServer,
  },
  {
    id: 3,
    name: "Database Management",
    desc: "I design and manage databases using SQL and NoSQL technologies like Oracle, MySQL, and MongoDB. I focus on ensuring data integrity, high performance, and efficient data handling.",
    icon: PiDatabase,
  },
  {
    id: 4,
    name: "Agile Architecture Design",
    desc: "I design software architectural models using UML and diagramming tools to support efficient development. By following Agile methodologies, I ensure streamlined processes and effective collaboration.",
    icon: BsDiagram3,
  },
];
