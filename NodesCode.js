/**
 *  NodesCode.js
 *  Code that goes with the nodes
 */

var selectedNodeID = -1;
//var adjacenNodeIDS=[]; // array of neighbour nodes
var adjacentNodes=[]; // array of neighbour nodes

//var svg = getMainSvg();
// bind the hulls to the svg before the nodes
// so that the hull will be on the bottom of the nodes when drawn
var hulls = g.selectAll("path")
    .data(groups)
      .attr("d", groupPath)
    .enter()
      .insert("path", "cicle")

// bind the nodes to svg
// if following the flow of the code, nodes should be drawn after than text and edges
var nodes = g.selectAll("circle")
  .data(dataset.nodes)
  .enter()
  .append("circle")
  	.attr("r", function (d) {
	  return cirlceSizeScale(d.size);} )
  	.attr("id", function (d,i) {return i;} )
  	.attr("show", "plain")   // plain or adjacent or selected so we can hide/show
  	.style("fill", usualColor)
  	.style("stroke", usualBorderColor)
  	.style("stroke-width", 2)
  	.style("opacity", 0.5)
  	// bind dragging behaivor to nodes
  	.call(force.drag);

// moved from InitialDiagram.js to here
var  labels = g.selectAll("text")
    .data(dataset.nodes)
    .enter()
    .append("text")
      .attr("label-id", function (d,i) {return i;} )
      .attr("show", "l-plain")   // plain or adjacent or selected so we can hide/show
      // I changed the positions to be out side the window display, so that they won't show as a black block at the begining
      .attr ("x", -300)
      .attr("y", -300)
      //.attr ("x", 300)
      //.attr("y", 300)
      .text(function(d) {return d.fullName;});

/* When mouse moves over the node - show the full title
  of the transaction */
// will be shown as small mouse over tool tip in Chrome
nodes.on('mouseover', function(d){
	// d is the nodes information
	// == dataset.nodes[i] for each i
    d3.select(this)
	.append("title")
	.text(d.name);
   /*     if (this.id == selectedNodeID){
	console.log("over selected")
	 }
    else
	console.log("over other") */

	// draw the information table of the mouse over node
	drawTable(d);


	}); // end of on mouseover event handler for the nodes

/**
 * handling the label overlaping
 * @param concernedLabels: an array of label ids
 * calling calculateOverLap to get amount of overlap between pairs of labels.
 * use both a total amount of overlap and an iteration number to control the times the loop runs
 * solve the collision by moving labels vertically
 */
 function labelCollisionHandling(concernedLabels){
	force.alpha(0);
	// set a initial very high value of overall overlaps
	var overlapCost = 9999;
	var iteration = 0;
	// nested loop to check all the unique combinations of labels
	while (overlapCost > 0 && iteration <= 20){
		// debug output below
		// console.log("iteration: " + iteration + " Total Overlap: " + overlapCost);
		iteration += 1;

		// clear the overlap scores
		overlapCost = 0;
		// calculate the overlap scores
		concernedLabels.forEach(function(firstId, i){
			concernedLabels.slice(i+1).forEach(function(secondId){
				// use CSS style attributor selector to get text elements about the two labels
				// any better way to do this?
				var firstLabel = d3.select("[label-id='" + firstId + "']")[0][0];
				var secondLabel = d3.select("[label-id='" + secondId + "']")[0][0];

				// calculate the overlap for these two labels
				var overlap = calculateOverLap(firstLabel, secondLabel);

				// if two labels overlaps, adjust horizontally
				if (overlap > 0){
					fy = parseFloat(firstLabel.getAttribute("y"));
					sy = parseFloat(secondLabel.getAttribute("y"));

					// move labels according to their relative positions.
					if (fy >= sy){  // first label is more towards the bottom of the plot
						firstLabel.setAttribute("y", fy + 2);
						secondLabel.setAttribute("y", sy - 2);
					}
					else{
						firstLabel.setAttribute("y", fy - 2);
						secondLabel.setAttribute("y", sy + 2);
					}
				}
				// calculate the overall overlaps
				overlapCost += overlap;
			})// end of inner forEach loop
		})// end of outer forEach loop
	}// end of while loop
}

/**
 * helper function, calculate the overlap between two labels
 * @param  label1: an <text> element for a label
 * @param  label2: an <text> element for another label
 * @return overlap: an float number representing the amount of overlap between two labels
 */
