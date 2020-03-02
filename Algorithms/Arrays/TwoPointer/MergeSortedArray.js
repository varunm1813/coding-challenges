var merge = function(nums1, m, nums2, n) {
  let cur = m + n - 1;
  while (m > 0 && n > 0) {
    if (nums1[m - 1] < nums2[n - 1]) {
      nums1[cur] = nums2[n - 1];
      n--;
    } else {
      nums1[cur] = nums1[m - 1];
      m--;
    }
    cur--;
  }
  while (n > 0) {
    nums1[cur] = nums2[n - 1];
    n--;
    cur--;
  }
};
