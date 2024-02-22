import React, { useRef, useEffect, useState } from "react";
import dataJson from "../assets/tests/data.json";

export type IcicleData = {
  name: string;
  children?: IcicleData[];
  description?: string;
  payment?: string;
  type?: string;
  skills?: string;
  tooldiagram?: string;
  value?: number;
};

const IcicleDiagram = ({ data = dataJson }: { data?: IcicleData }) => {
  const [activeStages, setActiveStages] = useState<IcicleData[]>([]);
  const toggleStage = (stage: IcicleData) => {
    // Get the index of the stage in the activeStages array
    console.log(stage);
    const index = activeStages.findIndex(
      (activeStage) => activeStage.name === stage.name
    );
    // If the stage is already active, remove it from the array
    if (index !== -1) {
      setActiveStages((prev) => prev.slice(0, index));
    } else {
      // If the stage is not active, add it to the array
      setActiveStages([...activeStages, stage]);
    }
  };

  const renderCards = (stage: IcicleData) => (
    <div className="flex flex-row">
      <button
        key={stage.name}
        onClick={() => toggleStage(stage)}
        className="flex bg-white rounded h-full px-2"
      >
        {stage.name}
      </button>
      <div className="flex flex-col">
        {stage.children?.map((subStage) => renderCards(subStage))}
      </div>
    </div>
  );

  console.log(dataJson.children);

  return (
    <div className="flex flex-row h-full w-full">
      {activeStages.map((stage) => (
        <button
          key={stage.name}
          onClick={() => toggleStage(stage)}
          className="flex bg-white rounded justify-center [writing-mode:vertical-rl] rotate-180 w-6 left-0"
        >
          {stage.name}
        </button>
      ))}

      <div className="flex flex-col h-full">
        {activeStages.length === 0
          ? dataJson.children?.map((stage) => renderCards(stage))
          : activeStages[activeStages.length - 1].children?.map((subStage) =>
              renderCards(subStage)
            )}
      </div>
    </div>
  );
};

export default IcicleDiagram;
