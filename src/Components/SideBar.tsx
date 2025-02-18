import { RxHamburgerMenu } from "react-icons/rx";
import { sideBarIcon } from "../Content/Index";
import headerLogo from "../assets/technic.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AccordionItem } from "./Accordion/AccordionItem";

import { SideBarButton } from "./SideBarComponent/SideBarButton";
import { GrDashboard } from "react-icons/gr";
import { BiArrowBack } from "react-icons/bi";
import { useState } from "react";
type SideBarProps = {
  isOpen: boolean;
};
type TActivButton =
  | "Dashboard"
  | "People"
  | "Attendance"
  | "Employee"
  | "Assign Projects"
  | "Todo"
  | "Sale"
  | "manageExpense"
  | "Chat"
  | "monthlyAccount"
  | "configureTime"
  | "Accounts"
  | "Reports";
export const SideBar = ({ isOpen }: SideBarProps) => {
  const [dropDown, setDropDown] = useState(Boolean);
  const handlerClick = () => {
    setDropDown((prev) => !prev);
  };
  return (
    <div
      className={`${
        isOpen ? "w-16" : "w-56"
      } bg-indigo-500  overflow-y-auto transition-all duration-300 ease-in-out flex flex-col items-center py-4 shadow-lg 
     `}
    >
      {/* Sidebar Icons */}
      <div className="mt-6 w-full flex flex-col">
        {sideBarIcon.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-white text-lg py-3 px-4 rounded-lg mx-2 transition-all duration-300 hover:bg-indigo-400 hover:scale-105 cursor-pointer"
          >
            <span className="text-2xl">{item.icon}</span>
            {!isOpen && (
              <span className="text-sm font-semibold">{item.btnName}</span>
            )}
          </div>
        ))}
      </div>

      {/* <AccordionItem title="Section 2" icon={<SiReact />}>
        <ul>
          <li>Item X</li>
          <li>Item Y</li>
          <li>Item Z</li>
          <li>Item W</li>
        </ul>
      </AccordionItem> */}
      <SideBarButton
        isOpen={isOpen}
        icon={<GrDashboard size={25} />}
        title={"Dashboard"}
        arrowIcon={<BiArrowBack />}
        handlerClick={handlerClick}
      />
      {dropDown && (
        <AccordionItem>
          <ul>
            <li>Item A</li>
            <li>Item B</li>
          </ul>
        </AccordionItem>
      )}
    </div>
  );
};
