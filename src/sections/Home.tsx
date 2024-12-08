import Typewriter from "typewriter-effect";
import DownloadButton from "../components/ui/DownloadButton";
import ProfileEffect from "../components/ui/ProfileEffect";
import ScrollDown from "../components/ui/ScrollDown";
import SocialIcons from "../components/ui/SocialIcons";
import NumbersCounter from "../components/ui/NumbersCounter";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <section id="home" className="flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center w-[90%]">
        <div className="flex mt-16 md:mt-24 lg:mt-20 justify-center md:order-2 lg:mr-10 2xl:mr-20">
          <ProfileEffect />
        </div>
        <div className="flex-1 p-4 mt-16">
          <div className="space-y-3 md:space-y-4 md:-mr-36">
            <motion.div
              className="flex font-medium font-serif -mt-14 md:mt-0 -mb-3 md:mb-0 text-lg md:text-4xl justify-center md:justify-start text-gray-200"
              initial={{
                opacity: 0,
                x: isMobile ? 0 : -200,
                y: isMobile ? 100 : 0,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <p>Hi, I'm&nbsp;</p>
              <p className="text-shadow-neon font-bold text-white">Rio</p>
              <p>&nbsp;based in Canada</p>
            </motion.div>
            <motion.div
              className="flex flex-row -mx-16 md:mx-0 text-3xl md:text-[2.5rem] lg:text-6xl justify-center md:justify-start
              text-white text-shadow-neon star-wars-font"
              initial={{
                opacity: 0,
                x: isMobile ? 0 : -200,
                y: isMobile ? 100 : 0,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              transition={{ delay: 0.25, duration: 1 }}
              viewport={{ once: true }}
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
            </motion.div>
            <motion.p
              className="-mx-9 md:mx-0 md:w-[70%] lg:w-[75%] 2xl:w-[70%] md:py-5 text-center text-sm md:text-base md:text-left font-thin"
              initial={{
                opacity: 0,
                x: isMobile ? 0 : -200,
                y: isMobile ? 100 : 0,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
            >
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
            </motion.p>
            <div className="flex flex-col pt-4 md:pt-0 md:flex-row items-center gap-10 md:gap-[4.5rem] lg:gap-12">
              <DownloadButton />
              <motion.div
                className="-mx-12 lg:mx-0 justify-start"
                initial={{
                  opacity: 0,
                  y: 100,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{ delay: isMobile ? 0 : 0.5, duration: 1.5 }}
                viewport={{ once: true }}
              >
                <SocialIcons />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center pt-8 pb-12">
        <NumbersCounter />
      </div>
      <ScrollDown />
    </section>
  );
};

export default Home;
