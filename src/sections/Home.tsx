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
        <div className="flex mt-[4rem] justify-center md:order-2 lg:mr-10 2xl:mr-20">
          <ProfileEffect />
        </div>
        <div className="flex-1 p-[1rem] mt-[4rem]">
          <div className="space-y-3 md:space-y-4 md:-mr-36">
            <div className="flex font-medium -mt-14 md:mt-0 text-lg md:text-4xl justify-center md:justify-start text-gray-200">
              <p>Hi, I'm&nbsp;</p>
              <p className="text-shadow-neon font-bold text-white">Rio</p>
              <p>&nbsp;based in Canada</p>
            </div>
            <div
              className="flex flex-row -mx-16 md:mx-0 text-3xl md:text-[2.5rem] lg:text-6xl justify-center md:justify-start
              text-white text-shadow-neon star-wars-font"
            >
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
            <p className="-mx-9 md:mx-0 md:w-[70%] lg:w-[75%] 2xl:w-[70%] md:py-[1.25rem] text-center md:text-left">
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
            <div className="flex flex-col pt-4 md:pt-0 md:flex-row items-center gap-[2.5rem] md:gap-[4.5rem] lg:gap-[3rem]">
              <DownloadButton />
              <div className="-mx-12 lg:mx-0 justify-start">
                <SocialIcons />
              </div>
            </div>
          </div>
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
