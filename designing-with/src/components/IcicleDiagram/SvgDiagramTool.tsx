import { useEffect, useRef } from "react";
import * as d3 from "d3";

interface Node {
  id: string;
  group: number;
  x?: number;
  y?: number;
}

interface Link {
  source: string;
  target: string;
}

export const SvgDiagram = ({
  jsonDiagramUrl,
  desiredWidth = 1200,
  desiredHeight = 300,
}: {
  jsonDiagramUrl: string | undefined;
  desiredWidth?: number;
  desiredHeight?: number;
}) => {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const margin = { top: 0, right: 0, bottom: 0, left: 0 },
      width = desiredWidth - margin.left - margin.right;

    const columns = 4;
    const columnWidth = (width - 12) / columns - 30;

    const titles = ["Design Phase", "AI Capability", "Data Input (From)", "Data Output (To)"]; // Add your titles here

    fetch("/assets/data/json/" + jsonDiagramUrl)
      .then(response => response.json())
      .then((data: { nodes: Node[]; links: Link[] }) => {
        console.log(data);

        const numRow = Math.max(
          ...data.nodes.map(
            node => data.nodes.filter(n => n.group === node.group).length
          )
        );

        const newHeight = numRow * 50 + 20;

        if (ref.current) {
          d3.select(ref.current).selectAll("*").remove();

          const svg = d3
            .select(ref.current)
            .attr("width", width + margin.left + margin.right)
            .attr("height", newHeight + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

          // Add titles above columns
          titles.forEach((title, index) => {
            svg
              .append("text")
              .attr("class", "title")
              .attr("font-family", "Helvetica")
              .attr("font-size", 15)
              .attr("x", index === 0 ? index * columnWidth + columnWidth / 2 - 135 : index === 1 ? index * columnWidth + columnWidth / 2 - 80 : index === 2 ? index * columnWidth + columnWidth / 2 - 95 : index * columnWidth + columnWidth / 2 - 25)
              .attr("y", +15)
              .style("text-anchor", "start")
              .text(title);
          });

          data.nodes.forEach((node: Node) => {
            const column = node.group - 1.2;
            const row = data.nodes.filter(n => n.group === node.group).indexOf(node);
            node.x = column * columnWidth + columnWidth / 2 + 12 * (1200 / width);
            node.y = row * 50 + 30; // Row height
          });

          svg
            .selectAll(".link")
            .data(data.links)
            .enter()
            .append("path")
            .attr("class", "link")
            .attr("d", d => {
              const source = data.nodes.find(node => node.id === d.source)!;
              const target = data.nodes.find(node => node.id === d.target)!;
              const sourceX = source.group === 1 ? source.x! + 20 : source.x! + 80;
              const sourceY = source.y! + 20;
              const targetX = source.group === 2 ? target.x! - 80 : source.group === 3 ? target.x! - 40 : target.x! - 80;
              const targetY = target.y! + 20;

              const controlX = sourceX + (targetX - sourceX) / 2;
              const controlY = sourceY;

              return `M${sourceX},${sourceY}C${controlX},${controlY} ${controlX},${targetY} ${targetX},${targetY}`;
            })
            .style("fill", "none")
            .style("stroke", "#B777F7");

          data.nodes.forEach((node: Node) => {
            console.log(node);
            svg
              .append("rect")
              .attr("class", "square")
              .attr("width", 10)
              .attr("height", 10)
              .attr("x", node.group === 1 ? node.x! + 20 : node.group === 3 ? node.x! - 80 : node.group === 4 ? node.x! - 50 : node.x! - 80)
              .attr("y", node.y! + 15)
              .style("fill", "#B777F7");
            
            if(node.group !== 1 && node.group !== data.nodes[data.nodes.length - 1].group){
              svg
                .append("rect")
                .attr("class", "square")
                .attr("width", 10)
                .attr("height", 10)
                .attr("x", node.x! + 80)
                .attr("y", node.y! + 15)
                .style("fill", "#B777F7");
            }
          });

          data.nodes.forEach((node: Node) => {
            svg
              .append("text")
              .attr("class", "label")
              .attr("font-family", "Helvetica")
              .attr("font-size", 18 * (width / 1200))
              .attr("dx", node.group === 1 ? -93 : node.group === 2 ? 0 : node.group === 3 ? 0 : 70)
              //node.x! > width / 2 ? 40 : 0)
              .attr("dy", 25)
              .attr("x", node.x!)
              .attr("y", node.y!)
              .style("text-anchor", node.group === 1 ? "start" : "middle")
              .text(node.id.replace("(From)", "").replace("(To)", ""));
          });
        }
      });
  }, [jsonDiagramUrl, desiredWidth, desiredHeight]);

  return (
    <div className="w-full flex flex-row justify-start">
      <svg ref={ref} />
    </div>
  );
};