function calculateOverLap(label1, label2){
	// get the difference between two labels
	var dx = Math.abs(label1.getBBox().x - label2.getBBox().x);
	var dy = Math.abs(label1.getBBox().y - label2.getBBox().y);
	// get the minimal space needed between two labels
	var w = 0.55*(label1.getBBox().width + label2.getBBox().width);
	var h = 0.55*(label1.getBBox().height + label2.getBBox().height);
	// calculate the amount of overlap, cost less for horizontal overlaps;
	var overlap = Math.max(h - dy, 0) + 0.1 * Math.max(w - dx, 0);
	// if not over lap set this overlap amount back to zero.
	if (dx > w || dy > h){
		overlap = 0;
	}
	return overlap;
}

/***************************************************************
   * On clicking on a node, recolor it and its neighbours
*************************************************************/
nodes.on("click", function(d){
	// add this code will stop the force layout when clicked on the nodes
	force.alpha(0);

    //     this is SVGCircleElement
    //     d is the associated data object
    // console.log(this);
    // console.log(d);

    // to display information about the clicked node above the svg element
    d3.selectAll("p#prompt")
    	.text("\""+ d.fullName + "\" transaction code: " + d.name ); //d.size

    // update the record of selections
    var newSelectedNodeID = d3.select(this).attr("id"); // find id of selected node

    /* // debug printout
    console.log("new selected node id" + newSelectedNodeID );
    console.log("old selected node id" + selectedNodeID );
    */
    if (newSelectedNodeID != selectedNodeID){
    	// if clicked on a different node
		if (selectedNodeID != -1){
			// if it is not the first node been clicked
			//       then undo the previous highlighting
			//       set color to the color used at the begining
			//       set the show attribute to plain
	    	restoreFromPreviousSelection(adjacentNodes, selectedNodeID);
		}

		//
		selectedNodeID = newSelectedNodeID;
		// flag this selected node for different display style
		d3.select(this)
			.attr("show", "selected");

		// and the adjacent nodes
		adjacentNodes = findAndColorAdjacentNodes(selectedNodeID, dataset.edges);

		/* // debug output
		adjacentNodes.map(
	    	function (adjnode){
				console.log("Current adjacent node " + adjnode.attr("id"));
	   		 });
	   	*/

		hideAllNonAdjacentNodes(adjacentNodes);
		// now color the new selection
		highlightSelectedNodeAndLabel();

		// zoom
		cx = d3.select(this).attr("cx"); // find x of selected node
		cy = d3.select(this).attr("cy"); // find y of selected node

		var k = 0.83;  // must be proportionate to the max distance
		zoomListener.translate([((leftPanelWidthPercent*w)/2 - k*cx), ((leftPanelHeightPercent*h)/2 - k*cy)  ]).scale(k);;
		zoomListener.event(g.transition().duration(500));

		// store the id of nodes currently highlighting
		concernedLabels = [];

		adjacentNodes.map(function(adjnode){
			concernedLabels.push(adjnode.attr("id"));
		});
	}

	// calling function to handle label overlapping
	labelCollisionHandling(concernedLabels);

	// draw information table about the selected node
	drawTable(d);

});

/**
* FUnction to undo previous marking/coloring
*/
function restoreFromPreviousSelection(adjacentNodes, selectedNodeID){
    // recolor the previously selected node
    d3.selectAll("[id='" + selectedNodeID + "']")
    	.attr("show", "plain")
		.transition()
		.duration(500)
		.ease("bounce")
		.style("fill", usualColor)
		.style("stroke", usualColor);
           // and adjacent ones

    // and all previously adjacent nodes
    adjacentNodes.map(function(adjnode){
		adjnode
			.attr("show", "plain");
		adjnode
			.transition()
			.duration(500)
			.ease("bounce")
			.style("fill", usualColor)
			.style("stroke", usualBorderColor)
		});

    // Previous adjacent lables should be made l-plain
    var oldLargerLabels = d3.selectAll("[show='l-adjacent']" );
    oldLargerLabels
		.attr("show", "l-plain");

    // Previous selected label should be made l-plain as well
    d3.select("[show='l-selected']" )
		.attr("show", "l-plain");
//    highlightSelectedNode();
	}

