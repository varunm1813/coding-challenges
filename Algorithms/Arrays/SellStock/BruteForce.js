function sellStock(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] - arr[i] > max) {
        max = arr[j] - arr[i];
      }
    }
  }
  return max;
}

// sellStock([310, 315, 275, 295,260, 270, 290, 230, 255, 250])

sellStock(5, 4, 2, 1);
