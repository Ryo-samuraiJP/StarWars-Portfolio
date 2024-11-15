import { FaSearch } from "react-icons/fa";

interface ShiningButtonProps {
  icon?: React.ReactNode;
  text: string;
}

const ShiningButton: React.FC<ShiningButtonProps> = ({
  icon = <FaSearch />,
  text,
}) => {
  return (
    <div>
      <button className="inline-flex gap-[0.4rem] h-[2.25rem] px-[1rem] animate-shining-effect items-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-all duration-300 ease-in-out hover:outline-none hover:ring-1 hover:ring-slate-400 hover:ring-offset-2 hover:ring-offset-slate-50">
        {icon}
        {text}
      </button>
    </div>
  );
};

export default ShiningButton;
