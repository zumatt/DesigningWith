import { useState } from "react";

const TabsDidactic = ({ tabs }: { tabs: TabElement[] }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <>
      <div className="w-full mt-[30px] mb-2">
        <div className="flex w-full justify-start gap-[2px] md:gap-[10px]">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={` ${tab.title === 'About didactic guidelines' ? 'shadow-[#8CD782]' : 'shadow-white'}  shadow-[inset_0_0_35px_25px_rgba(1,1,1,0)] flex-1 w-full px-4 py-6 rounded-t-2xl text-left`}
              onClick={() => setActiveTab(index)}
            >
              <p
                className={
                  activeTab === index
                    ? "underline text-left"
                    : "hidden md:flex text-left"
                }
              >
                {tab.title}
              </p>
              <p
                className={
                  activeTab === index
                    ? " hidden underline text-left"
                    : "md:hidden text-left"
                }
              >
                {tab.mobileTitle}
              </p>
            </button>
          ))}
        </div>
        {tabs.map((tab, index) => (
        <div className={`  `}>
          {tabs[activeTab].elements}
        </div>))}
      </div>
      {tabs[activeTab].extra}
    </>
  );
};

export type TabElement = {
  title: string;
  mobileTitle: string;
  elements: React.ReactNode[] | React.ReactNode;
  extra?: React.ReactNode[] | React.ReactNode;
};

export default TabsDidactic;
