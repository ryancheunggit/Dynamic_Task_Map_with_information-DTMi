/**
* InitDiagram.js
*/

// get width and height of the window, will be used to set svg as well as calculate element size
var w = window.innerWidth,
    h = window.innerHeight;

// set font style
var fontSizeTitle = "15px";
var fontSizeBumpTitle = "30px";
var fontSizeSelectedTitle = "25px";
var fontSizeAdjacentTitle = "20px";
var hideOpacity = 0.3;
var leftPanelWidthPercent = 0.7;
var leftPanelHeightPercent = 0.85;
var rightPanelWidthPercent = 0.25;
var rightPanelHeightPercent = 0.85;

// Define the SCALING FUNCTION for the circle size based on the size of nodes
var minNodeSize = d3.min(dataset.nodes, function(d){return d.size;});
var maxNodeSize = d3.max(dataset.nodes, function(d){return d.size;});
var maxLinkFreq = d3.max(dataset.edges, function(d){return d.freq;});

var cirlceSizeScale = d3.scale.linear()
  .domain([minNodeSize, maxNodeSize])
  .range([ (w+h)/200, (w+h)/100]);
  //.range([20, 60]);

// getter methods
function getCircleSizeScale () {
    return cirlceSizeScale;
}

function getMainSvg(){
   return svg;
 }

// Create SVG element
var  svgOther = d3.select("body")
  .append("svg")
  .attr("width", leftPanelWidthPercent*w)
  .attr("height", leftPanelHeightPercent*h);

// scale for zooming functionality
var x = d3.scale.linear()
    .domain([0, leftPanelWidthPercent*w])
    .range([0, leftPanelWidthPercent*w]);

var y = d3.scale.linear()
    .domain([0, leftPanelHeightPercent*h])
    .range([0, leftPanelHeightPercent*h]);

// define the zoom behavior
var zoomListener = d3.behavior.zoom()
    .x(x)
    .y(y)
    .size([leftPanelWidthPercent*w, leftPanelHeightPercent*h])
    .scaleExtent([0.1, 3])
    .on("zoom", zoomHandler);

// register the zoom behavior on the g element that wrap up a rectangular empty element
// and another g element which contains the actual visual elements
var zoomG = svgOther
  .append("g");

zoomListener(zoomG);
// this rectangular element is the trick to make the draging on background work, magic!
var rect = zoomG.append("rect")
    .attr("width", leftPanelWidthPercent*w)
    .attr("height", leftPanelHeightPercent*h)
    .style("fill", "none")
    .style("pointer-events", "all");

// this `g` element is used to group nodes, labels as well as edges
// added to the svg element later on
var g = zoomG
    .append("g");

// zoom handler
function zoomHandler(){
    // console.log("zoomHandler");
    g.attr("transform",
        "translate(" + d3.event.translate + ")scale(" + d3.event.scale +")"
        );
}

// add another svg element for displaying infomation about the node
var svgInfo = d3.select("body")
  .append("svg")
  .attr("id", "info")
  .attr("width", rightPanelWidthPercent*w)
  .attr("height", leftPanelHeightPercent*h);

//
//==========================================================

/**
Nodes coloring
(see also http://colorbrewer2.org/)
*/
var usualColor = "#a6bddb";
var usualBorderColor = "blue";
var selectedColor = "yellow";
var black = "black";
//var fill = d3.scale.category20();
var fill = d3.scale.ordinal()
  .domain([0,1,2,3,4,5,6,7,8,9,10,11])
  .range(['#a6cee3','#1f78b4','#b2df8a','#33a02c','#fb9a99','#e31a1c','#fdbf6f','#ff7f00','#cab2d6','#6a3d9a','#ffff99','#b15928']);

var maxIntensityColor ="rgb(179,0,0)"; //"rgb(0,109,44)";
var minIntensityColor = "rgb(254,240,217)"; // "rgb(237,248,233)";
var colorScale = d3.scale.quantize()
    .domain([ 1, maxLinkFreq])
   // .range(["rgb(237,248,233)", "rgb(186,228,179)", "rgb(116,196,118)", "rgb(49,163,84)",maxIntensityColor]);
    .range(["rgb(254,240,217)", "rgb(253,204,138)", "rgb(252,141,89)", "rgb(227,74,51)"]);

// draw the fullName text for nodes at the begining
// try move this code to NodesCode.js after nodes entered
// it did solved the problem...
/*
var  labels = g.selectAll("text")
    .data(dataset.nodes)
    .enter()
    .append("text")
      .attr("label-id", function (d,i) {return i;} )
      .attr("show", "l-plain")   // plain or adjacent or selected so we can hide/show
      //  I changed the positions to be out side the window display, so that they won't show as a black block at the begining
      .attr ("x", -300)
      .attr("y", -300)
      //.attr ("x", 300)
      //.attr("y", 300)
      .text(function(d) {return d.fullName;});
*/
// draw the edges at the begining
var edges = g.selectAll("line")
  .data(dataset.edges)
  .enter()
    .append("line")
    .attr("source", function (d,i) {return d.source;})
    .attr("target", function (d,i) {return d.target;})
  .style("stroke", "#ccc")
  .style("stroke-width", 0);  // set to 0 so that it is not showing up!

