import { IconCloud } from "./components/ui/skills-cloud";

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
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={icons} />
    </div>
  );
};

export default IconSphere;
