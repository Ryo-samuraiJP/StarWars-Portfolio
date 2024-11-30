import Typewriter from "typewriter-effect";
import DownloadButton from "../components/ui/DownloadButton";
import ProfileEffect from "../components/ui/ProfileEffect";
import ScrollDown from "../components/ui/ScrollDown";
import SocialIcons from "../components/ui/SocialIcons";
import NumbersCounter from "../components/ui/NumbersCounter";

const Home = () => {
  return (
    <section id="home" className="flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center w-[90%]">
        <div className="flex-1 p-[1rem] mt-[4rem]">
          <div className="space-y-4">
            <div className="flex font-medium text-4xl text-left text-gray-200">
              <p>Hi, I'm Ryoichi&nbsp;</p>
              <p className="text-shadow-neon font-bold text-white">Rio</p>
              <p>&nbsp;Homma</p>
            </div>
            <div className="flex flex-row text-6xl text-left font-bold">
              <div className="text-white text-shadow-neon star-wars-font">
                <Typewriter
                  options={{
                    strings: [
                      "software engineer",
                      "web developer",
                      "ai evaluator",
                    ],
                    delay: 50,
                    deleteSpeed: 30,
                    loop: true,
                    autoStart: true,
                  }}
                />
              </div>
            </div>
            <p className="w-[85%] py-[1.25rem] text-left">
              While I specialize in front-end development with React.js,
              TypeScript/JavaScript, and Tailwind CSS, I am actively expanding
              my expertise to full-stack development by enhancing my skills in
              the MERN stack. As a recent CS graduate in Canada, I seek
              opportunities to work with talented teams in building secure and
              efficient software solutions. I am passionate about learning new
              technologies and contributing to organizations by leveraging my
              extensive expertise in web development, teamwork, and effective AI
              prompting. Additionally, I am a huge MLB fan who is interested in
              sports science and baseball data analytics!
            </p>
            <div className="flex flex-row items-center gap-[3rem]">
              <DownloadButton />
              <SocialIcons />
            </div>
          </div>
        </div>
        <div className="flex mt-[4rem] justify-center">
          <ProfileEffect />
        </div>
      </div>
      <div className="flex flex-wrap items-center pt-[2rem] pb-[3rem]">
        <NumbersCounter />
      </div>
      <ScrollDown />
    </section>
  );
};

export default Home;
