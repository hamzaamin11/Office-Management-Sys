import { BiUser } from "react-icons/bi";
import { FaProjectDiagram } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";
import Card from "./DetailCards/Card";
import { NewProject } from "./MenuCards/NewProject";
import { WorkingProject } from "./MenuCards/WorkingProject";
import { CompleteProject } from "./MenuCards/CompleteProject";
export const MainContent = () => {
  return (
    <div className="w-full h-full overflow-y-auto ">
      <form className="flex items-center justify-between mx-5 mt-4 gap-4 ">
        <div className="flex flex-col bg-white  w-full rounded-lg shadow-lg space-y-4">
          <label className="text-gray-700 font-medium mb-1 p-2 font-serif">
            Project Category
          </label>
          <select className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition font-serif">
            <option>Select Category</option>
            <option>Web Application</option>
            <option>Blog</option>
            <option>Graphic Designing</option>
            <option>Digital Marketing</option>
            <option>Desktop Software</option>
          </select>
        </div>
        <div className=" font-serif  w-full rounded-lg  bg-white shadow-lg space-y-4 p-2">
          {/* "To" Field */}

          <label className="text-gray-700 font-medium mb-1">To</label>
          <input
            type="date"
            className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>
        {/* "From" Field */}
        <div className="font-serif  rounded-lg shadow-lg w-full  bg-white space-y-4 p-2">
          <label className="text-gray-700 font-medium mb-1">From</label>
          <input
            type="date"
            className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>
      </form>
      <div className="flex justify-between gap-4 mx-4">
        <NewProject />
        <WorkingProject />
        <CompleteProject />
      </div>
      <div className="flex items-center justify-between m-4">
        <Card
          titleName="Users"
          totalUser="TotalUser"
          totalNumber={53}
          icon={<BiUser />}
          style="bg-indigo-500 "
        />
        <Card
          titleName="Total Projects"
          totalUser="TotalProjects"
          totalNumber={43}
          icon={<FaProjectDiagram />}
          style="bg-blue-500 "
        />
        <Card
          titleName="Assigned Projects"
          totalUser="TotalProjects"
          totalNumber={93}
          icon={<FaProjectDiagram />}
          style="bg-sky-500 "
        />
        <Card
          titleName="Todo's"
          totalUser="TotalTodo's"
          totalNumber={193}
          icon={<LuListTodo />}
          style="bg-indigo-800"
        />
      </div>
    </div>
  );
};
