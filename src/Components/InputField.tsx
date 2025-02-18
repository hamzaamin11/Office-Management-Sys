type InputFieldProps = {
  type?: string;
  labelName?: string;
  placeHolder?: string;
  handlerChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  inputVal?: string;
};
export const InputField = ({
  type,
  labelName,
  placeHolder,
  handlerChange,
  name,
  inputVal,
}: InputFieldProps) => {
  return (
    <div>
      <div className=" flex flex-col  mt-3">
        <label className=" text-gray-800 text-xs">{labelName}</label>
        <input
          type={type}
          className=" p-1 rounded bg-white  border border-gray-300 focus:indigo-400"
          placeholder={placeHolder}
          onChange={handlerChange}
          name={name}
          value={inputVal}
        />
      </div>
    </div>
  );
};
