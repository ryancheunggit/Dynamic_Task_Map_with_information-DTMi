// use a map to store module name and color mapping
var moduleAndColorMapping = new Map();
dataset.nodes.forEach(function(node){
	moduleAndColorMapping.set(node.module, fill(node.cluster + 1));
});

// add colored text legend to the html
var legendHTML = "     SAP Modules:";

for (var [module, color] of moduleAndColorMapping) {
	text = "<font color=\"" + color + "\">  " + module + "  </font>";
	legendHTML += text;
}

// append the text legend
document.getElementById("textLegend").innerHTML = legendHTML;