function highlightSelectedNodeAndLabel(){
    //???? why isn't this coloring selceted node yellow?
    // the selected node did colored yellow in Chrome.
    d3.selectAll("[id='" + selectedNodeID + "']")
		.attr("show", "plain")
		.transition()
		.duration(500)
		.ease("bounce")
		.style("fill", selectedColor)
		.style("stroke", usualBorderColor);

	var selectedLabel = d3.select("[label-id='" +selectedNodeID + "'" );

	selectedLabel
	    .attr("show", "l-selected")
	    .style("fill", black)
	    .style("stroke", black)
	    .style("opacity", 1)
		.transition()
		.duration(400)
        .attr("font-size", fontSizeBumpTitle)
		.transition()
		.duration(400)
        .attr("font-size", fontSizeSelectedTitle);
	 /*
    d3.select("[label-id='" + selectedNodeID + "']")
	.transition()
	.duration(400)
        .attr("font-size", fontSizeBumpTitle)
	.transition()
	.duration(400)
        .attr("font-size", fontSizeSelectedTitle)
	.style("fill", black)
	.style("stroke", black)
	;
*/
}

/*
* return a selection of nodes that are neighbouring the specified node
*/
function findAndColorAdjacentNodes(nodeID, edges){
    var adjacentNodes = [];

    for (var i = 0; i < edges.length; i++) {
		if (edges[i].source.index == nodeID){
			// adjacentID will be the id of the node that source points to
		    var adjacentID = edges[i].target.index;

   			/* // debug output
		    console.log("target " + edges[i].target);
		    console.log("Added to adjacent -  node with index   " + adjacentID);
			*/

	      	// recolor the adjacent nodes
		    var  adjacent = d3.selectAll("[id='" + adjacentID + "']"); // adding .selectAll("circle"); doesn't work !

	    	adjacent
				.transition()
				.duration(500)
				.ease("bounce")
				.style("fill", colorScale (edges[i].freq*10))
				.style("stroke", maxIntensityColor);

	    	adjacent
	    		.attr("show", "adjacent");

		    // also mark the labels of adjacent nodes
		    var labelsOfAdjacent = d3.selectAll("[label-id='" + adjacentID + "']");

		    labelsOfAdjacent
				.attr("show", "l-adjacent");

		    labelsOfAdjacent
				.transition()
				.duration(400)
				.attr("font-size", fontSizeBumpTitle)
				.transition()
				.duration(400)
				.attr("font-size", fontSizeAdjacentTitle)
				.style("fill", "black")
				.style("stroke", "black")
	    		.style("opacity", 1);

            // and adjacent ones
	    	adjacentNodes.push(adjacent);
		}// end of if
    }// end of for


    // remove all links and add all links to connecting nodes
    // hide all links
    d3.selectAll("line")
		.style("stroke-width", 0);

	// highlight all out links from the source node
    var connectedEdges = d3.selectAll("[source='"+nodeID+"']")
		.style("stroke-width", 2)
		.style("stroke", maxIntensityColor);

    return adjacentNodes;
}

var hideAllNonAdjacentNodes = function(adjacentNodes){

    // make other nodes invisible
    var nonadjacentNodes =   d3.selectAll("[show='plain']");
    nonadjacentNodes
	.transition()
	.duration(500)
	.ease("bounce")
	.style("fill", "white")
	.style("stroke", "lightgrey")
    	.style("opacity", hideOpacity);

    // Make labels smaller
    var nonadjacentLbls =   d3.selectAll("[show='l-plain']");
    nonadjacentLbls
	.transition()
	.duration(400)
	.style("fill", usualBorderColor)
	.style("stroke", usualColor)
    	.style("opacity", hideOpacity);
    }

/***
Zoom function from Packing example
****/

/*
* return a selection of nodes that are neighbouring the specified node
*/
var findAdjacentNodeIDs = function (nodeID, edges){
    var adjacentNodeIDs = [];

    for (var i = 0; i < edges.length; i++) {
	if (edges[i].source.index == nodeID){
	    adjacent = edges[i].target.index;

	    d3.select(edges[i])
		.style("stroke-width", 1);  // set to 0 so that it is not showing up!

		/* // debug output
	     console.log("target " + adjacent);
	     console.log("target " + edges[i].freq);
		*/

	     adjacentNodeIDs.push(adjacent);

	    // recolor
	      // recolor the previously selected node
	    d3.selectAll("[id='" + adjacent + "']")
		.transition()
		.duration(500)
		.ease("bounce")
		.style("fill", colorScale ( edges[i].freq));
            // and adjacent ones}
    	}
    return adjacentNodeIDs;
	}
}
