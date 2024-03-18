import { useEffect, useRef, useState } from "react";
import dataJson from "../../assets/tests/data_full.json";
import { FilterArg, filterIcicleData } from "./FilterUtils";

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
                />
              ))
            : activeStages[activeStages.length - 1].children?.map(
                (subStage) => (
                  <RenderCards
                    stage={subStage}
                    parents={activeStages}
                    toggleStage={toggleStage}
                    showCard={showCard}
                    level={-activeStages.length}
                  />
                )
              )}
        </div>
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
  targetHeight = -1,
}: {
  stage: IcicleData;
  parents: IcicleData[];
  toggleStage: (stage: IcicleData, parents: IcicleData[]) => void;
  parentsSelect?: (select: string) => void;
  showCard?: (card: IcicleData | null) => void;
  level?: number;
  targetHeight?: number;
}) => {
  const [selected, setSelected] = useState<string>("");
  const [showContent, setShowContent] = useState<boolean>(false);
  const [height, setHeight] = useState(targetHeight);
  const ref = useRef(null);

  useEffect(() => {
    // @ts-ignore
    if (ref.current) setHeight(ref.current.clientHeight);
  });

  const groupSelect = (select: string) => {
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
    <div
      className={`flex flex-row transition-all ${
        level == 1
          ? "h-[30px]"
          : targetHeight > 0
          ? `h-[${height}px]`
          : "flex-1"
      }`}
      style={{
        opacity: Object.keys(stage).includes("inFilter")
          ? stage.inFilter
            ? 1
            : 0.5
          : 1,
      }}
      ref={ref}
    >
      <button
        key={stage.name}
        onClick={() => {
          if (stage.description) {
            if (!showContent) showCard(stage);
            else showCard(null);
            setShowContent((prev) => !prev);
            groupSelect(selectStroke(false));
          } else toggleStage(stage, parents);
        }}
        className={`flex bg-white rounded ${
          stage.description ? "w-[1000px]" : "w-[334px]"
        } ${level < 2 ? "px-2" : "px-[0.1px]"} ${
          level < 2 ? "m-1" : "m-[1px]"
        } ${selected} flex-col`}
        onMouseEnter={() => {
          if (!showContent) groupSelect(selectStroke(true));
        }}
        onMouseLeave={() => {
          if (!showContent) groupSelect(selectStroke(false));
        }}
      >
        {level < 2 && stage.name}
      </button>
      <div className="flex flex-col">
        {stage.children?.map((subStage) => (
          <RenderCards
            stage={subStage}
            parents={parents.concat(stage)}
            toggleStage={toggleStage}
            parentsSelect={groupSelect}
            showCard={showCard}
            level={level + 1}
            // @ts-ignore
            targetHeight={level > 1 ? height / stage.children?.length ?? 1 : -1}
          />
        ))}
      </div>
    </div>
  );
};

export default IcicleDiagram;
