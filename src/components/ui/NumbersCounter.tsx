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
    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-y-6 md:gap-x-16 lg:gap-x-52 xl:gap-0">
      <div className="flex items-center justify-end sm:justify-normal gap-x-4 sm:gap-x-11 md:gap-x-3 xl:gap-x-0 sm:mb-7 xl:mb-0">
        <div className="font-bold tracking-tighter w-4 md:w-[3.5rem] text-left text-5xl sm:text-[3.2rem]">
          <NumbersCounterAnimation value={4} />+
        </div>
        <p className="w-[6.8rem] sm:w-[9rem] lg:w-40 font-light text-sm md:text-base text-right sm:text-center">
          YEARS OF BUILDING SOFTWARE
        </p>
      </div>
      <div className="flex items-center justify-end sm:justify-normal gap-x-12 sm:gap-x-12 md:gap-x-11 lg:gap-x-14 xl:gap-x-11 sm:mb-7 xl:mb-0 sm:ml-24 xl:ml-0">
        <div className="font-bold tracking-tighter w-6 text-left text-5xl sm:text-[3.2rem]">
          <NumbersCounterAnimation value={15} />
        </div>
        <p className="w-16 font-light text-sm md:text-base text-right sm:text-center mr-8 md:mr-0">
          CERTIFICATIONS
        </p>
      </div>
      <div className="flex items-center justify-end sm:justify-normal gap-x-6 sm:gap-x-8 md:gap-x-3.5 lg:gap-x-5 xl:gap-x-0">
        <div className="font-bold tracking-tighter w-8 md:w-[3.5rem] text-left text-5xl sm:text-[3.2rem]">
          <NumbersCounterAnimation value={postCount ?? 0} />
        </div>
        <p className="w-28 lg:w-32 font-light text-sm md:text-base text-right sm:text-center">
          POSTS ON DEV COMMUNITY
        </p>
      </div>
      <div className="flex items-center justify-end sm:justify-normal gap-x-12 sm:gap-x-14 md:gap-x-8 lg:gap-x-14 xl:gap-x-8">
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
