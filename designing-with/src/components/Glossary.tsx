import React from "react";

interface GlossaryProps {
  title: string;
  explaination: string;
  

}

const Glossary: React.FC<GlossaryProps> = (props) => {
  return (
    <div className="flex flex-col rounded-lg border bg-[#D9D9D9] bg-opacity-50 shadow-[inset_0_0_20px_5px_rgba(1,1,1,0)] shadow-white md:shadow-none md:rounded-none md:border-none md:bg-inherit md:flex-row gap-2  w-full">
        <p className=" md:w-1/4 text-[16px] md:text-[24px] md:rounded-lg md:border md:bg-[#D9D9D9] md:bg-opacity-50 md:shadow-[inset_0_0_20px_5px_rgba(1,1,1,0)] md:shadow-white p-4 italic ">{props.title}</p>
        <p className=" md:w-3/4 text-[16px] md:text-[24px] md:rounded-lg md:border md:bg-[#D9D9D9] md:bg-opacity-50 md:shadow-[inset_0_0_20px_5px_rgba(1,1,1,0)] md:shadow-white p-4">{props.explaination}</p>
    </div>
  );
};

export default Glossary;