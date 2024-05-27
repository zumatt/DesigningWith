import { RefObject, useEffect, useState } from "react";
import { selectStroke } from "./DiagramUtils";
import Filter from "./Filter";
import IcicleData from "./IcicleData";
import { SvgDiagram } from "./SvgDiagramTool";

const RenderToolCards = ({
  stage,
  showCard = () => {},
  initialCardRef,
}: {
  stage: IcicleData;
  showCard?: (card: IcicleData | null) => void;
  initialCardRef?: RefObject<HTMLDivElement>;
}) => {
  const [leftConstraint, setLeftConstraint] = useState(-1);

  useEffect(() => {
    if (initialCardRef && initialCardRef.current) {
      setLeftConstraint(initialCardRef.current.getBoundingClientRect().left);
    }
  }, [initialCardRef, initialCardRef?.current?.clientWidth]);

  return (
    <div
      className={`flex flex-row fixed bottom-0 right-0 z-10`}
      style={{ left: leftConstraint > 0 ? leftConstraint : 145 }}
    >
      <div
        className={`absolute bottom-0 left-[${
          leftConstraint > 0 ? -leftConstraint : -130
        }px] w-screen h-screen bg-opacity-50`}
        onClick={() => showCard(null)}
        style={{ left: leftConstraint > 0 ? -leftConstraint : -145 }}
      />
      <div
        className={`flex bg-white rounded-lg w-full px-2 m-1 h-content flex-col z-20 ${selectStroke(
          true,
          stage
        )}`}
      >
        <div className="flex flex-col w-full p-5  max-h-[600px] overflow-x-auto">
          <div className="flex flex-row justify-between items-center mb-5">
            <div className="flex flex-row justify-between items-center w-[60%]">
              <h1>{stage.name}</h1>
              <Filter
                name={stage.payment ?? ""}
                color={selectStroke(true, stage)}
              />
              <Filter
                name={"Type - " + stage.type}
                color={selectStroke(false, stage)}
              />
              <Filter
                name={"Skills - " + stage.skills}
                color={selectStroke(false, stage)}
              />
            </div>
            <button
              onClick={() => showCard(null)}
              className="flex bg-white rounded h-full justify-center left-0"
            >
              Close X
            </button>
          </div>
          <h2 className="mb-10">{stage.description === undefined ? "No description": stage.description.length > 300 ? stage.description.substring(0, 300).split('.').slice(0, -1).join('.') + '.' : stage.description}</h2>
          <SvgDiagram jsonDiagramUrl={stage.tooldiagram} />
          <div className="flex flex-row w-full justify-end mt-5">
            <a href={stage.link} target="_blank">
              <u>Go to the tool</u>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderToolCards;
