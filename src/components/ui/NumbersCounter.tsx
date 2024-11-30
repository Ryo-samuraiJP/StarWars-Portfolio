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
    <div className="grid grid-cols-4">
      <div className="flex items-center gap-[0.5rem]">
        <h1 className="font-bold tracking-tighter w-[3.5rem] text-left">
          <NumbersCounterAnimation value={4} />+
        </h1>
        <p className="w-[5rem] font-light">YEARS OF BUILDING SOFTWARE</p>
      </div>
      <div className="flex items-center gap-[2.5rem]">
        <h1 className="font-bold tracking-tighter w-[1.5rem] text-left">
          <NumbersCounterAnimation value={15} />
        </h1>
        <p className="w-[5rem] font-light">CERTIFICATIONS</p>
      </div>
      <div className="flex items-center gap-[0.375rem]">
        <h1 className="font-bold tracking-tighter w-[3.5rem] text-left">
          <NumbersCounterAnimation value={postCount ?? 0} />
        </h1>
        <p className="w-[7rem] font-light">POSTS ON DEV COMMUNITY</p>
      </div>
      <div className="flex items-center gap-[1.75rem]">
        <h1 className="font-bold tracking-tighter w-[8rem] text-left">
          <NumbersCounterAnimation value={4400} />+
        </h1>
        <p className="w-[7rem] font-light">TOTAL POST VIEWS ON DEV</p>
      </div>
    </div>
  );
};

export default NumbersCounter;
