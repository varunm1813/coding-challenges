function canReachEnd(arr) {
  let max_reached = 0;
  let i = 0;
  while (i <= max_reached && max_reached < arr.length) {
    max_reached = Math.max(max_reached, i + arr[i]);
    i++;
  }
  return max_reached >= arr.length - 1;
}

canReachEnd([3, 3, 1, 0, 2, 0, 1]);
