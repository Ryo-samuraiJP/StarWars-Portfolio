const ScrollDown = () => {
  return (
    <div className="relative w-[30px] h-[50px] ml-[15px] border-[3px] border-black rounded-[50px] mb-4 cursor-pointer">
      <div className="absolute bottom-[30px] left-1/2 w-[6px] h-[6px] ml-[-3px] bg-black rounded-full animate-scrolldown shadow-[0px_-5px_3px_1px_rgba(42,84,112,0.4)]"></div>
      <div className="flex flex-col items-center mt-[48px] pt-[6px]">
        <div className="w-[10px] h-[10px] border-[3px] border-gray-900 border-t-0 border-l-0 rotate-45 animate-arrow"></div>
        <div className="w-[10px] h-[10px] border-[3px] border-gray-900 border-t-0 border-l-0 rotate-45 animate-arrow-delay"></div>
      </div>
    </div>
  );
};

export default ScrollDown;
