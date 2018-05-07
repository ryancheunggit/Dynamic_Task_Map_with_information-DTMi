/* Searching functions */

// an array to store all the matching indices
var nodeIndices;
// use this variable to indicate the index of node in the nodeIndices array that's currently been highlighted
var currentSelected = 0;

// Callback for processing keypresses in the Search field
/**
 * use search term to find nodes
 * @param  ele the text input box from html
 */
function search(ele){
	// convert search term to lowercase
    var phrase = ele.value;
    var searchPhrase = phrase.toLowerCase();
    //console.log (event);
    if (event.keyCode == 13){

    	// clear previous node index info
    	nodeIndices = [];
		// console.log ("searching " + dataset.nodes.length + " nodes for " + searchPhrase);

		// flag indicate found or not  + comment out, since we can use the length of the array to determine found or not
		// var tmpFound = false;

	    // search for search term in short names of nodes
	    dataset.nodes.forEach(function(node){
	    	if (node.name.toLowerCase() == searchPhrase){
	    		// console.log("found " + node.name + " which is " + node.fullName ); // debug output
		    	tmpFound = true;
		    	nodeIndices.push(node.index);
		    	// console.log (nodes[0][node.index]); // debug output
		    	// simulateClickNode(node); // click the node found
			}
	    });
	    // if no exact match of the search term within the short names, search for exact/partial match within full names
	    if (nodeIndices.length == 0){
			// console.log ("did not find " + searchPhrase);
			dataset.nodes.forEach(function(node){
				if (node.fullName.toLowerCase() == searchPhrase.toLowerCase() ||
					node.fullName.toLowerCase().indexOf(searchPhrase.toLowerCase())!=-1 ){
					// console.log("found " + node.fullName + " which is " + node.name ); // debug output
					tmpFound = true;
		    		nodeIndices.push(node.index);
					// console.log (nodes[0][node.index]); // debug output
					// simulateClickNode(node); // click the node found
				}
	    	});
		}
		if (nodeIndices.length > 0){
			// if there are matches, click the first matching node
			currentSelected = 0;
			clickANode(currentSelected);
			// show number of matching nodes on page
			d3.selectAll("p#numberFound").text("found " + nodeIndices.length + " results");

		}else{
			// if there are no matches, show a message using alert
    		alert("Did not find nodes matching " + phrase);
    	}
    }
}

/**
 * click on the next matching result
 */
function next(){
	// will only perform action if the search result has more than 1 node in it
	if (nodeIndices.length > 1){
		// increment the index
		currentSelected += 1;
		// if iterate over the array entirely, than start over again
		if (currentSelected >= nodeIndices.length){
			currentSelected = 0;
		}
		clickANode(currentSelected);
	}
}

/**
 * perform same action as use click on a node much simplified than the original one,
 * wich literally simulate a click, rather than perform same tasks as click.
 * This function is really cool!
 * @param  {object} a node
 */
function simulateClickNode(aNode){
	nodes.each(function(node, index) {
	if (index == aNode.index){
        onClickFunc = d3.select(this).on("click");
        onClickFunc.apply(this, [node, index]);
    }
	});
}

/**
 * click a node based on the index of the node
 * @param  {integer} nodeIndex: the index of a node
 */
function clickANode(nodeIndex){
	dataset.nodes.forEach(function(node, index){
		if (index == nodeIndices[nodeIndex]){
			simulateClickNode(node);
		}
	});
}

/*  // the old simulateClickNode funcgtion
function  simulateClickNode (node){
	console.log(node.index);
    //     this is SVGCircleElement
    //     d is the associated data object
    var notThis = nodes[0][node.index];

    // console.log ("circle  " + notThis);
    // console.log( "node " + node );
	// d3.selectAll("p") .text(node.name + " " + node.fullName + " " + node.size );
    d3.selectAll("p#prompt").text("\""+ node.fullName + "\" transaction code: " + node.name ); //d.size

    // update the record of selections
    var newSelectedNodeID = d3.select(notThis).attr("id"); // find id of selected node

    // console.log("new selected node id" + newSelectedNodeID );
    // console.log("old selected node id" + selectedNodeID );
    if (newSelectedNodeID != selectedNodeID){
		if (selectedNodeID != -1){
	    	restoreFromPreviousSelection(adjacentNodes, selectedNodeID);
		}
		selectedNodeID = newSelectedNodeID;

		d3.select(notThis).attr("show", "selected");

		// and the adjacent nodes
		adjacentNodes = findAndColorAdjacentNodes(selectedNodeID, dataset.edges);


		//adjacentNodes.map(
		//    function (adjnode){
				// console.log("Current adjacent node " + adjnode.attr("id"));
		//    });


		hideAllNonAdjacentNodes(adjacentNodes);

		// now color the new selection
		highlightSelectedNodeAndLabel();

		// zoom
		cx = d3.select(notThis).attr("cx"); // find id of selected node
		cy = d3.select(notThis).attr("cy"); // find id of selected node

		var k = 1;  // must be proportionate to the max distance
		zoomListener.translate([(w/2 - k*cx), (h/2 - k*cy)  ]).scale(k);;
		zoomListener.event(g.transition().duration(500));
    }
}

*/
