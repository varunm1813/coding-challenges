var twoSum = function(nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) return [obj[nums[i]] - 1, i];
    else obj[target - nums[i]] = i + 1;
  }
  return null;
};
