/*
   Data visualization for the project Designing With.

       Created by Matteo Subet (link.zumat.ch) - Last version 10th july 2023

   SUPSI - Scuola Universitaria della Svizzera Italiana
   DACD  - Dipartimento Architettura Costruzioni e Design
   IDe   - Istituto di Design

*/

//Declare dimensions for the viewport of the dendrogram
if (screen.width <= 1500){var width = 2000;}else{var width = screen.width;}
var height = 8500;  

//Create the html elements to visualize the dataset
var svg = d3.select("body").append("svg")
    .attr("id", "toolsViz")        
    .attr("width",width)        
    .attr("height",height)                
g = svg.append("g").attr("transform", "translate(-180,0)");

var cluster = d3.cluster()
    .size([height, width-150]);

var stratify = d3.stratify()
    .parentId(function(d) { return d.id.substring(0, d.id.lastIndexOf(".")); });

d3.csv("tools.csv", function(error, data) {
        if (error) throw error;

        var root = stratify(data);

        cluster(root);

        var link = g.selectAll(".link")
            .data(root.descendants().slice(1))
            .enter().append("path")
            .attr("class", "link")
            .attr("d", diagonal);

        link.style("display", function(d){if(d.depth == 1){return "none"}});

        var Tooltip = d3.select("body")
            .append("div")
            .style("position", "absolute")
            .style("opacity", 0)
            .attr("class", "tooltip")
            .style("background-color", "rgb(255 255 255 / 90%)")
            .style("border", "solid")
            .style("font", "16px sans-serif")
            .style("line-height", "32px")
            .style("border-width", "2px")
            .style("padding", "12px");   

        var mouseover = function(d) {
            Tooltip
              .style("opacity", 1)
          }
          var mousemove = function(d) {
            Tooltip
              .html("Design Phase: " + d.id.split(".")[1] + "<br>AI Activity: " + d.id.split(".")[2] + "<br>From " + d.id.split(".")[3] + " to " + d.id.split(".")[4] + "<br>Cost: " + d.data.cost)
              .style("left", (event.pageX+20) + "px")
              .style("top", (event.pageY+10) + "px")
          }
          var mouseleave = function(d) {
            Tooltip
              .style("opacity", 0)
          }


        var node = g.selectAll(".node")
            .data(root.descendants())
            .enter().append("g")
            .style("display", function(d) { return d.parent ? "" : "none"; })
            .attr("class", function(d) {if(d.data.cost == "Free, waiting list"){return "node freeWl" + (d.children ? " node--internal" : " node--leaf");}else if(d.data.cost == "Free"){return "node free" + (d.children ? " node--internal" : " node--leaf");}else if(d.data.cost == "Premium"){return "node premium" + (d.children ? " node--internal" : " node--leaf");}else if(d.data.cost == "Freemium"){return "node freemium" + (d.children ? " node--internal" : " node--leaf");}else{return "node" + (d.children ? " node--internal" : " node--leaf");}})
            .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })
            .on("mouseover", function(d){if(d.data.cost){mouseover(d);}})
            .on("mousemove", function(d){if(d.data.cost){mousemove(d);}})
            .on("mouseleave", function(d){if(d.data.cost){mouseleave(d);}});

        node.append("circle")
            .attr("r", 3.5);

        node.append("text")
            .attr("dy", 3)
            .attr("x", function(d) { return d.children ? -8 : 8; })
            .style("text-anchor", function(d) { return d.children ? "end" : "start"; })
            .text(function(d) { return d.id.substring(d.id.lastIndexOf(".") + 1); });

});

function diagonal(d) {
    return "M" + d.y + "," + d.x
    + "C" + (d.parent.y + 100) + "," + d.x
    + " " + (d.parent.y + 100) + "," + d.parent.x
    + " " + d.parent.y + "," + d.parent.x;
}