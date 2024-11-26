import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaBriefcase,
  FaCode,
  FaDev,
  FaHandshake,
  FaHome,
  FaLaptopCode,
  FaPaperPlane,
} from "react-icons/fa";

const routes = [
  {
    id: "home",
    label: "Home",
    path: "/#home",
    icon: <FaHome className="text-2xl" />,
  },
  {
    id: "project",
    label: "Project",
    path: "/#project",
    icon: <FaLaptopCode className="text-2xl" />,
  },
  {
    id: "technical-skill",
    label: "Tech Skill",
    path: "/#technical-skill",
    icon: <FaCode className="text-2xl" />,
  },
  {
    id: "service",
    label: "Service",
    path: "/#service",
    icon: <FaHandshake className="text-2xl" />,
  },
  {
    id: "credential",
    label: "Credential",
    path: "/#credential",
    icon: <FaBriefcase className="text-2xl" />,
  },
  {
    id: "tech-blog",
    label: "Tech Blog",
    path: "/#tech-blog",
    icon: <FaDev className="text-2xl" />,
  },
  {
    id: "contact",
    label: "Contact",
    path: "/#contact",
    icon: <FaPaperPlane className="text-2xl" />,
  },
];

const NavBar = () => {
  // State to keep track of the active route and the previous active route for the navigation bar
  const [activeRoute, setActiveRoute] = useState("home");
  const [prevActiveRoute, setPrevActiveRoute] = useState("home");

  // Function to handle route click and set the active route and previous active route accordingly
  const handleRouteClick = (routeId: string) => {
    setPrevActiveRoute(activeRoute);
    setActiveRoute(routeId);
  };

  // Function to get the index of the route in the routes array based on the route id
  const getRouteIndex = (routeId: string) =>
    routes.findIndex((route) => route.id === routeId);

  return (
    <nav className="flex items-center justify-center">
      <div className="relative flex w-[75%] overflow-hidden border border-gray-600 rounded-full bg-transparent py-[0.175rem] shadow-xl shadow-gray-800">
        <AnimatePresence initial={false}>
          <motion.div
            key={activeRoute}
            className="absolute inset-y-0 my-[0.2rem] border border-gray-400 rounded-full bg-gray-800"
            initial={{ x: `${getRouteIndex(prevActiveRoute) * 100}%` }}
            animate={{ x: `${getRouteIndex(activeRoute) * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ width: `${100 / routes.length}%` }}
          />
        </AnimatePresence>
        {/* Mapping through the routes array to render the navigation links with icons and labels  */}
        {routes.map((route) => (
          <HashLink
            key={route.id}
            to={route.path}
            smooth={true}
            className={`relative z-10 flex w-full items-center justify-center py-[0.625rem] font-medium transition-all duration-300 ${
              activeRoute === route.id
                ? "font-bold text-white"
                : "text-gray-500"
            }`}
          >
            <motion.button
              onClick={() => handleRouteClick(route.id)}
              className="flex gap-[0.375rem]"
            >
              {route.icon}
              {route.label}
            </motion.button>
          </HashLink>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
