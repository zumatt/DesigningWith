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
    <div className="flex flex-col gap-4 rounded-lg border p-4 border-green">
      <p className=" ">{props.title}</p>
        <div className="flex flex-row gap-4">
            <p className=" w-1/2 text-[16px]">{props.majTypes1}</p>
            <p className=" w-1/2 text-[16px]">{props.ex1}</p>
        </div >
        <div className="flex flex-row gap-4">
            <p className=" w-1/2 text-[16px]">{props.majTypes2}</p>
            <p className=" w-1/2 text-[16px]">{props.ex2}</p>
        </div>
        <div className="flex flex-row gap-4">
            <p className=" w-1/2 text-[16px]">{props.majTypes3}</p>
            <p className=" w-1/2 text-[16px]">{props.ex3}</p>
        </div>
    </div>
  );
};

export default CategoriesKnowDim;