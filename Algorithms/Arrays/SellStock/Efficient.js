function sellStock(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] - arr[j] > max) {
        max = arr[i] - arr[j];
      }
    }
  }
  return max;
}

sellStock2([310, 315, 275, 295, 260, 270, 290, 230, 255, 250]);

function sellStock2(arr) {
  let min = arr[0];
  let profit = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - min > profit) {
      profit = arr[i] - min;
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return profit;
}

// sellStock2([1, 2, 3, 5]);
