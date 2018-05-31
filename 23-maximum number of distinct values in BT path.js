
function Tree(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

// function maxDistinct(root) {
//   if (!root) return 0;
//   const hash = new Map();
//   return util(root, hash);
//
//   function util(node, hash) {
//     if (!node) return hash.size;
//     if (hash.has(node.value)) {
//       let count = hash.get(node.value) + 1;
//       hash.set(node.value, count);
//     } else {
//       hash.set(node.value, 1);
//     }
//     const max = Math.max(util(node.left, hash), util(node.right, hash));
//     let count = hash.get(node.value) - 1;
//     hash.set(node.value, count);
//     if (count === 0) hash.delete(node.value);
//
//     return max;
//   }
// }

function maxDistinct(root) {
  if (!root) return 0;
  const hash = {};
  return util(root, hash);

  function util(node, hash) {
    if (!node) return Object.keys(hash).length;
    if (hash[node.value] !== undefined) {
      hash[node.value]++;
    } else {
      hash[node.value] = 1;
    }
    const max = Math.max(util(node.left, hash), util(node.right, hash));
    hash[node.value]--;
    if (hash[node.value] === 0) delete hash[node.value];

    return max;
  }
}

const root = new Tree(4);
root.left = new Tree(5);
root.right = new Tree(6);
root.left.left = new Tree(4);
root.left.left.left = new Tree(5);
root.right.right = new Tree(6);
root.right.left = new Tree(1);

console.log(maxDistinct(root)); // 3
