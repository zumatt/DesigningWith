import React from "react";

const DidacticGuidelineResources = ({
  title,
  type,
  subtitle = "",
  link,
  filename,
}: {
  title: string;
  type: string;
  subtitle?: string;
  link: string;
  filename?: string;
}) => {
  return (
    <div
      className={`flex flex-row items-center rounded-xl mt-3 w-full p-3 bg-opacity-50 shadow-[inset_0_0_30px_5px_rgba(1,1,1,0)] shadow-white ${
        type === "Resources" ? "bg-[#8CD782]" : "bg-[#A1A1A1]"
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
          target={`${type === "Resources" ? "" : "_blank"}`}
          rel={`${type === "Resources" ? "" : "noreferrer"}`}
          download={`${type === "Resources" ? `${filename}` : ""}`}
          className="text-[16px] md:text-[29px] underline ml-auto"
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
          target={`${type === "Resources" ? "" : "_blank"}`}
          rel={`${type === "Resources" ? "" : "noreferrer"}`}
          download={`${type === "Resources" ? `${filename}` : ""}`}
          className="text-[16px] md:text-[29px] underline ml-auto"
        >
          {type === "Resources" ? "Download" : "Go to link"}
        </a>
      </div>
    </div>
    
    
  );
};

export default DidacticGuidelineResources;
