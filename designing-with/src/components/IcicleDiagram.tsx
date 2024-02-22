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
    <button
      key={stage.name}
      onClick={() => toggleStage(stage)}
      className="flex bg-white rounded h-24 px-2"
    >
      {stage.name}
    </button>
  );

  console.log(dataJson.children);

  return (
    <div className="flex flex-row h-full w-full">
      {activeStages.map((stage) => (
        <button
          key={stage.name}
          onClick={() => toggleStage(stage)}
          className="flex bg-white rounded h-full justify-center [writing-mode:vertical-rl] rotate-180 w-6 left-0"
        >
          {stage.name}
        </button>
      ))}

      {activeStages.length === 0
        ? dataJson.children?.map((stage) => renderCards(stage))
        : activeStages[activeStages.length - 1].children?.map((subStage) =>
            renderCards(subStage)
          )}
    </div>
  );
};
//   const svgRef = useRef(null);

//   useEffect(() => {
//     const width = 1200;
//     const height = 1200;

//     const stroke = (d: IcicleData) => {
//       switch (d.payment) {
//         case "Premium":
//           return "border-blue";
//         case "Freemium":
//           return "border-purple";
//         case "Free":
//           return "border-beige";
//         case "Free-Waiting List":
//           return "border-orange";
//         default:
//           return "border-black";
//       }
//     };

//     const hierarchy = d3
//       .hierarchy(data)
//       .sum((d: IcicleData) => d.value ?? 0)
//       .sort((a, b) => b.height - a.height || (b.value ?? 0) - (a.value ?? 0));
//     const root = d3
//       .partition<IcicleData>()
//       .size([height, ((hierarchy.height + 1) * width) / 3])(hierarchy);

//     const svg = d3
//       .select(svgRef.current)
//       .attr("viewBox", [0, 0, width, height])
//       .attr("width", width)
//       .attr("height", height)
//       .attr(
//         "style",
//         "max-width: 100%; height: auto; font: 10px sans-serif; overflow: visible;"
//       );

//     const cell = svg
//       .selectAll("g")
//       .data(root.descendants())
//       .join("g")
//       .attr("transform", (d) => `translate(${d.y0},${d.x0})`)
//       .attr("style", "overflow: visible;");

//     const rect = cell
//       .append("rect")
//       .attr("width", (d) => d.y1 - d.y0 - 10)
//       .attr("height", (d) => rectHeight(d) - 6)
//       .attr("rx", 6)
//       .attr(
//         "class",
//         (d) => `border-2 fill-[#D9D9D988] ${stroke(d.data)} mx-2 my-2`
//       )
//       .style("cursor", "pointer")
//       .on("click", clicked);

//     const text = cell
//       .append("text")
//       .style("user-select", "none")
//       .attr("pointer-events", "none")
//       .attr("x", 8)
//       .attr("y", 31)
//       .attr(
//         "style",
//         "font-size: 22px; font-style: normal; font-weight: 400; line-height: 110%;"
//       )
//       .attr("fill-opacity", (d) => +labelVisible(d));

//     text.append("tspan").text((d) => d.data.name);

//     const format = d3.format(",d");
//     const tspan = text
//       .append("tspan")
//       .attr("fill-opacity", (d) => +labelVisible(d) * 0.7)
//       .text((d) => ` ${format(d.value ?? 0)}`);

//     cell.append("title").text(
//       (d) =>
//         `${d
//           .ancestors()
//           .map((d) => d.data.name)
//           .reverse()
//           .join("/")}\n${format(d.value ?? 0)}`
//     );

//     let focus = root;
//     function clicked(
//       event: React.MouseEvent<HTMLElement>,
//       p: d3.HierarchyRectangularNode<IcicleData>
//     ) {
//       focus = focus === p ? (p = p.parent ?? root) : p;

//       root.each(
//         (d) =>
//           (d.target = {
//             x0: ((d.x0 - p.x0) / (p.x1 - p.x0)) * height,
//             x1: ((d.x1 - p.x0) / (p.x1 - p.x0)) * height,
//             y0: d.y0 - p.y0,
//             y1: d.y1 - p.y0,
//           })
//       );

//       const t = cell
//         .transition()
//         .duration(750)
//         .attr("transform", (d) => `translate(${d.target.y0},${d.target.x0})`);

//       rect.transition(t).attr("height", (d) => rectHeight(d.target) - 6);
//       text.transition(t).attr("fill-opacity", (d) => +labelVisible(d.target));
//       tspan
//         .transition(t)
//         .attr("fill-opacity", (d) => +labelVisible(d.target) * 0.7);
//     }

//     function rectHeight(d: d3.HierarchyRectangularNode<IcicleData>) {
//       return d.x1 - d.x0 - Math.min(1, (d.x1 - d.x0) / 2);
//     }

//     function labelVisible(d: d3.HierarchyRectangularNode<IcicleData>) {
//       return d.y1 <= width && d.y0 >= 0 && d.x1 - d.x0 > 16;
//     }
//   }, [data]);

//   return <svg ref={svgRef}></svg>;
// };

export default IcicleDiagram;
