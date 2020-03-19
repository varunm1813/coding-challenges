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
  if (!root) return "X";
  let left = serialize(root.left);
  let right = serialize(root.right);

  return root.val + "," + left + "," + right;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  let queue = data.split(",");
  console.log(queue);
  let deserializeHelper = function(queue) {
    if (queue.length == 0) return null;
    let node = queue.shift();
    if (node == "X") return null;
    else {
      let newNode = new TreeNode(parseInt(node));
      newNode.left = deserializeHelper(queue);
      newNode.right = deserializeHelper(queue);
      return newNode;
    }
  };
  return deserializeHelper(queue);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
