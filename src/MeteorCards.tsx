// import { skillsData } from "./skillsData";
import { Meteors } from "./components/ui/meteros";
import IconSphere from "./IconSphere";

const MeteorCards = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* {skillsData.map((categoryData, index) => ( */}
      <div
        // key={index}
        className="relative shadow-xl border-2 px-[1.5em] border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] font-nunito flex justify-center items-left flex-col backdrop-blur-[12px] overflow-hidden transition-all duration-300 cursor-pointer hover:transform hover:-translate-y-2 hover:shadow-lg"
      >
        {/* <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-2 w-2 text-gray-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>
        </div> */}

        <h1 className="font-bold text-xl text-white mb-4 relative z-50">
          {/* {categoryData.category} */}
        </h1>

        <IconSphere />

        <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
          Explore
        </button>

        <Meteors number={20} />
      </div>
      {/* ))} */}
    </div>
  );
};

export default MeteorCards;
