import { FaLinkedin, FaGithub, FaYoutube, FaDev } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { SocialIconsAnimation } from "./social-icons-animation";

const iconData = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin className="size-full" />,
    hoverColor: "text-[#0A66C2]",
    href: "https://www.linkedin.com/in/ryoichihomma/",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="size-full" />,
    hoverColor: "text-[#6E5494]",
    href: "https://github.com/Ryo-samuraiJP",
  },
  {
    name: "DEV",
    icon: <FaDev className="size-full" />,
    hoverColor: "text-[#0A0A0A]",
    href: "https://dev.to/ryoichihomma",
  },
  {
    name: "YouTube",
    icon: <FaYoutube className="size-full" />,
    hoverColor: "text-[#FF0000]",
    href: "https://www.youtube.com/@rh.project_gallery",
  },
  {
    name: "Email",
    icon: <IoMdMail className="size-full" />,
    hoverColor: "text-[#00B2FF]",
    href: "mailto:r.homma.inbox@gmail.com",
  },
];

const SocialIcons = () => {
  return (
    <div>
      <SocialIconsAnimation items={iconData} />
    </div>
  );
};

export default SocialIcons;
