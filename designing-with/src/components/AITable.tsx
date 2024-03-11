import React from "react";

interface AitableProps {
  aiCap: string;
  desc: React.ReactNode[] | React.ReactNode;
  example: React.ReactNode[] | React.ReactNode;
}

const AiTable: React.FC<AitableProps> = (props) => {
  return (
    <div className="flex flex-col bg-white md:bg-inherit rounded-md md:flex-row md:gap-2">
      <p className=" bg-white rounded-lg p-4 md:w-1/6">{props.aiCap}</p>
      <p className="md:hidden px-4">Description</p>
      <p className=" bg-white rounded-lg md:py-4 px-4 md:w-3/6">{props.desc}</p>
      <p className="md:hidden px-4 pt-4">Example</p>
      <p className=" bg-white rounded-lg pb-4 md:pb-0 px-4 md:py-4 md:w-2/6">
        {props.example}
      </p>
    </div>
  );
};

export default AiTable;
