import { useState } from "react";

const GuidelinesAccordeon = ({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode[] | React.ReactNode;
}) => {
  const [active, setActive] = useState<boolean>(false);

  const handleClick = () => {
    setActive((active) => !active);
  };

  return (
    <div className="px-4 py-6 mt-[10px] bg-[#D9D9D988] rounded-2xl">
      {" "}
      {/* shadow-[0px_0px_100px_5px_#FFF_inset]"> */}
      <div
        onClick={() => handleClick()}
        className="flex justify-between cursor-pointer"
      >
        <p>{title}</p>
        <p className="mr-[20px] select-none">{active ? "-" : "+"}</p>
      </div>
      {active && <div className="mt-[10px] flex flex-col">{children}</div>}
    </div>
  );
};

export default GuidelinesAccordeon;
