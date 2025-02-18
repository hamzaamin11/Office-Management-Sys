type ButtonProps = {
  label: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const AddButton = ({ label, handleClick }: ButtonProps) => {
  return (
    <div className="">
      <button
        className="bg-indigo-600 text-white  p-2 rounded hover:cursor-pointer hover:scale-105 duration-300"
        onClick={handleClick}
      >
        {label}
      </button>
    </div>
  );
};
