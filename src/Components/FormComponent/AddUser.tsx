import { useState } from "react";
import { InputField } from "../InputField";
import { Title } from "../Title";
import { OptionField } from "../OptionField";
import { AddButton } from "../CustomButtons/AddButton";
import { CancelBtn } from "../CustomButtons/CancelBtn";
const currentDate = new Date().toISOString().split("T")[0];
const initialState = {
  name: "",
  email: "",
  contact: "",
  cnic: "",
  address: "",
  date: currentDate,
  password: "",
  confirmPassword: "",
  role: "",
  image: "",
};

export const AddUser = () => {
  const [userData, setUserData] = useState(initialState);
  // const [showTime, setShowTime] = useState("");
  // setInterval(() => {
  //   const getTime = new Date().toLocaleTimeString("en-US", {
  //     hour: "2-digit",
  //     minute: "2-digit",
  //     second: "2-digit",
  //     hour12: true,
  //   });
  //   setShowTime(getTime);
  // }, 1000);
  const handlerChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value.trim() });
  };

  const handlerSubmitted = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents page reload on form submission
    console.log("Form submitted!", userData);
  };
  return (
    <div>
      <div className="w-[42rem] h-[29rem] bg-white mx-auto rounded-xl border border-indigo-500 ">
        <form onSubmit={handlerSubmitted}>
          <Title>Add User</Title>
          <div className="mx-2 grid grid-cols-2 flex-wrap gap-3  ">
            <InputField
              labelName="Name*"
              placeHolder="Enter the Name"
              type="text"
              name="name"
              handlerChange={handlerChange}
              inputVal={userData.name}
            />
            <InputField
              labelName="Email*"
              placeHolder="abc123@gmail.com"
              type="email"
              name="email"
              handlerChange={handlerChange}
              inputVal={userData.email}
            />
            <InputField
              labelName="Phone Number*"
              placeHolder="Enter the Contact Number"
              type="number"
              name="contact"
              handlerChange={handlerChange}
              inputVal={userData.contact}
            />
            <InputField
              labelName="CNIC*"
              placeHolder="Enter the CNIC"
              type="number"
              name="cnic"
              handlerChange={handlerChange}
              inputVal={userData.cnic}
            />
            <InputField
              labelName="Address*"
              placeHolder="Enter the Address"
              type="text"
              name="address"
              handlerChange={handlerChange}
              inputVal={userData.address}
            />
            <InputField
              labelName="Joining Date*"
              placeHolder="Enter the Date"
              type="date"
              name="date"
              inputVal={userData.date}
              handlerChange={handlerChange}
            />
            <InputField
              labelName="Password*"
              placeHolder="Enter the Password"
              type="password"
              name="password"
              handlerChange={handlerChange}
              inputVal={userData.password}
            />
            <InputField
              labelName="Confirm Password*"
              placeHolder="Enter the Confirm Password"
              type="password"
              name="confirmPassword"
              handlerChange={handlerChange}
              inputVal={userData.confirmPassword}
            />
            <InputField
              labelName="Confirm Password*"
              placeHolder="Enter the Confirm Password"
              type="file"
              name="image"
              handlerChange={handlerChange}
              inputVal={userData.image}
            />
            <OptionField
              labelName="Role*"
              handlerChange={handlerChange}
              name="role"
            />
          </div>
          <div className="flex items-center justify-end m-2 gap-2 text-xs ">
            <CancelBtn />
            <AddButton label={"Add User"} />
          </div>
        </form>
      </div>
    </div>
  );
};
