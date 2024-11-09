import "./App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import ProjectTabs from "./ProjectTabs";
import ShootingStarsBackground from "./ShootingStarsBackground";

function App() {
  return (
    <>
      <ShootingStarsBackground />
      <NavBar />
      <Home />
      <ProjectTabs />
    </>
  );
}

export default App;
