import { useEffect, useRef, useState } from "react";
import dataJson from "../assets/tests/data.json";
import Filter from "./Filter";
import * as d3 from "d3";

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

const IcicleDiagram = ({
  data = dataJson,
  filters = [],
}: {
  data?: IcicleData;
  filters?: FilterArg[];
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
    console.log(filters);
    if (filters.length > 0)
      setFilteredData(filterIcicleData(dataJson, filters) ?? { name: "none" });
    else setFilteredData(dataJson);
  }, [filters]);

  useEffect(() => {
    console.log(filteredData);
  }, [filteredData]);

  return (
    <>
      <div className="flex flex-row min-w-[100%]">
        {activeStages.length > 0 ? (
          <div className="w-6 left-0 m-1"></div>
        ) : (
          <p className="text-sm w-[334px] m-1">Design Phase</p>
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
      <div className="flex flex-row h-full w-full overflow-x-hidden overflow-y-visible">
        {activeStages.map((stage) => (
          <button
            key={stage.name}
            onClick={() => toggleStage(stage, [])}
            className="flex bg-white rounded justify-center [writing-mode:vertical-rl] rotate-180 w-6 h-full left-0 m-1 h-content"
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
                />
              ))
            : activeStages[activeStages.length - 1].children?.map(
                (subStage) => (
                  <RenderCards
                    stage={subStage}
                    parents={activeStages}
                    toggleStage={toggleStage}
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
}: {
  stage: IcicleData;
  parents: IcicleData[];
  toggleStage: (stage: IcicleData, parents: IcicleData[]) => void;
  parentsSelect?: (select: string) => void;
}) => {
  const [selected, setSelected] = useState<string>("");
  const [showContent, setShowContent] = useState<boolean>(false);

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
    <div className="flex-1 flex flex-row min-w-[334px]">
      <button
        key={stage.name}
        onClick={() => {
          if (stage.description) {
            // toggleStage(parents[parents.length - 1], parents.slice(0, -1));
            setShowContent(!showContent);
            groupSelect(selectStroke(false));
          } else toggleStage(stage, parents);
        }}
        className={`flex bg-white rounded ${
          stage.description ? "w-[1000px]" : "w-[334px]"
        } px-2 m-1 ${selected} h-content flex-col`}
        onMouseEnter={() => {
          if (!showContent) groupSelect(selectStroke(true));
        }}
        onMouseLeave={() => {
          if (!showContent) groupSelect(selectStroke(false));
        }}
      >
        {((!showContent && stage.description) || !stage.description) &&
          stage.name}
        {stage.description && showContent && (
          <div className="flex flex-col w-full p-5">
            <div className="flex flex-row justify-between items-center mb-5">
              <div className="flex flex-row justify-between items-center w-[60%]">
                <h1>{stage.name}</h1>
                <Filter name={stage.payment ?? ""} color={selectStroke(true)} />
                <Filter
                  name={"Type - " + stage.type}
                  color={selectStroke(false)}
                />
                <Filter
                  name={"Skills - " + stage.skills}
                  color={selectStroke(false)}
                />
              </div>
              <button
                onClick={() => setShowContent(false)}
                className="flex bg-white rounded h-full justify-center left-0"
              >
                Close X
              </button>
            </div>
            <h2 className="mb-10">{stage.description}</h2>
            <SvgDiagram jsonDiagramUrl={stage.tooldiagram} />
          </div>
        )}
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

const SvgDiagram = ({
  jsonDiagramUrl,
}: {
  jsonDiagramUrl: string | undefined;
}) => {
  const ref = useRef();

  useEffect(() => {
    // set the dimensions and margins of the graph
    var margin = { top: 10, right: 30, bottom: 30, left: 40 },
      width = 1200 - margin.left - margin.right,
      height = 800 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3
      // @ts-ignore
      .select(ref.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Modified JSON data to include column information and title of the column

    // Define the columns
    var columns = 4;

    // Calculate column width
    var columnWidth = width / columns;

    // Upload json
    // @ts-ignore
    fetch("/assets/data/json/" + jsonDiagramUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        // Position nodes in columns and rows
        // @ts-ignore
        data.nodes.forEach(function (node) {
          var column = node.group - 1.2;
          var row = data.nodes
            // @ts-ignore
            .filter(function (n) {
              return n.group === node.group;
            })
            .indexOf(node);
          node.x = column * columnWidth + columnWidth / 2;
          node.y = row * 50; // Row height
        });

        // Draw curved links
        svg
          .selectAll(".link")
          .data(data.links)
          .enter()
          .append("path")
          .attr("class", "link")
          .attr("d", function (d) {
            // @ts-ignore
            var sourceX = data.nodes.find((node) => node.id === d.source).x;
            // @ts-ignore
            var sourceY = data.nodes.find((node) => node.id === d.source).y;
            // @ts-ignore
            var targetX = data.nodes.find((node) => node.id === d.target).x;
            // @ts-ignore
            var targetY = data.nodes.find((node) => node.id === d.target).y;

            // Bezier curve control point
            var controlX = sourceX + (targetX - sourceX) / 2;
            var controlY = sourceY;

            return (
              "M" +
              sourceX +
              "," +
              sourceY +
              "C" +
              controlX +
              "," +
              controlY +
              " " +
              controlX +
              "," +
              targetY +
              " " +
              targetX +
              "," +
              targetY
            );
          })
          .style("fill", "none")
          .style("stroke", "#B777F7"); //the color of the line equal to the color of the tool price legend

        // Draw squares
        svg
          .selectAll(".square")
          .data(data.nodes)
          .enter()
          .append("rect")
          .attr("class", "square")
          .attr("width", 20)
          .attr("height", 20)
          .attr("x", function (d) {
            // @ts-ignore
            return d.x - 10;
          })
          .attr("y", function (d) {
            // @ts-ignore
            return d.y - 10;
          })
          .style("fill", "#B777F7");

        // Draw text labels
        svg
          .selectAll(".label")
          .data(data.nodes)
          .enter()
          .append("text")
          .attr("class", "label")
          .attr("font-family", "Helvetica")
          .attr("dx", function (d) {
            // @ts-ignore
            return d.x > width / 2 ? 15 : -15;
          })
          .attr("dy", 5)
          .attr("x", function (d) {
            // @ts-ignore
            return d.x;
          })
          .attr("y", function (d) {
            // @ts-ignore
            return d.y;
          })
          .style("text-anchor", function (d) {
            // @ts-ignore
            return d.x > width / 2 ? "start" : "end";
          })
          .text(function (d) {
            // @ts-ignore
            return d.id;
          });
      });
  }, []);

  return (
    <div className="w-full overflow-x-auto">
      {/* @ts-ignore*/}
      <svg ref={ref} />
    </div>
  );
};

export type FilterArg = {
  property: string;
  values: string[];
};

function filterIcicleData(
  data: IcicleData,
  filterArgs: FilterArg[]
): IcicleData {
  // Clone the data object to avoid mutating the original
  const filteredData: IcicleData = { ...data };

  // Helper function to filter children recursively
  function filterChildren(
    children: IcicleData[] | undefined,
    filterArgs: FilterArg[]
  ): IcicleData[] | undefined {
    if (!children) return undefined;

    return children
      .map((child) => filterIcicleData(child, filterArgs))
      .filter((child) => child !== null);
  }

  // Filter the current node based on filter arguments
  for (const filterArg of filterArgs) {
    if (
      filterArg.property in filteredData &&
      // @ts-ignore
      filterArg.values.includes(filteredData[filterArg.property] as string)
    ) {
      // If the property exists and its value is in the filter values, keep it
      continue;
    } else {
      // If the property doesn't match, remove it
      // @ts-ignore
      return null;
    }
  }

  // Recursively filter children
  filteredData.children = filterChildren(filteredData.children, filterArgs);

  // If there are no children and the current node doesn't match filter conditions, return null
  if (!filteredData.children && Object.keys(filteredData).length === 1) {
    // @ts-ignore
    return null;
  }

  return filteredData;
}

export default IcicleDiagram;
