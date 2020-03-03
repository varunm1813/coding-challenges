var sortColors = function(nums) {
  let r = 0;
  let len = nums.length;
  let b = len - 1;
  let i = 0;
  while (i <= b) {
    if (nums[i] === 0) {
      let temp = nums[r];
      nums[r] = nums[i];
      nums[i] = temp;
      r++;
    } else if (nums[i] === 2) {
      let temp = nums[b];
      nums[b] = nums[i];
      nums[i] = temp;
      i--;
      b--;
    }
    i++;
  }
};
