// grab a reference to the grouping elements in the Info display svg
var Info = svgInfo.append("g").attr("class", "InfoTexts");
var Table = svgInfo.append("g").attr("class", "InfoTable");
var tableBody = Table.append('g').attr('class', 'chart-group');
var tableHeader = Table.append('g').attr('class', 'chart-group');
// global variable store the histories associated with the last mouse overed nodes
var value = [];

// simple sort, return 1 if val1 > val2, -1 if val1 < val2 and 0 if val1 == val2
function simpleSort(val1, val2){
	return val1 < val2 ? -1 : (val1 > val2 ? 1:0);
}

// wrapper on simpleSort, cast val1 and val2 into Date object before passing to simpleSort
function dateSort(val1, val2){
	return simpleSort(Date.parse(val1), Date.parse(val2));
}

// set the order attribute of each cell to "none"
function clearOrder(){
    HC = d3.selectAll('rect.col-header-cell');
    HC[0].forEach(function(cell, index){
        cell.setAttribute("order", "none");});
}

// update the order symbol for each column header
function updateOrder(){
    // grab references
	HC = d3.selectAll('rect.col-header-cell');
	HT = d3.selectAll('text.col-header-content');

    // iterate over the header cells
	HC[0].forEach(function(cell, index){
        // get the order attribute of each cell
		order = cell.getAttribute("order");
        // grab a reference to the header cell text content
		text = HT[0][index].innerHTML;
        // update the sorting indication symbol based on the sorting order
		switch(order){
			case "none":
				text = text.substring(0,text.length-1) + "-";
				break;
			case "increasing":
				text = text.substring(0,text.length-1) + "&uarr;";
				break;
			case "decreasing":
				text = text.substring(0,text.length-1) + "&darr;";
				break;
		}
		HT[0][index].innerHTML = text;
	})
};

/**
 * sort the records based on the value of the desired value
 * @param  {array of arries} records      [contain user history infomation]
 * @param  {number} sortByAttributeNumber [the number of attribute to sort by]
 * @return {array of arries}              [input array sorted by each inner array's specified value]
 */
function sortNestedArray(records, sortByAttributeNumber, sortingFunction = simpleSort, increasing = true){
	// an empty array to arrays of (recordNumber, attributeValueTobeSortedBy) pairs
	sortingTuples = [];

	// push arrays of (recordNumber, attributeValueTobeSortedBy) pair to the sortingTuple array;
	for (recordNumber = 1; recordNumber <= records.length; recordNumber++){
		sortingTuples.push([recordNumber, records[recordNumber-1][sortByAttributeNumber-1]]);
	};

	// sort the array
	sortingTuples.sort(function(tuple1, tuple2){
		val1 = tuple1[1];
		val2 = tuple2[1];
		if (increasing == true) {
			return sortingFunction(val1,val2);
		}
		else{
			return sortingFunction(val2,val1);
		}
	});

    // push the sortted arrays on to a new array
	newRecords = [];

	for (i = 0; i < sortingTuples.length; i++){
		newRecords.push(records[sortingTuples[i][0]-1]);
	};

    // return the array
	return newRecords;
}

var HC;

/**
 * helper function to draw the information table header about the usage histories
 * of the last mouse over node
 * @param  {array of objects} histories [each inner object is a record of usage]
 * @param  {number} xpos      [the horizontal starting position of the table]
 * @param  {number} ypos      [the vertical starting position of the table]
 * @return none
 */
function drawInfoTableHeader(histories, xpos, ypos, columnWidth){
	// clear the previous table header
	tableHeader.text("");

    // get the header texts
	tableHeaders = Object.keys(histories[0]);

    // draw the table column header
    var HeaderCell = tableHeader.selectAll('rect.col-header-cell')
        .data(tableHeaders);

    // use colored rectangular as row header holders
    HeaderCell.enter().append('rect')
        .attr({
            class:'col-header-cell',
            width:columnWidth,
            height:30,
            x: function(dummy, colNum){return xpos + colNum * columnWidth;},
            y: ypos,
        	order: "none"})
        .style({fill:'#EEE', stroke:'silver'});

    // register event handler for onclick of the header cell
    // will redraw the table body with sorted rows
    HeaderCell.on("click",
    	function(dummyText,colIndex){
    		// get the current sorting order of the column
    		order = this.getAttribute("order");
    		if (order != "increasing"){
    			// if currently not sort by increasing order than sort and change attribute
    			if (colIndex != 1) value = sortNestedArray(value, colIndex + 1, simpleSort, true);
    			else value = sortNestedArray(value, colIndex + 1, dateSort, true);
	    		drawInfoTableBody(value, xpos, ypos+30, columnWidth);
                clearOrder();
	    		this.setAttribute("order", "increasing");
    		}
    		else{
    			// if currently increasingly ordered, than sort decreasingly and change attribtue
    			if (colIndex != 1) value = sortNestedArray(value, colIndex + 1, simpleSort, false);
    			else value = sortNestedArray(value, colIndex + 1, dateSort, false);
	    		drawInfoTableBody(value, xpos, ypos+30, columnWidth);
	    		clearOrder();
                this.setAttribute("order", "decreasing");
    		};
    		// update the symbol at the column header
    		updateOrder();
    	});

    // put the header texts into the cells
    HeaderCell.enter().append('text')
        .attr({
            class:'col-header-content',
            x: function(dummy, colNum){return xpos + colNum * columnWidth;},
            y: ypos,
        	dx: columnWidth/2,
        	dy: 20})
            .style({fill:'black', 'text-anchor':'middle'})
            .text(function(headerText){return headerText + " -";});
};


