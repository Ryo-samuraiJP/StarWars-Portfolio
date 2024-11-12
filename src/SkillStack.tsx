import SkillsProgress from "./SkillProgressBar";
import IconSphere from "./IconSphere";

const SkillStack = () => {
  return (
    <div className="w-full max-w-[72rem] mx-auto px-[1rem] md:px-[1.5rem]">
      <div className="flex flex-col lg:flex-row items-start lg:items-center">
        <div className="relative inline-flex">
          <div
            className="w-[50%] h-[50%] border absolute inset-0 m-auto blur-3xl -z-10 rounded-full bg-indigo-700"
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
  );
};

export default SkillStack;
