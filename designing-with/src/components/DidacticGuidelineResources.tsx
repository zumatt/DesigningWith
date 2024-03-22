import React from "react";

const DidacticGuidelineResources = ({
  title,
  type,
  subtitle = "",
  link,
}: {
  title: string;
  type: string;
  subtitle?: string;
  link: string;
}) => {
  return (
    <div
      className={`flex flex-row items-center rounded-xl mt-3 w-full p-3 bg-${
        type === "Resources" ? "green" : "[#D9D9D988]"
      }`}
    >
      <div className="hidden md:flex flex-row items-center w-full">
        <p className="text-[29px]">{title}</p>
        <p className="text-sm mx-4 px-2 bg-[#ffffff88] border-white border-[1px] rounded-lg">
          {type}
        </p>
        <p className="text-sm">{subtitle}</p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-[29px] underline ml-auto"
        >
          {type === "Resources" ? "Download" : "Go to link"}
        </a>
      </div>
      <div className="flex md:hidden">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <p className="md:text-[29px]">{title}</p>
            <p className="text-sm mx-4 px-2 bg-[#ffffff88] border-white border-[1px] rounded-lg">
              {type}
            </p>
          </div>
        
          <p className="text-sm">{subtitle}</p>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-[16px] md:text-[29px] underline ml-auto"
        >
          {type === "Resources" ? "Download" : "Go to link"}
        </a>
      </div>
    </div>
    
    
  );
};

export default DidacticGuidelineResources;
