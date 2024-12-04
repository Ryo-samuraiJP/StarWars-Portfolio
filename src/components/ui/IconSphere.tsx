import { IconCloud } from "./skills-cloud";

const icons = [
  "html5",
  "css3",
  "markdown",
  "tailwindcss",
  "javascript",
  "ejs",
  "typescript",
  "react",
  "vite",
  "npm",
  "swiper",
  "scrollreveal",
  "nodedotjs",
  "express",
  "postman",
  "python",
  "flask",
  "c",
  "java",
  "axios",
  "mongodb",
  "oracle",
  "mysql",
  "vercel",
  "netlify",
  "render",
  "git",
  "github",
  "githubactions",
  "uml",
];

const IconSphere = () => {
  return (
    <div className="relative md:max-w-md lg:max-w-lg md:px-20 pb-20 pt-8 cursor-pointer">
      <IconCloud iconSlugs={icons} />
    </div>
  );
};

export default IconSphere;
