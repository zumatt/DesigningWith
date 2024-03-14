import { useState } from "react";

const TabDisplay = ({ tabs }: { tabs: TabElement[] }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <div className="w-full mt-[30px]">
      <div className="flex justify-start gap-[2px] md:gap-[10px]">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`flex-1 max-w-[380px] px-4 py-6 bg-[#D9D9D988] rounded-t-2xl text-left`}
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
      <div className="px-4 py-6 bg-[#D9D9D988] rounded-b-2xl">
        {tabs[activeTab].elements}
      </div>
    </div>
  );
};

export type TabElement = {
  title: string;
  mobileTitle: string;
  elements: React.ReactNode[] | React.ReactNode;
};

export default TabDisplay;