/**
 * helper function to draw the information table body about the usage histories
 * of the last mouse over node
 * @param  {array of arries} value [each inner array is a record of usage]
 * @param  {number} xpos      [the horizontal starting position of the table]
 * @param  {number} ypos      [the vertical starting position of the table]
 * @return none
 */
function drawInfoTableBody(value, xpos, ypos, columnWidth){
    // clear the previous table body text
	tableBody.text("");

    // draw the table body
    var rows = tableBody.selectAll('g.row').data(value);

    rows.enter().append('g')
        .attr('class', 'cell row')
        .each(function(cellData, rowNum){
            // draw the cell background
            var cell = d3.select(this)
                .selectAll('rect.cell')
                .data(cellData);
            cell.enter().append('rect')
                .attr({
                    class:'cell',
                    width:columnWidth,
                    height:30,
                    x: function(dummy, colNum){return xpos + colNum * columnWidth;},
                    y: function(dummy){return rowNum * 30 + ypos}})
                .style({fill:'white', stroke:'silver'});
            // add the texts
            cell.enter().append('text')
                .attr({
                    class:'cell-content',
                    width:columnWidth,
                    height:30,
                    x: function(dummy, colNum){return xpos + colNum * columnWidth;},
                    y: function(dummy){return rowNum * 30 + ypos},
                    dx: columnWidth/2,
                    dy: 20})
                .style({fill:'black', 'text-anchor':'middle'})
                .text(function(cellText){return cellText});
        });
}

/**
 * draw the infomation table about a given node
 * the vertical distance is now hard coded, please make change if needed.
 * @param  {nodeSelected} nodeSelected
 */
function drawTable(nodeSelected){
    // clear the info section contents
    Info.text("");

    // space from the left for texts and table
    xpos = 0.1*document.getElementById("info").getAttribute("width");
    ypos = 70;

    // display information about nodes on mouse over
    Info.append("text")
      .attr("text-anchor", "start")
      .text("Node Short Name: " + nodeSelected.name)
      .attr("transform", "translate(" + xpos + "," + ypos + ")");

    ypos += 30;

    Info.append("text")
      .attr("text-anchor", "start")
      .text("Node Full Name: " + nodeSelected.fullName)
      .attr("transform", "translate(" + xpos + "," + ypos + ")");

    ypos += 30;

    Info.append("text")
      .attr("text-anchor", "start")
      .text("Node Size: " + nodeSelected.size)
      .attr("transform", "translate(" + xpos + "," + ypos + ")");

    ypos += 30;

    Info.append("text")
      .attr("text-anchor", "start")
      .text("Cluster Number: " + nodeSelected.cluster)
      .attr("transform", "translate(" + xpos + "," + ypos + ")");

    ypos += 30;

    Info.append("text")
      .attr("text-anchor", "start")
      .text("Module: " + nodeSelected.module)
      .attr("transform", "translate(" + xpos + "," + ypos + ")");

    histories = nodeSelected.histories;

    if (histories.length > 0) {
        // display the user records, multiple user records will be displayed on different lines.
        numberOfColumns = Object.keys(histories[0]).length;
        numberOfRows = histories.length;

        // calculate the column width, depends on the number of columns needed in the table
        columnWidth = 0.8*document.getElementById("info").getAttribute("width")/numberOfColumns;

        // get the content in the table
        // it will be a array of arries, where each inner array contains a record of user history
        value = [];
        for (rowNum = 0; rowNum < numberOfRows; rowNum++){
            value.push(Object.keys(histories[rowNum]).map(function(key){return histories[rowNum][key]}));
        };

        drawInfoTableHeader(histories, xpos,  ypos + 30, columnWidth);
        drawInfoTableBody(value, xpos,  ypos + 60, columnWidth);
        };

}
