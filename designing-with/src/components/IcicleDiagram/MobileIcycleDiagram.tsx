import { useState } from "react";
import IcicleData from "./IcicleData";
import dataJson from "../../assets/data/data.json";
import Filter from "./Filter";
import { SvgDiagram } from "./SvgDiagramTool";

const MobileIcicleDiagram = ({
  data = dataJson,
  showCard,
  setShowCard = () => {},
}: {
  data?: IcicleData;
  showCard: IcicleData | null;
  setShowCard?: (card: IcicleData | null) => void;
}) => {
  const [activeStages, setActiveStages] = useState<IcicleData[]>([]);
  const steps = [
    "Design Phase",
    "AI Capability",
    "AI Input (From)",
    "AI Output (To)",
    "Tool",
  ];

  const toggleStage = (stage: IcicleData, parents: IcicleData[]) => {
    // Get the index of the stage in the activeStages array
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

  const displayDiagram = () => {
    if (showCard !== null) {
      return (
        <RenderToolCards tool={showCard} onClose={() => setShowCard(null)} />
      );
    } else if (activeStages.length > 0) {
      return (
        <div className="flex flex-col w-full flex-1">
          {activeStages[activeStages.length - 1]?.children?.map(
            (stage, index) => (
              <RenderCards
                stage={stage}
                parents={activeStages}
                toggleStage={toggleStage}
                showCard={setShowCard}
              />
            )
          )}
        </div>
      );
    } else {
      return (
        <div className="flex flex-col w-full flex-1">
          {data.children?.map((stage, index) => (
            <RenderCards
              stage={stage}
              parents={[]}
              toggleStage={toggleStage}
              showCard={setShowCard}
            />
          ))}
        </div>
      );
    }
  };

  return (
    <div className="w-full flex-1 flex flex-col">
      <div className="flex flex-row justify-start items-center gap-2 mt-3">
        {activeStages.length > 0 &&
          activeStages.map((stage, index) => (
            <>
              <Filter
                name={stage.name}
                color="border-grey"
                onClick={() => {
                  setShowCard(null);
                  toggleStage(stage, []);
                }}
              />
              {index < activeStages.length - 1 && <p>/</p>}
            </>
          ))}
      </div>

      {showCard === null && (
        <div className="flex flex-row min-w-[100%]">
          <p className="text-sm w-full md:w-[334px] m-1">
            {steps[activeStages.length]}
          </p>
        </div>
      )}

      {displayDiagram()}
    </div>
  );
};

const RenderCards = ({
  stage,
  parents,
  toggleStage,
  showCard,
}: {
  stage: IcicleData;
  parents: IcicleData[];
  toggleStage: (stage: IcicleData, parents: IcicleData[]) => void;
  showCard: (card: IcicleData | null) => void;
}) => {
  return (
    <div
      className={`flex flex-row transition-all flex-1 glassBox m-1 p-1 rounded-lg cursor-pointer`}
      onClick={
        stage.description
          ? () => showCard(stage)
          : () => toggleStage(stage, parents)
      }
    >
      <p>{stage.name}</p>
    </div>
  );
};

const RenderToolCards = ({
  tool,
  onClose,
}: {
  tool: IcicleData;
  onClose: () => void;
}) => {
  const selectStroke = (select: boolean) => {
    if (select) {
      switch (tool.payment) {
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
    <div
      className={`flex bg-white rounded-lg px-2 m-1 w-full h-full flex-col ${selectStroke(
        true
      )}`}
    >
      <div className="flex flex-col w-full p-5 h-full overflow-x-auto">
        <div className="flex flex-row justify-between items-center mb-5">
          <h1>{tool.name}</h1>
          <div className="flex flex-row justify-between items-center w-[60%]">
            <Filter name={tool.payment ?? ""} color={selectStroke(true)} />
            <Filter name={"Type - " + tool.type} color={selectStroke(false)} />
            <Filter
              name={"Skills - " + tool.skills}
              color={selectStroke(false)}
            />
          </div>
          <button
            onClick={onClose}
            className="flex bg-white rounded h-full justify-center left-0"
          >
            Close X
          </button>
        </div>
        <h2 className="mb-10">{tool.description}</h2>
        <SvgDiagram
          jsonDiagramUrl={tool.tooldiagram}
          desiredWidth={window.innerWidth}
          desiredHeight={window.innerWidth * 0.25}
        />
        <div className="flex flex-row w-full justify-end mt-5">
          <a href={tool.link}>
            <u>Check the tool</u>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileIcicleDiagram;
