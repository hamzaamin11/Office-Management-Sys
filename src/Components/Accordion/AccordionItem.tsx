import React from "react";

type AccordionItemProps = {
  title?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
};

export const AccordionItem = ({
  title,
  children,
  icon,
}: AccordionItemProps) => {
  return (
    <div className="">
      <div className="flex items-center justify-between  w-full gap-3 ">
        <div>{icon}</div>
        <h3>{title}</h3>
      </div>
      <ul>
        <li className="text-center">{children}</li>
      </ul>
    </div>
  );
};
