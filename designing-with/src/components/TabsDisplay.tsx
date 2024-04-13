import { useState } from "react";

const TabDisplay = ({ tabs }: { tabs: TabElement[] }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <>
      <div className="w-full mt-[30px] mb-2">
        <div className="flex w-full justify-start gap-[2px] md:gap-[10px]">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={` ${activeTab === index ? 'w-1/2' : 'w-1/6'}  md:flex-1  px-4 py-6 glassBox rounded-t-2xl`}
              onClick={() => setActiveTab(index)}
            >
              <p
                className={
                  activeTab === index
                    ? "underline md:text-left w-full text-center"
                    : "hidden text-center md:flex md:text-left"
                }
              >
                {tab.title}
              </p>
              <p
                className={
                  activeTab === index
                    ? " hidden underline md:text-left text-center"
                    : "md:hidden text-center md:text-left"
                }
              >
                {tab.mobileTitle}
              </p>
            </button>
          ))}
        </div>
        <div className="">
          {tabs[activeTab].elements}
        </div>
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

export default TabDisplay;
