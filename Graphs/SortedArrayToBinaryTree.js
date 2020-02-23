/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  function helper(s, e, nums) {
    if (s <= e) {
      let mid = Math.floor((s + e) / 2);
      let root = new TreeNode(nums[mid]);
      root.left = helper(s, mid - 1, nums);
      root.right = helper(mid + 1, e, nums);
      return root;
    }
    return null;
  }
  return helper(0, nums.length - 1, nums);
};
