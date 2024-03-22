import React from "react";

interface GlossaryProps {
  title: string;
  explaination: string;
  

}

const Glossary: React.FC<GlossaryProps> = (props) => {
  return (
    <div className="flex flex-col rounded-lg border bg-gray-200 md:rounded-none md:border-none md:bg-inherit md:flex-row gap-4  w-full">
        <p className=" md:w-1/4 text-[16px] md:rounded-lg md:border md:bg-gray-200 p-4 italic ">{props.title}</p>
        <p className=" md:w-3/4 text-[16px] md:rounded-lg md:border md:bg-gray-200 p-4">{props.explaination}</p>
    </div>
  );
};

export default Glossary;