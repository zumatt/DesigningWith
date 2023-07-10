/*
   Data visualization for the project Designing With.

       Created by Matteo Subet (link.zumat.ch) - Last version 10th july 2023

   SUPSI - Scuola Universitaria della Svizzera Italiana
   DACD  - Dipartimento Architettura Costruzioni e Design
   IDe   - Istituto di Design

*/

//Declare dimensions for the viewport of the dendrogram
var width = screen.width;  
var height = 500;  

//Create the tree cluster based on the previous dimensions
var cluster = d3.layout.cluster()        
    .size([height, width+200]);  

//Create Bezier curves between nodes
var diagonal = d3.svg.diagonal()        
    .projection (function(d) { return [d.y, d.x];});  

//Create the html elements to visualize the dataset
var svg = d3.select("body").append("svg")        
    .attr("width",width)        
    .attr("height",height)        
    .append("g")        
    .attr("transform","translate(-400,0)");  

//Loop in the JSON file in order to generate the visualization
d3.json("data.json", function(error, root){        
     var nodes = cluster.nodes(root);        
     var links = cluster.links(nodes);        
     var link = svg.selectAll(".link")              
         .data(links)             
         .enter().append("path")              
         .attr("class","link")              
         .attr("d", diagonal);
     link.style("display", function(d){if(d.source.depth == 0){return "none"}});     
     var node = svg.selectAll(".node")              
         .data(nodes)            
         .enter().append("g")          
         .attr("class", function(d){if(d.depth == 0){return "firstNode"}else{return "node"};})
         .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });        
     node.append("circle")              
         .attr("r", 4.5)
         .attr("class", function(d){if(d.depth == 1){return "designPhase"}else if(d.depth == 2){return "aiActivities"};})
         .attr("id", function(d){if(d.depth == 3){return d.cost;}});        
     node.append("text")              
         .attr("dx", function(d) { return d.children ? -8 : 8; })
         .attr("dy", 3)              
         .style("text-anchor", function(d) { return d.children ? "end" : "start"; })             
         .text( function(d){ return d.name;});
});