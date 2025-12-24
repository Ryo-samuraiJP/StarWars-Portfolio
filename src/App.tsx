import "./styles/App.css";
import { BrowserRouter } from "react-router-dom";
import Home from "./sections/Home/Home";
import NavBar from "./layouts/NavBar";
import ShootingStarsBackground from "./components/ShootingStarsBackground";
import TechSkillSection from "./sections/TechSkill/TechSkillSection";
import ProjectSection from "./sections/Project/ProjectSection";
import ServiceSection from "./sections/Service/ServiceSection";
import CredentialSection from "./sections/Credential/CredentialSection";
import TechBlogSection from "./sections/TechBlog/TechBlogSection";
import ContactSection from "./sections/Contact/ContactSection";
import Footer from "./layouts/Footer";
import { useEffect, useState } from "react";
import LoadingScreen from "./loadingScreen";

function App() {
  // Set that the loading screen is initially visible
  const [isLoading, setIsLoading] = useState(true);

  // Set that the loading screen is visible before the main content is displayed
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 8500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ShootingStarsBackground />
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="overflow-x-hidden">
          <BrowserRouter>
            <NavBar />
            <section id="home">
              <Home />
            </section>
            <section id="project">
              <ProjectSection />
            </section>
            <section id="skill">
              <TechSkillSection />
            </section>
            <section id="service">
              <ServiceSection />
            </section>
            <section id="credential">
              <CredentialSection />
            </section>
            <section id="blog">
              <TechBlogSection />
            </section>
            <section id="contact">
              <ContactSection />
            </section>
          </BrowserRouter>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
