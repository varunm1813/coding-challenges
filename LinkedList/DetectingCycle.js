/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head) return false;
  let cur = head;
  let linkList = new Set();
  while (cur) {
    if (linkList.has(cur.next)) return true;
    else {
      linkList.add(cur.next);
      cur = cur.next;
    }
  }
  return false;
};
