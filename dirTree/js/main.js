$(function() {
  fetchData()
    .then(parseData)
    .then(buildTree)
})

function fetchData() {
  return new Promise( (resolve, reject) => {
    $.get('https://raw.githubusercontent.com/hyperscience/interview-problems/master/treedata.json').then( (response) => {
      let rawdata = JSON.parse(response).data.split('\n');
      rawdata = rawdata.slice(0, rawdata.length-1);
      return resolve(rawdata);
    });
  });
}

function parseData(rawdata) {
  return new Promise( (resolve, reject) => {
    const flatdata = [];
    rawdata.forEach( (dir) => {
      flatdata.push(dir.split('/').slice(1));
    })
    const rootData = buildTreeNode('root');
    for (let i=0; i<flatdata.length; i++) {
      let preDir = rootData;
      for (let j=0; j<flatdata[i].length; j++) {
        let filename = flatdata[i][j];
        let curDir = preDir.children.find((obj) => {
          return obj.name === filename;
        })
        if (!curDir) {
          curDir = buildTreeNode(filename);
          preDir.children.push(curDir);
          preDir = curDir;
        } else {
          preDir = curDir;
        }
      }
    }
    sortRootData(rootData);
    return resolve(rootData);
  });

  function buildTreeNode(name) {
    return {name: name, children: []};
  }

  function sortRootData(rootData) {
    const stack = [rootData]
    while (stack.length > 0) {
      let node = stack.pop();
      if (node.children.length > 1) {
        node.children.sort(sortByName);
      }
      for (let i=0; i<node.children.length; i++) {
        stack.push(node.children[i]);
      }
    }

    function sortByName(obj1, obj2) {
      if (obj1.name <= obj2.name) return -1;
      if (obj1.name > obj2.name) return 1;
    }
  }

}

function buildTree(rootData) {
  const margin = {top: 50, right: 90, bottom: 30, left: 90};
  const width = 600 - margin.left - margin.right;
  const height = 1000 - margin.top - margin.bottom;
  let i = 0;
  let duration = 750;
  let root = rootData;
  root.x0 = height/2;
  root.y0 = 0;

  const svg = d3.select("#tree")
                .append("svg")
                .attr("width", width + margin.right + margin.left)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
              	 .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  const g = svg.append("g")
               .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  const tree = d3.layout.tree()
                 .size([width, height]);
                 
  const diagonal = d3.svg.diagonal()
	                   .projection(function(d) { return [d.y, d.x]; });

  update(root);
  // d3.select(self.frameElement).style("height", "500px");


  function update(source) {
    // Compute the new tree layout.
    var nodes = tree.nodes(root).reverse(),
  	    links = tree.links(nodes);

    // Normalize for fixed-depth.
    nodes.forEach(function(d) { d.y = d.depth * 180; });

    // Update the nodes…
    var node = svg.selectAll("g.node")
  	              .data(nodes, function(d) { return d.id || (d.id = ++i); });

    // Enter any new nodes at the parent's previous position.
    var nodeEnter = node.enter().append("g")
                    	  .attr("class", "node")
                    	  .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
                    	  .on("click", click);

    nodeEnter.append("circle")
         	   .attr("r", 1e-6)
         	   .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

    nodeEnter.append("text")
        	   .attr("x", function(d) { return d.children || d._children ? -13 : 13; })
        	   .attr("dy", ".35em")
        	   .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
         	   .text(function(d) { return d.name; })
         	   .style("fill-opacity", 1e-6);

    // Transition nodes to their new position.
    var nodeUpdate = node.transition()
              	         .duration(duration)
              	         .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

    nodeUpdate.select("circle")
          	  .attr("r", 10)
          	  .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

    nodeUpdate.select("text")
  	          .style("fill-opacity", 1);

    // Transition exiting nodes to the parent's new position.
    var nodeExit = node.exit().transition()
  	  .duration(duration)
  	  .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
  	  .remove();

    nodeExit.select("circle")
  	        .attr("r", 1e-6);

    nodeExit.select("text")
  	        .style("fill-opacity", 1e-6);

    // Update the links…
    var link = svg.selectAll("path.link")
  	              .data(links, function(d) { return d.target.id; });

    // Enter any new links at the parent's previous position.
    link.enter().insert("path", "g")
    	  .attr("class", "link")
        .attr('d', function(d){
          var o = {x: source.x0, y: source.y0}
          return diagonal(o, o)
        });

    // Transition links to their new position.
    link.transition()
    	  .duration(duration)
        .attr('d', function(d){ return diagonal(d, d.parent) });

    // Transition exiting nodes to the parent's new position.
    link.exit().transition()
    	  .duration(duration)
    	  .attr("d", function(d) {
      		var o = {x: source.x, y: source.y};
      		return diagonal(o, o);
    	  })
    	  .remove();

    // Store the old positions for transition.
    nodes.forEach(function(d) {
    	d.x0 = d.x;
    	d.y0 = d.y;
    });
  }

  function click(d) {
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
    update(d);
  }
}
