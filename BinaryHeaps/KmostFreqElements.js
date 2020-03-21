/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let count = {};
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (count[nums[i]]) count[nums[i]]++;
    else count[nums[i]] = 1;
  }

  let arr = [];
  for (let key in count) {
    // converting object to arrary for sorting
    arr.push([key, count[key]]);
  }

  arr.sort((a, b) => {
    return b[1] - a[1]; // descending order;
  });

  for (let i = 0; i < k; i++) {
    result.push(parseInt(arr[i][0]));
  }

  return result;
};
