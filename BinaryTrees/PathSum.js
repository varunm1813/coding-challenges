/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  function dfs(cur, total, target) {
    if (!cur) return false;
    total += cur.val;
    if (!cur.left && !cur.right) {
      return total === target;
    }
    return dfs(cur.left, total, target) || dfs(cur.right, total, target);
  }
  return dfs(root, 0, sum);
};
