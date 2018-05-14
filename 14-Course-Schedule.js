//https://leetcode.com/problems/course-schedule/description/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const list = []; //not nessassary, for topological sorting
  const g = new Graph();
  prerequisites.forEach( (pair) => {
    g.add(pair);
  });
  const visited = {};
  let temp = {};
  let result = true;
  for (let node in g.vertices) {
    visit(node);
    if (result === false) return false;
  }

  return true;

  function visit(node) {
    if (visited[node]) return;
    if (temp[node]) {
      result = false;
      g.vertices = {};
      g.edges = {};
      return;
    }
    temp[node] = true;
    if (g.edges[node]) {
      for (let m of g.edges[node]) {
        visit(m);
      }
    }

    visited[node] = true;
    temp = {};
    list.push(node);
    return;
  }
};



function Graph() {
  this.vertices = {};
  this.edges = {};
}

Graph.prototype.add = function([end, start]) {
  if (!this.vertices[start]) this.vertices[start]=true;
  if (!this.vertices[end]) this.vertices[end]=true;
  if (!this.edges[start]) this.edges[start]=[];
  if (!this.edges[end]) this.edges[end]=[];
  this.edges[start].push(end);
  return;
}


// method 1
var canFinish = function (numCourses, prerequisites) {
  let graph = [];
  let visited = [];

  for (let i = 0; i < numCourses; i++) {
    graph.push([]);
    visited.push(0);
  }

  prerequisites.forEach((coursePair, index) => {
    graph[coursePair[0]].push(coursePair[1]);
  });

  for (let i = 0; i < numCourses; i++) {
    if (!traverseGraph(i, graph, visited)) {
      return false;
    }
  }

  return true;
};

function traverseGraph(i, graph, visited) {
  if (visited[i] === -1) {
    return false;  // we came back to a course that we have visted before, we have a course cycle
  }

  if (visited[i] === 1) {
    return true;
  }

  visited[i] = -1;  // mark as visited

  for (let j of graph[i]) {  // iterate through every course that relies on this course, and traverse them
    if (!traverseGraph(j, graph, visited)) {
      return false;
    }
  }

  visited[i] = 1;

  return true; // once you have traversed through all the items, and did not find a loop, return true.
}
