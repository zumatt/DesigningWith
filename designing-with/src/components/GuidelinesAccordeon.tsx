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
    <div className="bg-[#D9D9D9] bg-opacity-50 shadow-[inset_0_0_20px_5px_rgba(1,1,1,0)] shadow-white px-4 py-6 rounded-2xl">
      {" "}
      {/* shadow-[0px_0px_100px_5px_#FFF_inset]"> */}
      <div
        onClick={() => handleClick()}
        className="flex justify-between cursor-pointer"
      >
        <p>{title}</p>
        <p className="mr-[20px] select-none">{active ? "-" : "+"}</p>
      </div>
      {active && <div className="mt-[10px] w-full flex flex-col">{children}</div>}
    </div>
  );
};

export default GuidelinesAccordeon;
