import Typewriter from "typewriter-effect";
import DownloadButton from "./components/ui/DownloadButton";
import ProfileEffect from "./components/ui/ProfileEffect";
import ProfileNumbers from "./components/ui/ProfileNumbers";
import ScrollDown from "./components/ui/ScrollDown";
import SocialButtons from "./components/ui/SocialButtons";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        <div className="flex-1 p-4 mt-10">
          <div className="space-y-4">
            <div className="font-bold text-4xl text-left">
              Hi, I'm Rio (Ryoichi)
            </div>
            <div className="text-6xl text-left">
              <Typewriter
                options={{
                  strings: [
                    "Software Engineer",
                    "Full-Stack Developer",
                    "AI Evaluator",
                    "Continuous Learner",
                  ],
                  delay: 50,
                  deleteSpeed: 30,
                  loop: true,
                  autoStart: true,
                }}
              />
            </div>
            <p className="text-left py-5 w-[101%]">
              I specialize in the MERN stack and actively seek opportunities to
              work with talented teams. I am passionate about learning new
              technologies and eager to contribute to building secure and
              efficient software solutions by leveraging my extensive expertise
              in web development, collaboration, and effective AI prompting. As
              a big fan of MLB, I am also interested in sports science and
              baseball analytics!
            </p>
            <div className="flex items-center space-x-10">
              <DownloadButton />
              <SocialButtons />
            </div>
          </div>
        </div>
        <div className="flex-1 mt-14 flex justify-center">
          <ProfileEffect />
        </div>
      </div>
      <div className="flex flex-wrap items-center text-left space-x-32 py-12">
        <ProfileNumbers />
      </div>
      <ScrollDown />
    </div>
  );
};

export default Home;
