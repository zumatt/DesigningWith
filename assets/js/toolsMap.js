// Get a reference to the SVG element
var svg = document.getElementById("toolsMapDesigningWith");

// Add a click event listener to the SVG
svg.addEventListener("click", function(event) {
  // Get the target element that was clicked
  var target = event.target.parentElement;

  console.log(target.id);

  // Check if the clicked element is a node (based on its ID or other attributes)
  if (target.id === "Phase"){
    toggleVisibility("Phase", "Activities");
  } else if(target.id === "Activities"){
    toggleVisibility("Activities", "Inputs");
  } else if(target.id === "Inputs"){
    toggleVisibility("Inputs", "Outputs");
  } else if(target.id === "Outputs"){
    toggleVisibility("Outputs", "Tools");
  } else if(target.id === "Tools"){
  }
});

function toggleVisibility(stringSelected, stringNext) {
    if (document.getElementById(stringSelected).classList.contains("nodeVisible") && document.getElementById(stringNext).classList.contains("nodeVisible")) {
      document.getElementById(stringNext).classList.remove("nodeVisible");
      document.getElementById(stringNext).classList.add("nodeInvisible");
    } else if (stringNext != "None" && document.getElementById(stringNext).classList.contains("nodeInvisible")) {
      document.getElementById(stringNext).classList.remove("nodeInvisible");
      document.getElementById(stringNext).classList.add("nodeVisible");
    };
};