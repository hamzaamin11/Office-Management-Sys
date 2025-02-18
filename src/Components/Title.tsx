import React from "react";
import { RxCross1 } from "react-icons/rx";
type TitleProps = {
  children: React.ReactNode;
};

export const Title = ({ children }: TitleProps) => {
  return (
    <div>
      <div className="flex items-center justify-between p-3 text-gray-800 font-sans">
        <span className="font-semibold">{children}</span>
        <span className="hover:cursor-pointer">
          <RxCross1 size={25} />
        </span>
      </div>
      <div className="border-b mx-1 border-gray-300"></div>
    </div>
  );
};
