/**
  * @param {Array of String} words
  * @param {Array of Tuple}  d
  * @return {Array of 1/0}
*/

function checkWordsInGraph(words, d) {
  //assume all lower case letters
  const result = [];
  const g = new Graph();
  d.forEach( (tuple) => {
    g.add(tuple);
  });

  words.forEach( (word) => {
    let res = 1;
    for (let i=0; i<word.length-1; i++) {
      if (word[i] === word[i+1]) {
        continue;
      }
      if (!g.edges[word[i]] || !g.edges[word[i]][word[i+1]]) {
        res = 0;
        break;
      }
    }
    result.push(res);
  });
  return result;
}


function Graph() {
  //this.vertices = {};  // no need  'a' - 'z'
  this.edges = {};     // a : {e:true, t:true, ...}

}

Graph.prototype.add = function(tuple) {
  let start = tuple[0];
  let end = tuple[1];
  if (!this.edges[start]) this.edges[start]={};
  this.edges[start][end] = true;
  return;
}

let words = ['a','ab','ba','b'];
let d = [['a','b']];
console.log(checkWordsInGraph(words, d));
