type ButtonProps = {
  title: string;
  icon: React.ReactNode;
  arrowIcon?: React.ReactNode;
  isOpen: boolean;
  handlerClick: () => void;
};

export const SideBarButton = ({
  title,
  icon,
  arrowIcon,
  isOpen,
  handlerClick,
}: ButtonProps) => {
  return (
    <div
      onClick={handlerClick}
      className="flex items-center justify-center gap-2 p-2 bg-indigo-500 text-white rounded-lg cursor-pointer hover:bg-indigo-600 transition"
    >
      <span>{icon}</span>
      {isOpen ? "" : <span>{title}</span>}
      {!isOpen && arrowIcon && <span>{arrowIcon}</span>}
    </div>
  );
};
