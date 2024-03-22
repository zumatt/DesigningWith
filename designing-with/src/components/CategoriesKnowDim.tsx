import React from "react";

interface CategoriesKnowProps {
  title: string;
  majTypes1: string;
  majTypes2: string;
  majTypes3: string;
  majTypes4: string;
  majTypes5: string;
  majTypes6: string;
  majTypes7: string;
  ex1:string;
  ex2:string;
  ex3:string;
  ex4:string;
  ex5:string;
  ex6:string;
  ex7:string;


}

const CategoriesKnowDim: React.FC<CategoriesKnowProps> = (props) => {
  return (
    <div className="flex flex-col gap-4 w-full rounded-lg border p-4 border-green">
        <p className=" md:w-1/4 ">{props.title}</p>
        <div className="flex flex-row gap-4 w-full">
            <p className=" w-full md:w-1/4 text-[12px] md:text-[16px]">{props.majTypes1}</p>
            <p className=" w-fullmd:w-3/4 text-[12px] md:text-[16px]">{props.ex1}</p>
        </div >
        <div className="flex flex-row gap-4">
            <p className=" w-full md:w-1/4 text-[12px] md:text-[16px]">{props.majTypes2}</p>
            <p className=" w-full md:w-3/4 text-[12px] md:text-[16px]">{props.ex2}</p>
        </div>
        <div className="flex flex-row gap-4">
            <p className=" w-full md:w-1/4 text-[12px] md:text-[16px]">{props.majTypes3}</p>
            <p className=" w-full md:w-3/4 text-[12px] md:text-[16px]">{props.ex3}</p>
        </div>
        <div className="flex flex-row gap-4">
            <p className=" w-full md:w-1/4 text-[12px] md:text-[16px]">{props.majTypes4}</p>
            <p className=" w-full md:w-3/4 text-[12px] md:text-[16px]">{props.ex4}</p>
        </div>
        <div className="flex flex-row gap-4">
            <p className=" w-full md:w-1/4 text-[12px] md:text-[16px]">{props.majTypes5}</p>
            <p className=" w-full md:w-3/4 text-[12px] md:text-[16px]">{props.ex5}</p>
        </div>
        <div className="flex flex-row gap-4">
            <p className=" w-full md:w-1/4 text-[12px] md:text-[16px]">{props.majTypes6}</p>
            <p className=" w-full md:w-3/4 ttext-[12px] md:ext-[16px]">{props.ex6}</p>
        </div>
        <div className="flex flex-row gap-4">
            <p className=" w-full md:w-1/4 text-[12px] md:text-[16px]">{props.majTypes7}</p>
            <p className=" w-full md:w-3/4 text-[12px] md:text-[16px]">{props.ex7}</p>
        </div>
    </div>
  );
};

export default CategoriesKnowDim;