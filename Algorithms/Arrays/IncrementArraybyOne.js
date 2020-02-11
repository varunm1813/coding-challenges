function arrayIntegerAdd(arr) {
  let i = arr.length - 1;
  while (i >= 0) {
    if (arr[i] < 9) {
      arr[i]++;
      return arr;
    } else {
      arr[i] = 0;
      if (i === 0) {
        arr.unshift(1);
        return arr;
      }
      i--;
    }
  }
}

arrayIntegerAdd([9, 9, 9, 1]);
