/*
A poor miner is trapped in a mine and you have to help him to get out !

Only, the mine is all dark so you have to tell him where to go.

In this kata, you will have to implement a method solve(map, miner, exit) that has to return the path the miner must take to reach the exit as an array of moves, such as : ['up', 'down', 'right', 'left']. There are 4 possible moves, up, down, left and right, no diagonal.

map is a 2-dimensional array of boolean values, representing squares. false for walls, true for open squares (where the miner can walk). It will never be larger than 5 x 5. It is laid out as an array of columns. All columns will always be the same size, though not necessarily the same size as rows (in other words, maps can be rectangular). The map will never contain any loop, so there will always be only one possible path. The map may contain dead-ends though.

miner is the position of the miner at the start, as an object made of two zero-based integer properties, x and y. For example {x:0, y:0} would be the top-left corner.

exit is the position of the exit, in the same format as miner.

Note that the miner can't go outside the map, as it is a tunnel.

Let's take a pretty basic example :

var map = [[true, false],
    [true, true]];

solve(map, {x:0,y:0}, {x:1,y:1});
// Should return ['right', 'down']
*/

function solve(map, miner, exit) {
  if (miner.x === exit.x && miner.y === exit.y) return [];
  const visited = {};
  const queue = new Queue();
  let pos, path;
  pos = {};
  pos.x = miner.x;
  pos.y = miner.y;
  path = [];
  queue.enqueue( {pos, path});
  visited[String(pos.x) + String(pos.y)] = true;
  const dd = [[1,0],[-1,0],[0,1],[0,-1]];
  const dir = ['right','left','down','up'];
  while (queue.length > 0) {
    let prev = queue.dequeue();
    const prevPos = prev.pos;
    const prevPath = prev.path;
    let newPos, newPath;
    for (let i=0; i<4; i++) {
      newPos = {x: prevPos.x + dd[i][0], y: prevPos.y + dd[i][1]};
      if(visited[String(newPos.x) + String(newPos.y)]) continue;
      if (map[newPos.x] && map[newPos.x][newPos.y]) {
        const newPath = copy(prevPath);
        newPath.push(dir[i]);
        if (newPos.x === exit.x && newPos.y === exit.y) return newPath;
        queue.enqueue( {pos: newPos, path: newPath});
        visited[String(newPath.x) + String(newPath.y)] = true;
      }
    }
  }
  return [];
}

function copy(arr) {
  return arr.slice();
}

function Queue() {
  this.stack1 = [];
  this.stack2 = [];
  this.length = 0;
}

Queue.prototype.enqueue = function(el) {
  this.stack1.push(el);
  this.length++;
  return this.length;
}

Queue.prototype.dequeue = function() {
  if (this.length === 0) return;
  this.length--;
  if (this.stack2.length === 0) {
    while (this.stack1.length>0) {
      this.stack2.push(this.stack1.pop());
    }
  }
  return this.stack2.pop();
}

const map = [[true, false],
             [true, true]];

console.log(solve(map, {x:0,y:0}, {x:1,y:1}));
