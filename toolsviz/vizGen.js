/*
   Data visualization for the project Designing With.

       Created by Matteo Subet (link.zumat.ch) - Last version 10th july 2023

   SUPSI - Scuola Universitaria della Svizzera Italiana
   DACD  - Dipartimento Architettura Costruzioni e Design
   IDe   - Istituto di Design
*/

//Declare dimensions for the viewport of the dendrogram
if (screen.width <= 1500){var width = 1500;}else{var width = screen.width;}
var height = 9000;


if(screen.width > 2000){
    var legend = d3.select("body").append("div")
        .attr("width", width)
        .attr("style", "z-index: 1; height:" + (height+134) + "px;" + " display: flex;");

    legend.append("div")
        .attr("class", "box")
        .html("Design Phase");
    legend.append("div")
        .attr("class", "box")
        .html("AI Activity");
    legend.append("div")
        .attr("class", "box")
        .html("Input");
    legend.append("div")
        .attr("class", "box")
        .html("Output");
    legend.append("div")
        .attr("class", "box")
        .html("Tool");
}
if(screen.width > 500){
    var legend = d3.select("body").append("div")
            .attr("width", width)
            .attr("class", "sticky-legend")
            .attr("style", "background-color: white; z-index: 2; float: left; position:fixed; top: 0px; left: 0px; padding-left: 10px;");

        legend.append("text")
            .attr("style", "margin-right:10px")
            .attr("class", "text-legend")
            .html("Designing With Tools Map");
}

var legend = d3.select("body").append("div")
        .attr("width", width)
        .attr("class", "sticky-legend")
        .attr("style", "background-color: white; z-index: 2; float: left; position:fixed; bottom: 0px; left: 0px; padding-bottom:5px; padding-left: 10px;");
    
    legend.append("text")
        .attr("style", "margin-right:10px")
        .attr("class", "text-legend")
        .html("<a href='http://www.designingwithai.ch'>Back to the main website</a>");

if(screen.width > 500){
    var legend = d3.select("body").append("div")
            .attr("width", width)
            .attr("class", "sticky-legend")
            .attr("style", "background-color: white; z-index: 4; float: left; position:fixed; bottom: 0px; right: 0px; padding-bottom:5px; padding-left: 10px;");
        
        legend.append("text")
            .attr("style", "margin-right:10px")
            .attr("class", "text-legend")
            .html("Visualization made by <a href='https://www.linkedin.com/in/antonella-autuori-b37913178/' target='_blank'>Antonella Autuori</a>, <a href='https://www.linkedin.com/in/zumat/' target='_blank'>Matteo Subet</a> and <a href='https://www.linkedin.com/in/ginevra-terenghi-b530b21ab/' target='_blank'>Ginevra Terenghi</a> - <a href='https://www.supsi.ch' target='_blank'>SUPSI</a> <a href='https://maind.supsi.ch' target='_blank'>MAInD</a>");
}

var legend = d3.select("body").append("div")
        .attr("width", width)
        .attr("class", "sticky-legend")
        .attr("style", "background-color: white; z-index: 4; float: right; position:fixed; top: 0px; right: 0px; padding-right: 10px;");
    
    legend.append("text")
        .attr("style", "margin-right:10px")
        .attr("class", "text-legend")
        .html("Tools access legend ->");
    
    legend.append("div")
        .attr("class", "free-legend");
    legend.append("text")
        .attr("class", "text-legend")
        .html("Free");

    legend.append("div")
        .attr("class", "freeWl-legend");
    legend.append("text")
        .attr("class", "text-legend")
        .html("Free - Waiting List");

        legend.append("div")
            .attr("class", "freemium-legend");
        legend.append("text")
            .attr("class", "text-legend")
            .html("Freemium");

            legend.append("div")
                .attr("class", "premium-legend");
            legend.append("text")
                .attr("class", "text-legend")
                .html("Premium");

// Add a scroll event listener
window.addEventListener("scroll", function() {
    var legendDiv = document.querySelector(".sticky-legend");
    var rect = legendDiv.getBoundingClientRect();
    
    if (rect.top <= 0) {
      // When the top of the div touches or goes above the top of the screen
      legendDiv.classList.add("sticky-legend-fixed");
    } else {
      // When the div is below the top of the screen
      legendDiv.classList.remove("sticky-legend-fixed");
    }
  });

