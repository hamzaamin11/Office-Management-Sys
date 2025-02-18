import { useState } from "react";
import { Header } from "../Components/Header";

import { SideBar } from "../Components/SideBar";
import TodoCard from "../Components/UserDashboardCard/TodoCard";
import AssignProject from "../Components/UserDashboardCard/AssignProjectCard";
import { AddUser } from "../Components/FormComponent/AddUser";
import { AddCustomer } from "../Components/FormComponent/AddCustomerForm";

// import { RxCross1 } from "react-icons/rx";

export const UserDashboard = () => {
  const [isOpen, setIsopen] = useState(false);

  // const [darkMood, setDarkMood] = useState(false);

  // const toggleDarkMood = () => {
  //   setDarkMood((prev) => !prev);
  // };

  const toggleSideBar = () => {
    setIsopen((prev) => !prev);
  };
  return (
    <div>
      <Header />
      <div className="flex">
        <SideBar isOpen={isOpen} toggleSideBar={toggleSideBar} />
        <div className="flex items-center justify-center w-full h-full">
          <TodoCard />
          <AssignProject />
        </div>
      </div>
      <AddUser />
      <AddCustomer />
    </div>
  );
};
