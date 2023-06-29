function positiveSum(arr) {
  let sum = 0;
  arr.forEach((e) => {
    if (e > 0) {
      sum += e;
    }
  });

  return sum;
}
