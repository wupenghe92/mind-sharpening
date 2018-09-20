/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  let currNode, currIdx;
  const serial = [];
  const queue = [root];
  const idx = [0];

  while (queue.length > 0) {
    currNode = queue.pop();
    currIdx = idx.pop();
    serial[currIdx] = currNode.val;

    if (currNode.left)  {
      let l = leftChildIdx(currIdx);
      idx.unshift(l);
      queue.unshift(currNode.left);
    }

    if (currNode.right)  {
      let r = rightChildIdx(currIdx);
      idx.unshift(r);
      queue.unshift(currNode.right);
    }
  }
  for (let i=0; i<serial.length; i++) {
    if (serial[i] === undefined) {
      serial[i] = null;
    }
  }

  return JSON.stringify(serial);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  let currNode, currIdx;
  const serial = JSON.parse(data);
  const root = new TreeNode(serial[0]);
  const nodeStack = [root];
  const idxStack = [0];

  while (nodeStack.length > 0) {
    currNode = nodeStack.pop();
    currIdx = idxStack.pop();
    let l = leftChildIdx(currIdx);
    let r = rightChildIdx(currIdx);
    if (l<serial.length && serial[l] !== null) {
      currNode.left = new TreeNode(serial[l]);
      nodeStack.push(currNode.left);
      idxStack.push(l);
    }
    if (r<serial.length && serial[r] !== null) {
      currNode.right = new TreeNode(serial[r]);
      nodeStack.push(currNode.right);
      idxStack.push(r);
    }
  }
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

 function getParentIdx(i) {
   return Math.floor((i-1)/2)
 }

 function leftChildIdx(i) {
   return 2*i+1;
 }

 function rightChildIdx(i) {
   return 2*i+2;
 }


//

public class Codec {
    private static final String spliter = ",";
    private static final String NN = "X";

    // Encodes a tree to a single string.
    public String serialize(TreeNode root) {
        StringBuilder sb = new StringBuilder();
        buildString(root, sb);
        return sb.toString();
    }

    private void buildString(TreeNode node, StringBuilder sb) {
        if (node == null) {
            sb.append(NN).append(spliter);
        } else {
            sb.append(node.val).append(spliter);
            buildString(node.left, sb);
            buildString(node.right,sb);
        }
    }
    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        Deque<String> nodes = new LinkedList<>();
        nodes.addAll(Arrays.asList(data.split(spliter)));
        return buildTree(nodes);
    }

    private TreeNode buildTree(Deque<String> nodes) {
        String val = nodes.remove();
        if (val.equals(NN)) return null;
        else {
            TreeNode node = new TreeNode(Integer.valueOf(val));
            node.left = buildTree(nodes);
            node.right = buildTree(nodes);
            return node;
        }
    }
}
