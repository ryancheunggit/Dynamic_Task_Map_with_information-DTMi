/**
*  MyZoom.js
*/
/*
var x = d3.scale.linear()
    .domain([0, leftPanelWidthPercent*w])
    .range([0, leftPanelWidthPercent*w]);

var y = d3.scale.linear()
    .domain([0, leftPanelHeightPercent*h])
    .range([0, leftPanelHeightPercent*h]);

var zoomListener = d3.behavior.zoom()
    .x(x)
    .y(y)
    .size([leftPanelWidthPercent*w, leftPanelHeightPercent*h])
    //.scaleExtent([0.1, 3])
    .on("zoom", zoomHandler);

function zoomHandler(){
    // console.log("zoomHandler");

    g.attr("transform", "translate(" + d3.event.translate +
	     ")scale(" + d3.event.scale +")"  );
}

zoomListener(g);
*/

// zoom in at the beginning
zoomListener.translate([150, 100]).scale(0.618);
zoomListener.event(g.transition().duration(500));
