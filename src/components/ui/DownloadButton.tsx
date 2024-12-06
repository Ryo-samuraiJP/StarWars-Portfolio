import { FiDownload } from "react-icons/fi";

const DownloadButton = () => {
  return (
    <div className="relative w-[13.125rem] h-[3.125rem] cursor-pointer flex items-center border-2 border-gray-400 shadow-lg shadow-neon rounded-full group">
      <a
        href="https://drive.usercontent.google.com/u/0/uc?id=1yGdq2gFQcFMqFplehfuVYZ2vOXEhnQMz&export=download"
        download="Rio_Ryoichi_Resume.pdf"
        className="absolute w-full h-full top-0 left-0 z-10"
      ></a>
      <button className="w-full h-full flex items-center px-5 relative overflow-hidden rounded-full focus:outline-none ">
        <span className="left-0 text-left text-white text-shadow-neon font-semibold transform transition-all duration-300 group-hover:text-transparent">
          Download Resume
        </span>
        <span className="absolute right-0 h-full w-10 bg-gray-200 flex items-center justify-center transition-all duration-300 group-hover:w-full">
          <FiDownload className="fill-gray text-xl text-blue-800 font-black" />
        </span>
      </button>
    </div>
  );
};

export default DownloadButton;
