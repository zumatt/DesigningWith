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
  const toggleStage = (stage: IcicleData, parents: IcicleData[]) => {
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
      setActiveStages([...parents, stage]);
    }
  };

  console.log(dataJson.children);

  return (
    <div className="flex flex-row h-full w-full">
      {activeStages.map((stage) => (
        <button
          key={stage.name}
          onClick={() => toggleStage(stage, [])}
          className="flex bg-white rounded justify-center [writing-mode:vertical-rl] rotate-180 w-6 left-0 m-1"
        >
          {stage.name}
        </button>
      ))}

      <div className="flex flex-col h-full">
        {activeStages.length === 0
          ? dataJson.children?.map((stage) => (
              <RenderCards
                stage={stage}
                parents={[]}
                toggleStage={toggleStage}
              />
            ))
          : activeStages[activeStages.length - 1].children?.map((subStage) => (
              <RenderCards
                stage={subStage}
                parents={activeStages}
                toggleStage={toggleStage}
              />
            ))}
      </div>
    </div>
  );
};

const RenderCards = ({
  stage,
  parents,
  toggleStage,
  parentsSelect = () => {},
}: {
  stage: IcicleData;
  parents: IcicleData[];
  toggleStage: (stage: IcicleData, parents: IcicleData[]) => void;
  parentsSelect?: (select: boolean) => void;
}) => {
  const [selected, setSelected] = useState(false);

  const groupSelect = (select: boolean) => {
    parentsSelect(select);
    setSelected(select);
  };

  const selectStroke = (select: boolean) => {
    if (select) {
      switch (stage.payment) {
        case "Premium":
          return "border-2 border-blue";
        case "Freemium":
          return "border-2 border-purple";
        case "Free":
          return "border-2 border-beige";
        case "Free-Waiting List":
          return "border-2 border-orange";
        default:
          return "border-2 border-grey";
      }
    }
    return "";
  };

  return (
    <div className="flex flex-row">
      <button
        key={stage.name}
        onClick={() => toggleStage(stage, parents)}
        className={`flex bg-white rounded w-[334px] px-2 m-1 ${selectStroke(
          selected
        )}`}
        onMouseEnter={() => groupSelect(true)}
        onMouseLeave={() => groupSelect(false)}
      >
        {stage.name}
      </button>
      <div className="flex flex-col">
        {stage.children?.map((subStage) => (
          <RenderCards
            stage={subStage}
            parents={parents.concat(stage)}
            toggleStage={toggleStage}
            parentsSelect={groupSelect}
          />
        ))}
      </div>
    </div>
  );
};

type Filter = {
  property: string;
  values: [];
};

export default IcicleDiagram;

// TODO: Filters, merge styles, add description card
// TODO: Add last content elements, check format of data, solve edge cases.
