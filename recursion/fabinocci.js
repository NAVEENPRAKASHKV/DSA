function fabinocci(n) {
  if (n === 0) return [0];
  if (n === 1) return [1];
  if (n === 2) return [0, 1];
  let series = fabinocci(n - 1);
  series.push(series[series.length - 1] + series[series.length - 2]);
  return series;
}

const result = fabinocci(7);
console.log(result);