// Set up the Force Layout
var force = d3.layout.force()
  .nodes(dataset.nodes)
  .links(dataset.edges)
  .friction(0.25) // higher value the less friction, rings would appear, lower value would course nodes to scatter irregularly.
  .size([0.5*w,0.25*h]) // affect the size and also the center location of the visualization
  .linkDistance(function(edge){return w/(3*edge.freq);})
  // closer nodes will correspond to more frequent transitions // ([(w+h)/10])
  .charge(function(node){return -500*cirlceSizeScale(node.size);}) // how much nodes repell/attract (-/+) each other
  .chargeDistance(h) // how much nodes repell/attract (-/+) each other
  .start();

/**
 *  calculate the offset needed to move from center of the dot to the circumference
 * @param  {list} d: the node
 * @param  {String} type: indicating whether the node is source or target node
 * @param  {String} direction: indicating vertical or horizontal direction
 * @return {number} offset: the amount to move in the direction
 */
var calculateOffset = function(d, type, direction){
  // get the radius of the node
  if (type == "source"){
    R = cirlceSizeScale(d.source.size);
  }else{
    R = cirlceSizeScale(d.target.size);
  }

  // get the vector from target to the source
  dx = d.target.x - d.source.x;
  dy = d.target.y - d.source.y;

  // calculate the offset
  if (direction == "x"){
    offset = dx/Math.sqrt(dx*dx + dy*dy);
  }else{
    offset = dy/Math.sqrt(dx*dx + dy*dy);
  }

  // this branching is needed because NaN could generated with offset calculation
  // for the nodes that points to themselves
  if (d.source.x == d.target.x && d.source.y == d.target.y){
    return 0;
  }else{
    return R*offset;
  }
}

/**
 * collision detection and handling
 * Note: if the label adjustment is not enough to resolve the label overlapping problem, turn this on in ontick function
 * adapted from http://bl.ocks.org/mbostock/7881887
 * @param  {numeric} alpha: after experiment I think alpha controls the amount of repell
 * @return {function} collide(): a call back function that can detect and handle collision for nodes
 * this doesnot solve label collision perfectly, but it does a good job in keeping nodes reasonably aprt
 * so combined with code dedicated with label overlap adjustment when click a node will prevent label overlapping
 */
function collide(alpha) {
  // A quadtree is a two-dimensional recursive spatial subdivision.
  // can be used for collision detection
  // much faster than try to check combinations using nested loops.
  var quadtree = d3.geom.quadtree(dataset.nodes);

  /* set up padding and radius, will be used for collision detection and handling
     increase the number if the collision is problematic
     imaginable that huge dataset will have this sort of problem*/
  var padding = 50, // the amount of space between circles
      radius = 10;

  return function(d) {
    // trying to seperate nodes
    var rb = 2*radius + padding,
        nx1 = d.x - rb,
        nx2 = d.x + rb,
        ny1 = d.y - rb,
        ny2 = d.y + rb;
    quadtree.visit(function(quad, x1, y1, x2, y2) {
      if (quad.point && (quad.point !== d)) {
        var x = d.x - quad.point.x,
            y = d.y - quad.point.y,
            l = Math.sqrt(x * x + y * y);
          if (l < rb) {
          l = (l - rb) / l * alpha;
          d.x -= x *= l;
          d.y -= y *= l;
          quad.point.x += x;
          quad.point.y += y;
        }
      }
      return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
    });
  };
}

// Define force redrawing behavior
force.on("tick", function(e){
	// push nodes in the major clusters to its assigned foci center
  dataset.nodes.forEach(function(node, index){

  pos = clusterCollections.indexOf(node.cluster);
  if (pos >= 0){
    pushForce = 0.8;
    // the number here controls the amount of force applied to the nodes in each cluster/hull
    // to move them towards the center
    node.y += (foci[pos].y - node.y) * pushForce * e.alpha;
    node.x += (foci[pos].x - node.x) * pushForce * e.alpha;
   }
  })

  // Update the position of nodes according to the force layout
  nodes
    .attr("cx", function(d){ return d.x;} )
    .attr("cy", function(d){ return d.y;} );

  // calling the collision detection and handling.
  // might need to uncomment this and tweak the number when dataset is huge
  // nodes.each(collide(0.25));

  // Using offset to move the start and end of the edge to the circumference of associated nodes
  edges
    .attr("x1", function(d){return d.source.x + calculateOffset(d, "source", "x");})
    .attr("y1", function(d){return d.source.y + calculateOffset(d, "source", "y");})
    .attr("x2", function(d){return d.target.x - calculateOffset(d, "target", "x");})
    .attr("y2", function(d){return d.target.y - calculateOffset(d, "target", "y");});

  // set the position of labels according to the force layout of associated nodes
  labels
  .attr("x", function(d){return d.x; })
	.attr("y", function(d){return d.y; })
  .attr("class", "label") //  add a class field for the labels.
	.attr("fill",  "black")
  .attr("font-family", "sans-serif")
  .attr("font-size", function (d, i){
  // selected node has larger title
	    if (i == selectedNodeID){
		    return fontSizeSelectedTitle;
      }else{
            return fontSizeTitle;
      }})
	.style("text-anchor", "middle")
	.text (function(d) {return d.fullName;});

  // draw the paths, they will look like hulls bound group of nodes
	hulls
    .style("fill", groupFill)
    .style("stroke", groupFill)
    .style("stroke-width", 100)
    .style("stroke-linejoin", "round")
    .style("opacity", .5)
    .attr("d", groupPath);
  // debug code, see the color for each hull
  // hulls.data().forEach(function(d,i) {console.log(d + '' + i);console.log(groupFill(d,i))});
})

// by the end of this js script, the nodes are not drawn yet.
// but the labels and edges are drawn but not visable to viewer.  
