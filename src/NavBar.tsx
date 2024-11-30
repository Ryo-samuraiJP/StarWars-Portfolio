import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaCode,
  FaDev,
  FaHandshake,
  FaHome,
  FaLaptopCode,
  FaPaperPlane,
} from "react-icons/fa";
import { IoBriefcase } from "react-icons/io5";

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
    icon: <IoBriefcase className="text-2xl" />,
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

  // State to keep track of the visibility of the navigation bar and the last scroll position
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Function to handle route click and set the active route and previous active route accordingly
  const handleRouteClick = (routeId: string) => {
    setPrevActiveRoute(activeRoute);
    setActiveRoute(routeId);
  };

  // Function to get the index of the route in the routes array based on the route id
  const getRouteIndex = (routeId: string) =>
    routes.findIndex((route) => route.id === routeId);

  // Effect to handle the visibility of the navigation bar based on the scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Scrolling up => show the navigation bar; otherwise, hide it
      if (window.scrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll); // Event listener for scroll event

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]); // Dependency array for the effect to run only when lastScrollY changes

  return (
    <nav
      className={`fixed top-4 left-0 right-0 z-30 flex justify-center px-[18rem] 
        transition-transform duration-300 ease-in-out
        ${isVisible ? "translate-y-0" : "-translate-y-[180%]"}`}
    >
      <div className="absolute -top-3 left-[2.5rem] text-3xl text-yellow-500 star-wars-font">
        <p>ryoichi</p>
        <p>homma</p>
      </div>
      <div className="relative flex w-[100%] overflow-hidden border border-gray-600 rounded-full bg-black shadow-xl shadow-sky-950">
        <AnimatePresence initial={false}>
          <motion.div
            key={activeRoute}
            className="absolute inset-y-0 mt-[0.05rem] mb-[0.1rem] border-2 border-blue-400 rounded-full bg-transparent shadow-md shadow-sky-500"
            initial={{ x: `${getRouteIndex(prevActiveRoute) * 100}%` }}
            animate={{ x: `${getRouteIndex(activeRoute) * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ width: `${100 / routes.length}%` }}
          />
        </AnimatePresence>
        {/* Mapping through the routes array to render the navigation links with icons and labels */}
        {routes.map((route) => (
          <HashLink
            key={route.id}
            to={route.path}
            smooth={true}
            className={`relative z-10 flex w-full items-center justify-center py-[0.625rem] font-medium transition-all duration-300 ${
              activeRoute === route.id
                ? "font-bold text-sky-200"
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
