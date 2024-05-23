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
              className={` ${ activeTab === index && tab.title === 'About didactic guidelines' ? 'shadow-[#8CD782]' : activeTab === index && tab.title === 'Didactic Guidelines' ? 'shadow-[#8CD782]' : activeTab === index && tab.title === 'Glossary' ? 'shadow-[#EBB64F]' : activeTab === index && tab.title === 'Bibliography' ? 'shadow-[#EBB64F]' : activeTab === index && tab.title === 'Publications' ? 'shadow-[#EBB64F]' : 'shadow-white'}   shadow-[inset_0_0_35px_25px_rgba(1,1,1,0)] md:flex-1 ${activeTab === index ? 'w-2/3' : 'w-1/3'} md:max-w-[380px] px-4 py-6 rounded-t-2xl text-left`}
              onClick={() => setActiveTab(index)}
            >
              <p
                className={
                  activeTab === index
                    ? "underline text-center md:text-left"
                    : "hidden md:flex text-center md:text-left"
                }
              >
                {tab.title}
              </p>
              <p
                className={
                  activeTab === index
                    ? " hidden underline text-center md:text-left"
                    : "md:hidden text-center md:text-left"
                }
              >
                {tab.mobileTitle}
              </p>
            </button>
          ))}
        </div>
        <div className={`  `}>
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

export default TabsDidactic;
