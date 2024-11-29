import SkillsProgress from "../components/ui/SkillProgressBar";
import IconSphere from "../components/ui/IconSphere";

const TechSkillSection = () => {
  return (
    <section id="technical-skill">
      <hr className="mt-[5.5rem] mb-[4rem]" />
      <p className="text-lg my-[0.5rem] font-bold text-yellow-500">
        Episode II
      </p>
      <h1 className="text-yellow-500 star-wars-font">technical skills</h1>
      <p className="mt-[1rem] mb-[2.5rem] text-yellow-500">
        Skills cloud and primary technologies
      </p>
      <div className="w-full max-w-[72rem] mx-auto px-[1rem] md:px-[1.5rem]">
        <div className="flex flex-col lg:flex-row items-start lg:items-center">
          <div className="relative inline-flex">
            <div
              className="w-[50%] h-[50%] border absolute inset-0 m-auto blur-3xl -z-10 rounded-full bg-violet-800"
              aria-hidden="true"
            ></div>
            <div className="grow">
              <IconSphere />
            </div>
          </div>
          <div className="lg:w-1/3">
            <SkillsProgress />
          </div>
        </div>
        <div className="grow mb-[0.5rem]">
          <h2 className="text-xl text-slate-100 font-bold my-[1.25rem]"></h2>
        </div>
      </div>
    </section>
  );
};

export default TechSkillSection;
