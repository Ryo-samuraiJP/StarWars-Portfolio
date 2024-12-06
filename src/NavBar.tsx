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
import { IoMdCloseCircle, IoMdMenu } from "react-icons/io";

const routes = [
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

const NavBar = () => {
  // Set that active and previous routes are initially "home" as default
  const [activeRoute, setActiveRoute] = useState("home");
  const [prevActiveRoute, setPrevActiveRoute] = useState("home");

  // Set that the navigation bar is initially visible
  const [isVisible, setIsVisible] = useState(true);

  // Set that the last scroll Y position is initially 0
  const [lastScrollY, setLastScrollY] = useState(0);

  // Set that the menu is initially closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleRouteClick = (routeId: string) => {
    setPrevActiveRoute(activeRoute);
    setActiveRoute(routeId);
    setIsMenuOpen(false);
  };

  // Get the index of the route in the routes array by the route ID
  const getRouteIndex = (routeId: string) =>
    routes.findIndex((route) => route.id === routeId);

  // Add an event listener to handle the scroll event and update the visibility of the navigation bar
  useEffect(() => {
    const handleScroll = () => {
      // If the current scroll Y position is less than the last scroll Y position, set the navigation bar visible
      if (window.scrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false); // Otherwise, set the navigation bar invisible
      }
      setLastScrollY(window.scrollY); // Update the last scroll Y position
    };
    window.addEventListener("scroll", handleScroll); // Add an event listener to handle the scroll event

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-2 lg:-top-7 left-0 right-0 z-30 flex items-center justify-between px-4 lg:px-80 
        transition-transform duration-300 ease-in-out
        ${isVisible ? "translate-y-0" : "-translate-y-[600%]"}`}
    >
      {/* Logo as text */}
      <div className="text-2xl md:text-3xl text-yellow-500 star-wars-font lg:mt-9 lg:-mx-72">
        <p>ryoichi</p>
        <p>homma</p>
      </div>
      <div className="relative lg:flex lg:w-full lg:justify-center">
        {/* Menu/Close icon for small and middle screens */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-3xl text-yellow-500"
        >
          {isMenuOpen ? <IoMdCloseCircle /> : <IoMdMenu />}
        </button>
        <div
          className={`absolute inset-x-0 flex lg:flex-row ${
            isMenuOpen ? "flex flex-col" : "hidden"
          } lg:flex items-center border border-gray-600 rounded-xl lg:rounded-full 
            px-10 md:px-20 lg:px-0 py-3 lg:py-0 -ml-28 md:-ml-32 lg:-ml-0
            bg-black bg-opacity-60 backdrop-blur-lg shadow-xl shadow-sky-800 lg:shadow-sky-950`}
        >
          {/* AnimatePresence component to animate the border of the active route */}
          <AnimatePresence initial={false}>
            <motion.div
              key={activeRoute}
              className={`absolute inset-y-0 lg:border-2 border-blue-400 rounded-full bg-transparent ${
                isMenuOpen ? "shadow-none" : "shadow-md shadow-sky-500"
              }`}
              initial={{ x: `${getRouteIndex(prevActiveRoute) * 100}%` }}
              animate={{ x: `${getRouteIndex(activeRoute) * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                width: `${100 / routes.length}%`,
                height: isMenuOpen ? "100%" : "auto",
              }}
            />
          </AnimatePresence>
          {/* Add the routes to the navigation bar as links */}
          {routes.map((route) => (
            <HashLink
              key={route.id}
              to={route.path}
              smooth={true}
              className={`relative z-10 flex items-center py-[0.625rem] md:py-2 lg:w-full
                hover:text-sky-300 transition-all duration-300 
                ${
                  activeRoute === route.id
                    ? "font-bold lg:font-normal text-sky-300"
                    : "text-gray-500"
                }`}
            >
              {/* Add a motion button to animate the route click */}
              <motion.button
                onClick={() => handleRouteClick(route.id)}
                className={`flex items-center w-full lg:justify-center ${
                  isMenuOpen ? "hover:visible" : ""
                }`}
              >
                <div className="mr-16 md:mr-20 lg:hidden text-xl">
                  {route.icon}
                </div>
                <span
                  className="absolute lg:relative ml-7 md:ml-8 lg:ml-0 -mx-5 md:-mx-14 lg:mx-0
                    text-sm md:text-base text-white hover:underline transition-all duration-300"
                >
                  {route.label}
                </span>
              </motion.button>
            </HashLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
