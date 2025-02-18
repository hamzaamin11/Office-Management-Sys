import { ReactNode } from "react";

type CardProps = {
  titleName: string;
  totalUser: string;
  totalNumber: number;
  icon: ReactNode;
  style: ReactNode;
};
const Card = ({
  titleName,
  totalNumber,
  totalUser,
  icon,
  style,
}: CardProps) => {
  return (
    <div
      className={` ${style} w-full h-44 font-serif  shadow-lg rounded-xl border border-gray-200 flex flex-col items-center justify-center p-4 transition-all duration-300 hover:shadow-xl hover:scale-105 mx-4`}
    >
      {/* Icon & Title */}
      <div className="flex items-center gap-2 bg-white bg-opacity-20 p-2 rounded-full">
        {icon}
      </div>
      <h2 className="text-lg font-semibold text-white mt-2">{titleName}</h2>

      {/* Total Users */}
      <h1 className="text-xl font-bold text-white mt-2">{totalUser}</h1>
      <p className="text-2xl font-bold text-white">{totalNumber}</p>

      {/* More Info Button */}
      <button className="mt-3 px-4 py-2 bg-white text-indigo-600 text-sm font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-gray-200 hover:shadow-lg">
        More Info
      </button>
    </div>
  );
};

export default Card;
