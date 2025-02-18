import { useState } from "react";
import { InputField } from "../InputField";
import { Title } from "../Title";
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

export const AddCustomer = () => {
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
    e.preventDefault();
    console.log("Form submitted!", userData);
  };
  return (
    <div>
      <div className="w-[42rem] max-h-[29rem] bg-white mx-auto rounded-xl border  border-indigo-500 ">
        <form onSubmit={handlerSubmitted}>
          <Title>Add Customer</Title>
          <div className="mx-2 grid grid-cols-2  flex-wrap gap-3  ">
            <InputField
              labelName=" Customer Name*"
              placeHolder="Enter the Customer Name"
              type="text"
              name="name"
              handlerChange={handlerChange}
              inputVal={userData.name}
            />
            <InputField
              labelName="Customer Address*"
              placeHolder="Enter the Customer Address"
              type="text"
              name="address"
              handlerChange={handlerChange}
              inputVal={userData.address}
            />

            <InputField
              labelName="Customer Contact*"
              placeHolder="Enter the Contact Number"
              type="number"
              name="contact"
              handlerChange={handlerChange}
              inputVal={userData.contact}
            />
            <InputField
              labelName="Company Name*"
              placeHolder="Enter the Company Name"
              type="text"
              name="companyName"
              handlerChange={handlerChange}
            />
            <InputField
              labelName="Company Address*"
              placeHolder="Enter the Company Address"
              type="text"
              name="companyAddress"
              handlerChange={handlerChange}
            />
          </div>
          <div className="flex items-center justify-end m-2 gap-2 text-xs ">
            <CancelBtn />
            <AddButton label={"Add Customer"} />
          </div>
        </form>
      </div>
    </div>
  );
};
