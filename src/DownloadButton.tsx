import { FiDownload } from "react-icons/fi";

const DownloadButton = () => {
  return (
    <div className="relative w-[210px] h-[50px] cursor-pointer flex items-center border-2 border-gray-800 shadow-[4px_4px] shadow-gray-800 bg-gray-200 rounded-full group">
      <a
        href="https://drive.usercontent.google.com/u/0/uc?id=1yGdq2gFQcFMqFplehfuVYZ2vOXEhnQMz&export=download"
        download="Rio_Ryoichi_Resume.pdf"
        className="absolute w-full h-full top-0 left-0 z-10"
      ></a>
      <button className="w-full h-full flex items-center relative overflow-hidden focus:outline-none rounded-full">
        <span className="left-0 text-left text-gray-800 font-semibold transform transition-all duration-300 group-hover:text-transparent">
          Download Resume
        </span>
        <span className="absolute right-0 h-full w-[40px] bg-gray-300 flex items-center justify-center transition-all duration-300 group-hover:w-full">
          <FiDownload className="fill-gray text-lg" />
        </span>
      </button>
    </div>
  );
};

export default DownloadButton;
