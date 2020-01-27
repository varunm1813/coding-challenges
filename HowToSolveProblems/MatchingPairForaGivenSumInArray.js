const arr = [4, 2, 3, 4];

function hasArrayContainsSum(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === n) {
        return true;
      }
    }
  }
  return false;
}

function hasArrayContainsSum2(arr, n) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let total = arr[i] + arr[j];
    if (total === n) {
      return true;
    } else if (total < n) {
      i++;
    } else {
      j--;
    }
  }
  return false;
}

hasArrayContainsSum3(arr, 8);

function hasArrayContainsSum3(arr, n) {
  let hashset = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (hashset.has(arr[i])) {
      return true;
    }
    hashset.add(n - arr[i]);
    console.log(hashset);
  }
  return false;
}
