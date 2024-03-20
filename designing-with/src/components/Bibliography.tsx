import React from "react";

interface BibliographyProps {
  title: string;
  link: string;
}

const Bibliography: React.FC<BibliographyProps> = (props) => {
  return (
    <div className="flex flex-col rounded-lg border p-4 bg-grey bg-opacity-10 shadow-inner w-1/4 h-64 aspect-square">
      <p className=" text-[16px]">{props.title}</p>
      <a
        className="text-[16px] underline truncate"
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
