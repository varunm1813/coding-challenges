var swapPairs = function(head) {
  if (!head || !head.next) return head;
  let temp = head.val;
  head.val = head.next.val;
  head.next.val = temp;
  swapPairs(head.next.next);
  return head;
};
