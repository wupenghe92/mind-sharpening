//https://leetcode.com/problems/course-schedule/description/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const g = new Graph();
  prerequisites.forEach( (pair) => {
    g.add(pair);
  });

  const checked = {};
  
};



function Graph() {
  this.vertices = {};
  this.edges = {};
}

Graph.prototype.add = function([end, start]) {
  if (!this.vertices[start]) this.vertices[start]=true;
  if (!this.vertices[end]) this.vertices[end]=true;
  if (!this.edges[start]) this.edges[start]=[];
  this.edges[start].push(end);
  return;
}
