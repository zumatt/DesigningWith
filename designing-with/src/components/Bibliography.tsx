import React from "react";

interface BibliographyProps {
  title: string;
  link: string;
}

const Bibliography: React.FC<BibliographyProps> = (props) => {
  return (
    <div className="flex flex-col rounded-lg border p-4 bg-[#A7A7A7] bg-opacity-50 shadow-[inset_0_0_20px_5px_rgba(1,1,1,0)] shadow-white hover:bg-[#EDAB2C] md:w-1/4 h-28 md:h-64 aspect-square">
      <p className=" text-[12px] md:text-[16px] max-w-50 overflow-hidden">{props.title}</p>
      <a
        className="text-[12px] md:text-[16px] underline truncate"
        href={props.link}
        target="_blank"
        rel="noreferrer"
      >
        {props.link}
      </a>
    </div>
  );
};

export default Bibliography;
