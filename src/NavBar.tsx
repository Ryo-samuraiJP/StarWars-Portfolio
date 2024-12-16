import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdCloseCircle, IoMdMenu } from "react-icons/io";
import { routesMenu } from "./routes/routesMenu";

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

  // Set large screen to display the menu by default on large screens
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  const handleRouteClick = (routeId: string) => {
    setPrevActiveRoute(activeRoute);
    setActiveRoute(routeId);
    setIsMenuOpen(false);
  };

  // Get the index of the route in the routesMenu array by the route ID
  const getRouteIndex = (routeId: string) =>
    routesMenu.findIndex((route) => route.id === routeId);

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

  // Add an event listener to handle the resize event and update the visibility of the navigation bar on large screens
  useEffect(() => {
    const handleResize = () => {
      const isLarge = window.innerWidth >= 1024;
      setIsLargeScreen(isLarge);
      if (isLarge) {
        setIsMenuOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Set the menu open by default on large screens
  useEffect(() => {
    if (isLargeScreen) {
      setIsMenuOpen(true);
    }
  }, [isLargeScreen]); // Update the menu open state when the large screen state changes

  return (
    <nav
      className={`fixed top-2 lg:-top-7 left-0 right-0 z-30 flex items-center justify-between px-4 lg:px-80 
        transition-transform duration-300 ease-in-out
        ${isVisible ? "translate-y-0" : "-translate-y-[700%]"}`}
    >
      {/* Logo as text */}
      <div
        className="text-2xl sm:text-3xl text-yellow-500 star-wars-font -space-y-2 lg:mt-9 lg:-mx-72 hover:cursor-pointer"
        // Scroll to the top of the page when the text logo is clicked
        onClick={() => {
          handleRouteClick("home");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
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
        {/* Toggle nav menu control */}
        {/* Animate the navigation bar with the AnimatePresence component */}
        <AnimatePresence>
          {(isMenuOpen || isLargeScreen) && (
            // Framer motion animation for the navigation bar
            <motion.div
              className={`absolute inset-x-0 flex lg:flex-row ${
                isMenuOpen || isLargeScreen ? "flex flex-col" : "hidden"
              } lg:flex items-center border border-gray-600 rounded-xl lg:rounded-full 
                py-3 lg:py-0 -ml-28 md:-ml-32 lg:-ml-28 lg:-mr-40 xl:-ml-20 xl:-mr-20 2xl:ml-10 2xl:mr-0
                bg-black bg-opacity-60 backdrop-blur-lg shadow-xl shadow-sky-800 lg:shadow-sky-950`}
              initial={{
                opacity: 0,
                x: 200,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              // Animate the exit transition to fade out and move to the right side
              exit={{
                opacity: 0,
                x: 200,
              }}
              transition={{
                duration: isLargeScreen ? 1.5 : 0.5,
              }}
            >
              {/* AnimatePresence component to animate the border of the active route */}
              <AnimatePresence initial={false}>
                {/* Framer motion animation for the border of the active route */}
                <motion.div
                  key={activeRoute}
                  className={`absolute inset-y-0 lg:border-2 border-blue-400 rounded-full bg-transparent shadow-md shadow-sky-500 ${
                    isMenuOpen
                      ? "shadow-none"
                      : "shadow-transparent lg:shadow-sky-500"
                  }`}
                  initial={{ x: `${getRouteIndex(prevActiveRoute) * 100}%` }}
                  animate={{ x: `${getRouteIndex(activeRoute) * 100}%` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  style={{
                    width: `${100 / routesMenu.length}%`,
                    height: isMenuOpen ? "100%" : "auto",
                  }}
                />
              </AnimatePresence>
              {/* Add the routesMenu to the navigation bar as links */}
              {routesMenu.map((route) => (
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default NavBar;