//Create the html elements to visualize the dataset
var svg = d3.select("body").append("svg")
    .attr("id", "toolsViz")        
    .attr("width",width)        
    .attr("height",height);
    if(screen.width <= 2000){
        svg.attr("style", "position: absolute; left: 0; top: 100px; margin-top: -20px;");
    }else{
        svg.attr("style", "z-index: 3; position: absolute; left: 0; top: 100px; border-top:1px solid #aaaaaa; border-bottom:1px solid #aaaaaa;");
    };                
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
            .style("min-width", "200px")
            .style("padding", "30px")
            .style("z-index", "3");   

        var mouseover = function(d) {
            Tooltip
              .style("opacity", 1)
          }
          var mousemove = function(d) {
            Tooltip
              .html("<p><span style='font-weight: bold;'>" + d.id.substring(d.id.lastIndexOf(".") + 1) + "</span><br><span style='text-decoration: underline;'>Design Phase:</span> " + d.id.split(".")[1] + "<br><span style='text-decoration: underline;'>AI Activity:</span> " + d.id.split(".")[2] + "<br><span style='text-decoration: underline;'>From</span> " + d.id.split(".")[3] + " <span style='text-decoration: underline;'>to</span> " + d.id.split(".")[4] + "<br><span style='text-decoration: underline;'>Access:</span> " + d.data.cost + "</p>")
              .style("left", (event.pageX - Tooltip.node().offsetWidth - 15) + "px")
              .style("top", (event.pageY+15) + "px")
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
            .attr("transform", function(d) {return "translate(" + d.y + "," + d.x + ")"; })
            .on("mouseover", function(d){if(d.data.cost){mouseover(d);}})
            .on("mousemove", function(d){if(screen.width >= 1000){if(d.data.cost){mousemove(d);}}})
            .on("mouseleave", function(d){if(d.data.cost){mouseleave(d);}});
        
        g.selectAll(".box")
        .attr("transform", function(d){return "translate(" + d.y + "," + 0 + ")"; });

        node.append("rect")
          .attr("display", function(d){if(d.depth != 1){return "none"}else{return "block"}})
          .attr("x", -5)
          .attr("y", -5)
          .attr("width", 10)
          .attr("height", 10)
          .attr("fill", "white")
          .attr("stroke", "black")
          .attr("stroke-width", "1.5");

        node.append("rect")
          .attr("display", function(d){if(d.depth != 2){return "none"}else{return "block"}})
          .attr("x", -5)
          .attr("y", -5 )
          .attr("width", 10)
          .attr("height", 10)
          .attr("fill", "white")
          .attr("stroke", "black")
          .attr("stroke-width", "1.5")
          .attr("style", "transform: rotate(45deg);");

        node.append("circle")
            .attr("display", function(d){if(d.depth != 3){return "none"}else{return "block"}})
            .attr("style", "stroke:#000000; stroke-width:1.5px; fill: #ffffff;")
            .attr("r", 3.5);
        
        node.append("circle")
            .attr("display", function(d){if(d.depth != 4){return "none"}else{return "block"}})
            .attr("style", "stroke:#000000; stroke-width:1.5px; fill: #000000;")
            .attr("r", 3.5);

        node.append("circle")
            .attr("display", function(d){if(d.depth != 5){return "none"}else{return "block"}})
            .attr("r", 3.5);

        node.append("text")
            .attr("dy", 3)
            .attr("x", function(d) { return d.children ? -8 : 8; })
            .style("text-anchor", function(d) { return d.children ? "end" : "start"; })
            .html(function(d) {return "<a" + (d.children ? ">" : " href='" + d.data.Link + "' target='_blank'>") + d.id.substring(d.id.lastIndexOf(".") + 1); + "</a>"});
        
        
});

function diagonal(d) {
    return "M" + d.y + "," + d.x
    + "C" + (d.parent.y + 100) + "," + d.x
    + " " + (d.parent.y + 100) + "," + d.parent.x
    + " " + d.parent.y + "," + d.parent.x;
}