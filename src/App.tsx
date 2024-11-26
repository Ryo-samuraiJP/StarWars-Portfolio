import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Home from "./sections/Home";
import NavBar from "./NavBar";
import ShootingStarsBackground from "./ShootingStarsBackground";
import TechSkillSection from "./sections/TechSkillSection";
import ProjectSection from "./sections/ProjectSection";
import ServiceSection from "./sections/ServiceSection";
import CredentialSection from "./sections/CredentialSection";
import TechBlogSection from "./sections/TechBlogSection";
import ContactSection from "./sections/ContactSection";

function App() {
  return (
    <>
      <ShootingStarsBackground />
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
    </>
  );
}

export default App;
