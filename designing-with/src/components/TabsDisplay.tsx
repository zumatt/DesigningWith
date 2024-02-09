import { useState } from "react";

const TabDisplay = ({ tabs }: { tabs: TabElement[] }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <div className="w-full mt-[30px]">
      <div className="flex justify-start gap-[10px]">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`flex-1 max-w-[380px] px-4 py-6 bg-[#D9D9D988] rounded-t-2xl`}
            onClick={() => setActiveTab(index)}
          >
            <p className={activeTab === index ? "underline" : ""}>
              {tab.title}
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
  elements: React.ReactNode[] | React.ReactNode;
};

export default TabDisplay;
