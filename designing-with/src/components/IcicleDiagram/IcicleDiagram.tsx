import { useEffect, useState } from "react";
import dataJson from "../../assets/data/data.json";
import { FilterArg, filterIcicleData } from "./FilterUtils";
import Tooltip from "@mui/material/Tooltip";

export type IcicleData = {
  name: string;
  children?: IcicleData[];
  description?: string;
  payment?: string;
  type?: string;
  skills?: string;
  tooldiagram?: string;
  value?: number;
  link?: string;
  inFilter?: boolean;
};

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
  const [filteredData, setFilteredData] = useState<IcicleData>(dataJson);
  const [pathTooltip, setPathTooltip] = useState<string>("");
  const [tooltipColor, setTooltipColor] = useState<string>("");

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

  useEffect(() => {
    console.log(tooltipColor);
  }, [tooltipColor]);

  useEffect(() => {
    if (filters.length > 0)
      setFilteredData(filterIcicleData(dataJson, filters));
    else setFilteredData(dataJson);
  }, [filters]);

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
            onClick={() => toggleStage(stage, [])}
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
                    toggleStage={toggleStage}
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
                      toggleStage={toggleStage}
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
  toggleStage: (stage: IcicleData, parents: IcicleData[]) => void;
  parentsSelect?: (select: string, tree: string[]) => void;
  showCard?: (card: IcicleData | null) => void;
  level?: number;
}) => {
  const [selected, setSelected] = useState<string>("");
  const [showContent, setShowContent] = useState<boolean>(false);

  const groupSelect = (select: string, tree: string[]) => {
    parentsSelect(select, select === "" ? [] : [stage.name, ...tree]);
    setSelected(select);
  };

  const selectStroke = (select: boolean) => {
    if (select) {
      switch (stage.payment) {
        case "Premium":
          return "box-border border-2 border-blue";
        case "Freemium":
          return "box-border border-2 border-purple";
        case "Free":
          return "box-border border-2 border-beige";
        case "Free-Waiting List":
          return "box-border border-2 border-orange";
        default:
          return "box-border border-2 border-grey";
      }
    }
    return "";
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
            if (!showContent) {
              showCard(stage);
              toggleStage(parents[parents.length - 1], parents.slice(0, -1));
            } else showCard(null);
            setShowContent((prev) => !prev);
            groupSelect(selectStroke(false), []);
          } else {
            toggleStage(stage, parents);
            groupSelect(selectStroke(false), []);
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
          groupSelect(selectStroke(true), [stage.name]);
        }}
        onMouseLeave={() => {
          groupSelect(selectStroke(false), []);
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
