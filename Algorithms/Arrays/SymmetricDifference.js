function sym(...args) {
  return args.reduce(recuder, new Set());
}

function recuder(result, arr) {
  let arrset = new Set(arr);
  for (let val of arrset) {
    if (result.has(val)) {
      result.delete(val);
    } else {
      result.add(val);
    }
  }
  return result;
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
