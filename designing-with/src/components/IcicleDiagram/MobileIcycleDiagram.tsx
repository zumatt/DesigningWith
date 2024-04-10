import { useState } from "react";
import IcicleData from "./IcicleData";
import dataJson from "../../assets/data/data.json";
import Filter from "./Filter";
import { SvgDiagram } from "./SvgDiagramTool";
import { selectStroke, steps, toggleStage } from "./DiagramUtils";

/**
 * Component that renders the mobile version of the Icicle Diagram
 * @param data The data to render
 * @param showCard The card to show
 * @param setShowCard The function to set the card to show
 * @returns The mobile version of the Icicle Diagram
 */
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

  const toggleStageDiagram = (stage: IcicleData, parents: IcicleData[]) => {
    return toggleStage(stage, parents, activeStages, setActiveStages);
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
                toggleStage={toggleStageDiagram}
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
              toggleStage={toggleStageDiagram}
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
                  toggleStageDiagram(stage, []);
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

/**
 * Component that renders the cards in the Icicle Diagram
 * @param stage The stage to render
 * @param parents The parents of the stage
 * @param toggleStage The function to focus the stage
 * @param showCard The function to show the card
 * @returns The card
 */
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

/**
 * Component that renders the tool cards
 * @param tool The tool to render
 * @returns The tool card
 */
const RenderToolCards = ({
  tool,
  onClose,
}: {
  tool: IcicleData;
  onClose: () => void;
}) => {
  return (
    <div
      className={`flex glassBox rounded-lg px-2 m-1 w-full h-full flex-col ${selectStroke(
        true,
        tool
      )}`}
    >
      <div className="flex flex-col w-full p-5 h-full overflow-x-auto">
        <div className="flex flex-row justify-between items-center mb-5">
          <h1 style={{ fontSize: 25 }}>{tool.name}</h1>
          <button
            onClick={onClose}
            className="flex rounded h-full justify-center left-0"
            style={{ fontSize: 15 }}
          >
            Close X
          </button>
        </div>
        <div className="flex flex-row flex-wrap justify-start gap-2 items-center w-full mb-5">
          <Filter name={tool.payment ?? ""} color={selectStroke(true, tool)} />
          <Filter
            name={"Type - " + tool.type}
            color={selectStroke(false, tool)}
          />
          <Filter
            name={"Skills - " + tool.skills}
            color={selectStroke(false, tool)}
          />
        </div>
        <h2 className="mb-10">{tool.description}</h2>
        <SvgDiagram
          jsonDiagramUrl={tool.tooldiagram}
          desiredWidth={window.innerWidth}
          desiredHeight={window.innerWidth * 0.25}
        />
        <div className="flex flex-row w-full justify-end mt-5">
          <a href={tool.link}>
            <u style={{ fontSize: 15 }}>Check the tool</u>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileIcicleDiagram;
