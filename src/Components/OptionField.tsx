type OptionFieldProps = {
  labelName: string;
  handlerChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
};

export const OptionField = ({
  labelName,
  handlerChange,
  name,
}: OptionFieldProps) => {
 
  return (
    <div>
      <div className=" flex flex-col  mt-3">
        <label className=" text-gray-800 text-xs">{labelName}</label>
        <select
          onChange={handlerChange}
          name={name}
          className="p-1 rounded bg-white  border border-gray-300 focus:indigo-400"
        >
          <option value={""}>Select User Role</option>
          <option value={"Admin"}>Admin</option>
          <option value={"Employee"}>Employee</option>
        </select>
      </div>
    </div>
  );
};
