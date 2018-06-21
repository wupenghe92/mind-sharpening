//https://leetcode.com/problems/evaluate-division/description/

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}

 Given a / b = 2.0, b / c = 3.0.
 queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? .
 return [6.0, 0.5, -1.0, 1.0, -1.0 ]

 equations = [ ["a", "b"], ["b", "c"] ],
 values = [2.0, 3.0],
 queries = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ]
 */
var calcEquation = function(equations, values, queries) {
  const v = {} //variables
  const sets = [];
  for (let i=0; i<equations.length; i++) {
    const v1 = equations[i][0];
    const v2 = equations[i][1];
    if (v[v1] === undefined && v[v2] === undefined) {
      v[v2] = 1;
      v[v1] = values[i] * v[v2];
      const set = {};
      set[v1] = true;
      set[v2] = true;
      calutil(v1, set);
      calutil(v2, set);
      sets.push(set);
    }
  }

  const ans = [];
  for (let i=0; i<queries.length; i++) {
    const v1 = queries[i][0];
    const v2 = queries[i][1];
    if (v[v1] === undefined || v[v2] === undefined || !isInTheSameSet(v1,v2)) {
      ans.push(-1.0);
      continue;
    }
    const res = Number.parseFloat((v[v1]/v[v2]));
    ans.push(res);
  }
  return ans;

  function calutil(v0, set) {
    for (let i=0; i<equations.length; i++) {
      const v1 = equations[i][0];
      const v2 = equations[i][1];
      if (v[v1] !== undefined && v[v2] !== undefined) continue;
      if (v1 === v0) {
        v[v2] = v[v0] / values[i];
        set[v2] = true;
        calutil(v2, set);
      } else if (v2 === v0) {
        v[v1] = v[v0] * values[i];
        set[v1] = true;
        calutil(v1, set);
      }
    }
    return;
  }

  function isInTheSameSet(v1, v2) {
    for (let set of sets) {
      if(set[v1] && set[v2]) return true;
    }
    return false;
  }
};
