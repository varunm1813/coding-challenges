var mySqrt = function(x) {
  if (x == 0) return 0;
  let l = 1,
    r = x,
    ans;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (mid * mid <= x) {
      l = mid + 1;
      ans = mid;
    } else r = mid - 1;
  }
  return ans;
};
