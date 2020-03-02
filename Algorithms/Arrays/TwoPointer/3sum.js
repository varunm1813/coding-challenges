var threeSum = function(nums) {
  if (nums.length < 3) return [];
  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (i != 0 && nums[i] == nums[i - 1]) continue;

    let k = i + 1;
    let j = nums.length - 1;
    while (k < j) {
      if (nums[i] + nums[k] + nums[j] === 0) {
        result.push([nums[i], nums[j], nums[k]]);
        k++;
        while (k < j && nums[k] === nums[k - 1]) k++;
      } else if (nums[i] + nums[j] + nums[k] < 0) {
        k++;
      } else {
        j--;
      }
    }
  }
  return result;
};
