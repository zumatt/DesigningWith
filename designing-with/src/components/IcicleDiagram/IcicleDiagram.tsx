import { RefObject, useEffect, useState } from "react";
import dataJson from "../../assets/data/data.json";
import { FilterArg, filterIcicleData } from "./FilterUtils";
import Tooltip from "@mui/material/Tooltip";
import IcicleData from "./IcicleData";
import { selectStroke, steps, toggleStage } from "./DiagramUtils";
import React from "react";

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
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const updateScreenRatio = () => {
    setHeight(window.innerHeight * 0.8);
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenRatio);
    updateScreenRatio();
    return () => window.removeEventListener("resize", updateScreenRatio);
  }, []);

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
          <p
            className="text-sm m-1"
            style={{ width: getColumnWidth(width, activeStages.length) }}
          >
            {steps[0]}
          </p>
        )}
        {activeStages.length > 1 ? (
          <div className="w-6 left-0 m-1"></div>
        ) : (
          <p
            className="text-sm m-1"
            style={{ width: getColumnWidth(width, activeStages.length) }}
          >
            {steps[1]}
          </p>
        )}
        {activeStages.length > 2 ? (
          <div className="w-6 left-0 m-1"></div>
        ) : (
          <p
            className="text-sm m-1"
            style={{ width: getColumnWidth(width, activeStages.length) }}
          >
            {steps[2]}
          </p>
        )}
        {activeStages.length > 3 ? (
          <div className="w-6 left-0 m-1"></div>
        ) : (
          <p
            className="text-sm m-1"
            style={{ width: getColumnWidth(width, activeStages.length) }}
          >
            {steps[3]}
          </p>
        )}
        {activeStages.length > 4 ? (
          <div className="w-6 left-0 m-1"></div>
        ) : (
          <p
            className="text-sm m-1"
            style={{ width: getColumnWidth(width, activeStages.length) }}
          >
            {steps[4]}
          </p>
        )}
      </div>
      <div className="flex flex-col md:flex-row h-full w-full md:overflow-x-hidden overflow-x-visible md:overflow-y-visible">
        {activeStages.map((stage) => (
          <button
            key={stage.name}
            onClick={() => toggleStageDiagram(stage, [])}
            className="hidden md:flex bg-white rounded justify-center item-center [writing-mode:vertical-rl] rotate-180 w-6 min-h-[80vh] left-0 m-1 p-1"
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
                      setPathTooltip(
                        tree.slice(0, tree.length - 1).join(" / ")
                      );
                    }}
                    width={getColumnWidth(width, activeStages.length)}
                    height={height}
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
                          setPathTooltip(
                            tree.slice(0, tree.length - 1).join(" / ")
                          );
                        }
                      }}
                      width={getColumnWidth(width, activeStages.length)}
                      heightConstraint={
                        height /
                        getNumberChildren(
                          // @ts-ignore
                          activeStages[activeStages.length - 1],
                          1
                        )
                      }
                      height={height}
                      level={1}
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
  width,
  height = 1080,
  heightConstraint = 30,
}: {
  stage: IcicleData;
  parents: IcicleData[];
  toggleStage: (
    stage: IcicleData,
    parents: IcicleData[],
    isLeave?: boolean
  ) => void;
  parentsSelect?: (select: string, tree: string[]) => void;
  showCard?: (
    card: IcicleData | null,
    initialCardRef?: RefObject<HTMLDivElement>
  ) => void;
  level?: number;
  width?: number;
  height?: number;
  heightConstraint?: number;
}) => {
  const baseBorder =
    heightConstraint < 22 && heightConstraint > 0
      ? "border-white"
      : "border-[#ededed]";
  const [selected, setSelected] = useState<string>(
    "box-border border-2 " + baseBorder
  );
  const ref = React.useRef<HTMLDivElement>(null);

  const groupSelect = (select: string, tree: string[]) => {
    parentsSelect(select, select === "" ? [] : [stage.name, ...tree]);
    setSelected(select === "" ? "box-border border-2 " + baseBorder : select);
  };

  const getStyleRow = (isFixed: boolean) => {
    if (!isFixed) {
      return {
        opacity: Object.keys(stage).includes("inFilter")
          ? stage.inFilter
            ? 1
            : 0.5
          : 1,
        flex: 1,
      };
    } else if (heightConstraint > 0) {
      return {
        opacity: Object.keys(stage).includes("inFilter")
          ? stage.inFilter
            ? 1
            : 0.5
          : 1,
        height: heightConstraint,
      };
    }
    return {
      opacity: Object.keys(stage).includes("inFilter")
        ? stage.inFilter
          ? 1
          : 0.5
        : 1,
      flex: 1,
    };
  };

  return (
    <div
      className={`flex flex-row transition-all`}
      style={getStyleRow(level > 0)}
      ref={ref}
    >
      <button
        key={stage.name}
        onClick={() => {
          if (stage.description) {
            if (ref.current) {
              showCard(stage, ref);
            } else {
              showCard(stage);
            }
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
          level < 2 ? "px-2 m-1" : "m-[1px] min-h-[2px]"
        } ${selected} flex-col`}
        style={{
          boxShadow: "0px 0px 100px 5px #FFFFFF inset",
          background: "#D9D9D980",
          width: width,
          textAlign: "left",
        }}
        onMouseEnter={() => {
          groupSelect(selectStroke(true, stage), [stage.name]);
        }}
        onMouseLeave={() => {
          groupSelect(selectStroke(false, stage), []);
        }}
      >
        {(heightConstraint < 0 || heightConstraint > 22 || level < 2) &&
          stage.name}
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
              width={width}
              heightConstraint={
                level === 0
                  ? heightConstraint / getNumberChildren(stage, 1) > 30
                    ? -1
                    : height > 1100
                    ? (30 * height) / 1100
                    : 30
                  : heightConstraint / getNumberChildren(stage, 1)
              }
              height={height}
            />
          ))
          .filter((elem, i) => level < 2 || i < 3)}
      </div>
    </div>
  );
};

const getColumnWidth = (width: number, activeStages: number) => {
  return width / (5 - activeStages) - 24 * activeStages - 15;
};

const getNumberChildren = (stage: IcicleData, depth: number): number => {
  if (depth === 0) return 1;
  return (
    stage.children?.reduce(
      (acc, child) => acc + getNumberChildren(child, depth - 1),
      0
    ) ?? 0
  );
};

export default IcicleDiagram;
