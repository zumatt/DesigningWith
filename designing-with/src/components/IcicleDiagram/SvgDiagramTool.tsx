import { useEffect, useRef } from "react";
import * as d3 from "d3";

export const SvgDiagram = ({
  jsonDiagramUrl,
  desiredWidth = 1200,
  desiredHeight = 300,
}: {
  jsonDiagramUrl: string | undefined;
  desiredWidth?: number;
  desiredHeight?: number;
}) => {
  const ref = useRef();

  useEffect(() => {
    // set the dimensions and margins of the graph
    var margin = { top: 0, right: 0, bottom: 0, left: 0 },
      width = desiredWidth - margin.left - margin.right,
      height = desiredHeight - margin.top - margin.bottom;

    // Modified JSON data to include column information and title of the column

    // Define the columns
    var columns = 4;

    // Calculate column width
    var columnWidth = (width - 12) / columns - 30;

    // Upload json
    // @ts-ignore
    fetch("/assets/data/json/" + jsonDiagramUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        // Count the number of occurrences of each group and take the maximum to determine the number of rows
        const numRow = Math.max(
          ...data.nodes.map(
            // @ts-ignore
            (node) => data.nodes.filter((n) => n.group === node.group).length
          )
        );

        // Calculate the height of the svg
        var newHeight = numRow * 50 + 20;

        // @ts-ignore
        clearSvg(d3.select(ref.current));

        // append the svg object to the body of the page
        var svg = d3
          // @ts-ignore
          .select(ref.current)
          .attr("width", width + margin.left + margin.right)
          .attr("height", newHeight + margin.top + margin.bottom)
          .append("g")
          .attr(
            "transform",
            "translate(" + margin.left + "," + margin.top + ")"
          );

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
          node.x = column * columnWidth + columnWidth / 2 + 12 * (1200 / width);
          node.y = row * 50 + 10; // Row height
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
          .attr("font-size", 15 * (width / 1200))
          .attr("dx", function (d) {
            // @ts-ignore
            if (d.group === 1) return -85;
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
            if (d.group === 1) return "start";
            // @ts-ignore
            return d.x > width / 2 ? "start" : "end";
          })
          .text(function (d) {
            // @ts-ignore
            return d.id;
          });
      });
  }, [jsonDiagramUrl, desiredWidth, desiredHeight]);

  return (
    <div className="w-full flex flex-row justify-start">
      {/* @ts-ignore*/}
      <svg ref={ref} />
    </div>
  );
};

const clearSvg = (svg: any) => {
  svg.selectAll("*").remove();
};
