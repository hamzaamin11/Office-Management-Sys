import { InputField } from "../Components/InputField";
import Logo from "../assets/Logo.png";
import officeTeam from "../assets/OMS.jpg";
import { useState } from "react";
const initialState = {
  email: "",
  password: "",
};
export const Login = () => {
  const [formData, setFormData] = useState(initialState);

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value.trim() });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("formData", formData);
    setFormData(initialState);
  };

  return (
    <div>
      <div className=" bg-indigo-500 flex items-center justify-between  ">
        <div className="p-8 pl-12">
          <img src={Logo} alt="Logo" className="w-44" />
          <h1 className="text-5xl text-white font-serif">Login to</h1>
          <h2 className="text-2xl text-white font-serif">
            Technic Mentors (Office Management System)
          </h2>
          <p className="text-white font-serif">
            The Office Management System (OMS) is an integrated software
            platform designed to streamline and automate daily office
            operations.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="shadow bg-white p-6 h-96 w-[28rem] absolute right-24 top-52 rounded-lg text-black  "
        >
          <h2 className="text-2xl font-serif ">
            Welcome to <span className="font-semibold ">Technic Mentors</span>
            (OMS)
          </h2>
          <h1 className="text-5xl font-serif">Login now</h1>
          <InputField
            type="email"
            labelName="Enter your Email"
            placeHolder="Abc@gmail.com..."
            name={"email"}
            handlerChange={handlerChange}
            inputVal={formData.email}
          />
          <InputField
            type="password"
            labelName="Enter your Password"
            placeHolder="Password..."
            name={"password"}
            handlerChange={handlerChange}
            inputVal={formData.password}
          />
          <button className="w-full font-serif border rounded-md p-2 bg-indigo-500 text-white cursor-pointer mt-4 hover:opacity-90">
            Log In
          </button>
        </form>
      </div>
      <img src={officeTeam} alt="office Team" className="h-[24rem] pl-20" />
    </div>
  );
};
