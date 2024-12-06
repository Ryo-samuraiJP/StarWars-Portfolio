import { useEffect, useState } from "react";
import { NumbersCounterAnimation } from "./numbers-counter-animation";

const NumbersCounter = () => {
  // State to store the number of posts on DEV
  const [postCount, setPostCount] = useState<number>();

  // Fetch DEV data to get the number of posts
  useEffect(() => {
    const fetchDevData = async () => {
      try {
        const res = await fetch(
          "https://dev.to/api/articles?username=ryoichihomma"
        );
        const data = await res.json();

        // console.log("Fetched data:", data); // Degugger

        setPostCount(data.length + 1);
      } catch (error) {
        console.error("Error fetching DEV data:", error);
      }
    };
    fetchDevData();
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-6 md:gap-x-16 lg:gap-0">
      <div className="flex items-center justify-end md:justify-normal gap-[0.75rem] md:gap-[0.5rem] md:mb-7 lg:mb-0">
        <div className="font-bold tracking-tighter w-4 md:w-[3.5rem] text-left text-5xl md:text-[3.2rem]">
          <NumbersCounterAnimation value={4} />+
        </div>
        <p className="w-[6.8rem] md:w-[9rem] font-light text-sm md:text-base text-right md:text-center">
          YEARS OF BUILDING SOFTWARE
        </p>
      </div>
      <div className="flex items-center justify-end md:justify-normal gap-[2.75rem] md:gap-[2.5rem] md:mb-7 lg:mb-0 md:ml-24 lg:ml-0">
        <div className="font-bold tracking-tighter w-[1.5rem] text-left text-5xl md:text-[3.2rem]">
          <NumbersCounterAnimation value={15} />
        </div>
        <p className="w-16 font-light text-sm md:text-base text-right md:text-center mr-8 md:mr-0">
          CERTIFICATIONS
        </p>
      </div>
      <div className="flex items-center justify-end md:justify-normal gap-[0.75rem] md:gap-[0.375rem]">
        <div className="font-bold tracking-tighter w-8 md:w-[3.5rem] text-left text-5xl md:text-[3.2rem]">
          <NumbersCounterAnimation value={postCount ?? 0} />
        </div>
        <p className="w-[7rem] font-light text-sm md:text-base text-right md:text-center">
          POSTS ON DEV COMMUNITY
        </p>
      </div>
      <div className="flex items-center justify-end md:justify-normal gap-[2.25rem] md:gap-[1.75rem]">
        <div className="font-bold tracking-tighter w-[6.25rem] md:w-[8rem] text-left text-5xl md:text-[3.2rem]">
          <NumbersCounterAnimation value={4400} />+
        </div>
        <p className="w-[7rem] font-light  text-sm md:text-base text-right md:text-center">
          TOTAL POST VIEWS ON DEV
        </p>
      </div>
    </div>
  );
};

export default NumbersCounter;
