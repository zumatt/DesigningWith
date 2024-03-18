import React from "react";

interface GlossaryProps {
  title: string;
  explaination: string;
  

}

const Glossary: React.FC<GlossaryProps> = (props) => {
  return (
    <div className="flex flex-row gap-4  w-full">
        <p className=" w-1/4 text-[16px] rounded-lg border bg-gray-200 p-4 italic ">{props.title}</p>
        <p className=" w-3/4 text-[16px] rounded-lg border bg-gray-200 p-4">{props.explaination}</p>
    </div>
  );
};

export default Glossary;