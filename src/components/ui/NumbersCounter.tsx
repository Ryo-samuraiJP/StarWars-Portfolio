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
    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-y-6 sm:gap-x-16 lg:gap-x-52 xl:gap-0">
      <div className="flex items-center justify-end sm:justify-normal gap-[0.75rem] sm:gap-[2.5rem] md:gap-[0.5rem] sm:mb-7 xl:mb-0">
        <div className="font-bold tracking-tighter w-4 md:w-[3.5rem] text-left text-5xl sm:text-[3.2rem]">
          <NumbersCounterAnimation value={4} />+
        </div>
        <p className="w-[6.8rem] sm:w-[9rem] font-light text-sm md:text-base text-right sm:text-center">
          YEARS OF BUILDING SOFTWARE
        </p>
      </div>
      <div className="flex items-center justify-end sm:justify-normal gap-[2.75rem] sm:gap-[2.75rem] md:gap-[2.5rem] sm:mb-7 xl:mb-0 sm:ml-24 xl:ml-0">
        <div className="font-bold tracking-tighter w-6 text-left text-5xl sm:text-[3.2rem]">
          <NumbersCounterAnimation value={15} />
        </div>
        <p className="w-16 font-light text-sm md:text-base text-right sm:text-center mr-8 md:mr-0">
          CERTIFICATIONS
        </p>
      </div>
      <div className="flex items-center justify-end sm:justify-normal gap-[0.75rem] sm:gap-[1.75rem] md:gap-[0.375rem]">
        <div className="font-bold tracking-tighter w-8 md:w-[3.5rem] text-left text-5xl sm:text-[3.2rem]">
          <NumbersCounterAnimation value={postCount ?? 0} />
        </div>
        <p className="w-28 font-light text-sm md:text-base text-right sm:text-center">
          POSTS ON DEV COMMUNITY
        </p>
      </div>
      <div className="flex items-center justify-end sm:justify-normal gap-[2.25rem] sm:gap-[3.5rem] md:gap-[1.75rem]">
        <div className="font-bold tracking-tighter w-[6.25rem] md:w-32 text-left text-5xl sm:text-[3.2rem]">
          <NumbersCounterAnimation value={4400} />+
        </div>
        <p className="w-28 font-light text-sm md:text-base text-right sm:text-center">
          TOTAL POST VIEWS ON DEV
        </p>
      </div>
    </div>
  );
};

export default NumbersCounter;
