import loginAvatar from "../assets/Avatar.png";
import { RxHamburgerMenu } from "react-icons/rx";
import headerLogo from "../assets/technic.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiBellOn } from "react-icons/ci";
import React from "react";

export interface IHeaderProps extends React.ComponentPropsWithoutRef<"div"> {
  isOpen: boolean;
  toggleSideBar: () => void;
}

export const Header = ({ isOpen, toggleSideBar }: IHeaderProps) => {
  return (
    <div className="bg-indigo-500 max-w-full h-14 px-2 relative  w-full">
      <div className="flex items-center justify-between ">
        <div className="flex gap-2 items-center ml-4">
          {!isOpen && (
            <div className="w-32">
              <img src={headerLogo} alt="logo" className="w-28" />
            </div>
          )}

          {/* Toggle Button */}
          <button
            onClick={toggleSideBar}
            className="p-2 rounded-full shadow-md hover:bg-gray-200 hover:text-indigo-400 text-white transition-all duration-300 mt-4 flex"
          >
            {isOpen ? <BsThreeDotsVertical /> : <RxHamburgerMenu />}
          </button>
        </div>
        <h1 className="text-white text-2xl  font-sans">
          Welcome To Technic Mentors(Office Management System)
        </h1>

        <div className="flex items-center justify-center gap-2">
          <span className="relative flex items-center justify-center size-6">
            {/* Ping Animation */}
            <span className="absolute size-full animate-ping rounded-full bg-sky-400 opacity-75"></span>

            {/* Notification Bell */}
            <CiBellOn size={25} className="relative text-white" />

            {/* Small Indicator Badge */}
            <span className="absolute top-0 right-0 size-3 rounded-full bg-sky-500 border-2 border-white"></span>
          </span>

          <div className="text-xs text-white mx-0.5 font-sans">
            <p className="">Hamza Amin</p>
            <h4 className="">Admin</h4>
          </div>
          <img
            src={loginAvatar}
            alt="login"
            className="w-11 hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
