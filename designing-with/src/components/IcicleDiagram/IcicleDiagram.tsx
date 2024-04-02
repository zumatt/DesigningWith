import { useEffect, useState } from "react";
import dataJson from "../../assets/data/data.json";
import { FilterArg, filterIcicleData } from "./FilterUtils";
import Tooltip from "@mui/material/Tooltip";
import IcicleData from "./IcicleData";
import { selectStroke, steps, toggleStage } from "./DiagramUtils";

const IcicleDiagram = ({
  data = dataJson,
  filters = [],
  showCard = () => {},
}: {
  data?: IcicleData;
  filters?: FilterArg[];
  showCard?: (card: IcicleData | null) => void;
}) => {
  const [activeStages, setActiveStages] = useState<IcicleData[]>([]);
  const [filteredData, setFilteredData] = useState<IcicleData>(data);
  const [pathTooltip, setPathTooltip] = useState<string>("");
  const [tooltipColor, setTooltipColor] = useState<string>("");

  const toggleStageDiagram = (
    stage: IcicleData,
    parents: IcicleData[],
    isLeave = false
  ) => {
    return toggleStage(stage, parents, activeStages, setActiveStages, isLeave);
  };

  useEffect(() => {
    if (filters.length > 0) setFilteredData(filterIcicleData(data, filters));
    else setFilteredData(data);
  }, [filters, data]);

  return (
    <>
      <div className="flex flex-row min-w-[100%]">
        {activeStages.length > 0 ? (
          <div className="w-6 left-0 m-1"></div>
        ) : (
          <p className="text-sm w-full md:w-[334px] m-1">Design Phase</p>
        )}
        {activeStages.length > 1 ? (
          <div className="w-6 left-0 m-1"></div>
        ) : (
          <p className="text-sm w-[334px] m-1">AI Capability</p>
        )}
        {activeStages.length > 2 ? (
          <div className="w-6 left-0 m-1"></div>
        ) : (
          <p className="text-sm w-[334px] m-1">AI Input (From)</p>
        )}
        {activeStages.length > 3 ? (
          <div className="w-6 left-0 m-1"></div>
        ) : (
          <p className="text-sm w-[334px] m-1">AI Output (To)</p>
        )}
        {activeStages.length > 4 ? (
          <div className="w-6 left-0 m-1"></div>
        ) : (
          <p className="text-sm w-[334px] m-1">Tool</p>
        )}
      </div>
      <div className="flex flex-col md:flex-row h-full w-full md:overflow-x-hidden overflow-x-visible md:overflow-y-visible">
        {activeStages.map((stage) => (
          <button
            key={stage.name}
            onClick={() => toggleStageDiagram(stage, [])}
            className="hidden md:flex bg-white rounded justify-center item-center [writing-mode:vertical-rl] rotate-180 w-6 min-h-full left-0 m-1 p-1"
          >
            {stage.name}
          </button>
        ))}

        <Tooltip
          title={pathTooltip}
          open={pathTooltip !== ""}
          classes={{ tooltip: tooltipColor }}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          followCursor
        >
          <div
            className="flex flex-col justify-between"
            style={{ width: "-webkit-fill-available" }}
          >
            {activeStages.length === 0
              ? filteredData.children?.map((stage) => (
                  <RenderCards
                    stage={stage}
                    parents={[]}
                    toggleStage={toggleStageDiagram}
                    showCard={showCard}
                    parentsSelect={(select, tree) => {
                      setTooltipColor(select);
                      setPathTooltip(tree.join(" / "));
                    }}
                  />
                ))
              : activeStages[activeStages.length - 1].children?.map(
                  (subStage) => (
                    <RenderCards
                      stage={subStage}
                      parents={activeStages}
                      toggleStage={toggleStageDiagram}
                      showCard={showCard}
                      parentsSelect={(select, tree) => {
                        if (select === "") setPathTooltip("");
                        else {
                          tree = [
                            ...activeStages.map((stage) => stage.name),
                            ...tree,
                          ];
                          setPathTooltip(tree.join(" / "));
                        }
                      }}
                    />
                  )
                )}
          </div>
        </Tooltip>
      </div>
    </>
  );
};

const RenderCards = ({
  stage,
  parents,
  toggleStage,
  parentsSelect = () => {},
  showCard = () => {},
  level = 0,
}: {
  stage: IcicleData;
  parents: IcicleData[];
  toggleStage: (
    stage: IcicleData,
    parents: IcicleData[],
    isLeave?: boolean
  ) => void;
  parentsSelect?: (select: string, tree: string[]) => void;
  showCard?: (card: IcicleData | null) => void;
  level?: number;
}) => {
  const [selected, setSelected] = useState<string>("");

  const groupSelect = (select: string, tree: string[]) => {
    parentsSelect(select, select === "" ? [] : [stage.name, ...tree]);
    setSelected(select);
  };

  return (
    <div
      className={`flex flex-row transition-all ${
        // @ts-ignore
        level === 1 && !stage.description && stage.children?.length > 3
          ? "h-[30px]"
          : "flex-1"
      }`}
      style={{
        opacity: Object.keys(stage).includes("inFilter")
          ? stage.inFilter
            ? 1
            : 0.5
          : 1,
      }}
    >
      <button
        key={stage.name}
        onClick={() => {
          if (stage.description) {
            showCard(stage);
            toggleStage(
              parents[parents.length - 1],
              parents.slice(0, -1),
              true
            );
            groupSelect(selectStroke(false, stage), []);
          } else {
            toggleStage(stage, parents);
            groupSelect(selectStroke(false, stage), []);
          }
        }}
        className={`flex rounded ${
          stage.description ? "w-[1000px]" : "w-[334px]"
        } ${
          level < 2 ? "px-2 m-1" : "m-[1px] min-h-[2px]"
        } ${selected} flex-col`}
        style={{
          boxShadow: "0px 0px 100px 5px #FFFFFF inset",
          background: "#D9D9D980",
        }}
        onMouseEnter={() => {
          groupSelect(selectStroke(true, stage), [stage.name]);
        }}
        onMouseLeave={() => {
          groupSelect(selectStroke(false, stage), []);
        }}
      >
        {level < 2 && stage.name}
      </button>
      <div className="flex flex-col">
        {stage.children
          ?.map((subStage) => (
            <RenderCards
              stage={subStage}
              parents={parents.concat(stage)}
              toggleStage={toggleStage}
              parentsSelect={groupSelect}
              showCard={showCard}
              level={level + 1}
            />
          ))
          .filter((elem, i) => level < 2 || i < 3)}
      </div>
    </div>
  );
};

export default IcicleDiagram;
