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
              className={` ${
                activeTab === index ? "w-1/2 shadow-[#72DAFB]" : "w-1/6 shadow-white"
              }  shadow-[inset_0_0_35px_25px_rgba(1,1,1,0)] md:flex-1 md:max-w-[380px] px-4 py-6 rounded-t-2xl text-left`}
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
        <div className="">{tabs[activeTab].elements}</div>
      </div>
      {tabs[activeTab].extra}
    </>
  );
};

export type TabElement = {
  title: string;
  mobileTitle: string;
  elements: React.ReactNode[] | React.ReactNode;
  style?: string;
  extra?: React.ReactNode[] | React.ReactNode;
};

export default TabDisplay;
