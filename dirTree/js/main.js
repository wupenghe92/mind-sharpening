// let rawdata;

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

function buildTree(root) {
  console.log(root)
  const margin = {top: 50, right: 90, bottom: 30, left: 90};
  const width = 900 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;
  let i = 0;
  let duration = 750;
  let root;
  let nodes;
  let counter = 0;
  let treeData = {};

 const svg = d3.select("#tree")
               .append("svg")
               .attr("width", width + margin.right + margin.left)
               .attr("height", height + margin.top + margin.bottom)

 const g = svg.append("g")
              .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

 const tree = d3.tree()
                .size([width, height]);

 const div = d3.select("body")
               .append("div")
               .attr("class", "tooltip")
               .style("opacity", 0);

}
