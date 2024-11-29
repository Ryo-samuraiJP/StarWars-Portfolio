import Typewriter from "typewriter-effect";
import DownloadButton from "../components/ui/DownloadButton";
import ProfileEffect from "../components/ui/ProfileEffect";
import ProfileNumbers from "../components/ui/ProfileNumbers";
import ScrollDown from "../components/ui/ScrollDown";
import FooterIcons from "../components/ui/SocialIcons";

const Home = () => {
  return (
    <section id="home" className="flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center w-[90%]">
        <div className="flex-1 p-[1rem] mt-[2.5rem]">
          <div className="space-y-4">
            <p className="flex font-medium text-4xl text-left text-white">
              <p>Hi, I'm&nbsp;</p>
              <p className="text-shadow-neon">Rio (Ryoichi)</p>
            </p>
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
              TypeScript / JavaScript, and Tailwind CSS, I am actively expanding
              my expertise to full-stack development by enhancing my skills in
              the MERN stack. As a recent CS graduate in BC, Canada, I seek
              opportunities to collaborate with talented teams in building
              secure and efficient software solutions. I am passionate about
              learning hands-on technical skills and contributing to
              organizations by leveraging my extensive expertise in web
              development, teamwork, and effective AI prompting. Additionally, I
              am a huge fan of MLB with a keen interest in sports science and
              baseball analytics!
            </p>
            <div className="flex flex-row items-center gap-[3rem]">
              <DownloadButton />
              <FooterIcons />
            </div>
          </div>
        </div>
        <div className="flex mt-[3.5rem] justify-center">
          <ProfileEffect />
        </div>
      </div>
      <div className="flex flex-wrap items-center text-left gap-[6rem] py-[3rem]">
        <ProfileNumbers />
      </div>
      <ScrollDown />
    </section>
  );
};

export default Home;
