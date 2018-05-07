// get width and height of the window, will be used to set svg as well as calculate element size
var w = window.innerWidth,
    h = window.innerHeight;

/*==== determine the foci center positions based on cluster attributes of nodes in network =====*/
// use a map to store key-value pairs, key be the cluster number, value be the cluster's size
var clusterCounts = new Map();
// get the sizes of all the clusters
dataset.nodes.forEach(function(node){
  if (clusterCounts.has(node.cluster)){
    // if the cluster key is already in Map, then set the count number to be + 1
    clusterCounts.set(node.cluster, clusterCounts.get(node.cluster) + 1);
  }
  else{
    // if the first time encounter the cluster, add it to the Map and set count to be 1
   clusterCounts.set(node.cluster, 1);
  }
  });

// use an array to store the cluster number that we will draw a hull around
var clusterCollections = [];

// get the cluster id for those clusters with more than three nodes in them
for (var [clusterId, nodesCount] of clusterCounts){
  if (nodesCount >= 3) {
    clusterCollections.push(clusterId);
  }
};

// determine which cluster has the most nodes in it
maxSize = -1;

for (value of clusterCounts.values()){
  maxSize = d3.max([value, maxSize]);
};

maxCluster = undefined;

for (var [clusterId, nodesCount] of clusterCounts){
  if (nodesCount == maxSize) {
    maxCluster = clusterId;
  }
};

// helper function to move elements in an array from a given position to a desired position
// a hint on javascript:
// javascript is prototype based programming model
// prototype is similar to objects in Java
// here we are simple adding a method called move to the javascript default array prototype
// The splice() method changes the content of an array by removing existing elements and/or adding new elements.
Array.prototype.move = function(from, to) {
    this.splice(to,  // index at which to start changing the array
                0,   // the index of the old element to be removed
                this.splice(from, 1)[0] // the element to add to array in the begining position of the array
                );
};

// move the cluster number of the largest cluster to the front of the array
clusterCollections.move(clusterCollections.indexOf(maxCluster), 0);

// generating foci positions for clusters
// What I did here is to set the largest cluster to be in the center of the plot
// and set the other clusters to be evenly distributed along a circle around the center cluster
var radius = Math.sqrt(Math.pow(w,2)+Math.pow(h,2))/2;

// the center is for the largest cluster
foci = [{x: w/2, y: h/2}];

// the rests are distributed around
for (i = 1; i < clusterCollections.length; i++){
  foci.push({x: w/2 + radius*Math.cos(2*Math.PI/clusterCollections.length*i),
             y: h/2 + radius*Math.sin(2*Math.PI/clusterCollections.length*i)});
}

/*==== end of foci calculation code =====*/

// old code, hard coded focis
// define foci
// we have to pre-define the center of each foci
// based on the example: https://bl.ocks.org/mbostock/1021953
//var foci = [{x: 800, y: 500}, {x: 2000,y: 100}, {x: -200, y: 0}, {x: 3000, y: 100}, {x: 3000, y: 500},
//      {x: 3000, y: 1000},{x: 3000, y: 1500},{x: 3000, y: 2000}];
//
//      s
/*==== prepare data and fucntion for drawing convex hulls =====*/
// group nodes based on their cluster id
var groups = d3.nest()
  .key(function(d){
    // d is a node
    return d.cluster;})
  .entries(dataset.nodes);

// a group path is a description of the outter boundary shaped by connect all the nodes in a group
// followed the example: http://bl.ocks.org/donaldh/2920551
var groupPath = function(d) {
    // d is a node in the group
    dvalue = "M" +
      d3.geom.hull(d.values.map(function(i) { return [i.x, i.y]; }))
        .join("L")
    + "Z";
    if (dvalue == "MZ"){
      // if the hull only contains one or two nodes, the dvalue will be "MZ"
      // this will cause problem when drawing the hull
      // change them to M 0 0 L 0 0 Z, so that browser will draw an invisible hull for them
      // at the top left cornor.
      dvalue = "M 0 0 L 0 0 Z";
    }
    // the dvalue will be the d attribute value for path elements in svg to represent the hulls
    return dvalue;
};

// color different group Path with different color
var groupFill = function(d, i) { return fill(i%fill.range().length); };
/*==== end of convex hull drawing preparing =====*/
