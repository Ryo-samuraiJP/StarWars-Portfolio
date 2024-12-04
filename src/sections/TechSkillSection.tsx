import SkillsProgress from "../components/ui/SkillProgressBar";
import IconSphere from "../components/ui/IconSphere";

const TechSkillSection = () => {
  return (
    <section id="technical-skill">
      <hr className="my-16" />
      <p className="md:text-xl my-2 font-bold font-serif text-yellow-500">
        Episode II
      </p>
      <p className="text-yellow-500 star-wars-font text-[1.75rem] md:text-[3rem] lg:text-[3.25rem]">
        technical skills
      </p>
      <p className="mt-4 mb-6 md:mb-10 text-yellow-500 text-sm md:text-base">
        Skills cloud and primary technologies
      </p>
      <div className="w-full max-w-[72rem] mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center">
          <div className="relative inline-flex md:ml-24 lg:-ml-10 -mt-10 lg:mt-0">
            <div
              className="w-[55%] h-[55%] lg:w-[50%] lg:h-[50%] border absolute inset-0 m-auto blur-3xl -z-10 rounded-full bg-violet-800"
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
      </div>
    </section>
  );
};

export default TechSkillSection;
