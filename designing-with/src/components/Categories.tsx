import React from "react";

interface CategoriesProps {
  title: string;
  majTypes1: string;
  majTypes2: string;
  majTypes3: string;
  ex1:string;
  ex2:string;
  ex3:string;

}

const CategoriesKnowDim: React.FC<CategoriesProps> = (props) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-[#D9D9D9] bg-opacity-50 shadow-[inset_0_0_20px_5px_rgba(1,1,1,0)] shadow-white border p-4 border-green">
      <p className=" ">{props.title}</p>
        <div className="flex flex-row gap-4">
            <p className=" md:w-1/2 text-[12px] md:text-[16px]">{props.majTypes1}</p>
            <p className=" hidden md:flex w-1/2 text-[16px]">{props.ex1}</p>
        </div >
        <div className="flex flex-row gap-4">
            <p className=" md:w-1/2 text-[12px] md:text-[16px]">{props.majTypes2}</p>
            <p className="hidden md:flex  w-1/2 text-[16px]">{props.ex2}</p>
        </div>
        <div className="flex flex-row gap-4">
            <p className=" md:w-1/2 text-[12px] md:text-[16px]">{props.majTypes3}</p>
            <p className="hidden md:flex w-1/2 text-[16px]">{props.ex3}</p>
        </div>
    </div>
  );
};

export default CategoriesKnowDim;