let arr = [1, 2, 3, 88];

//finding the smallest and biggest value and second smallest and higest
function biggetst(arr = []) {
  if (arr.length === 0) return undefined;
  let maxValue = -Infinity;
  let secondMax = -Infinity;
  let minValue = Infinity;
  let secondMinValue = Infinity;

  arr.forEach((num) => {
    if (num > maxValue) {
      secondMax = maxValue;
      maxValue = num;
    } else if (num > secondMax) secondMax = num;
    if (num < minValue) {
      secondMinValue = minValue;
      minValue = num;
    } else if (num < secondMinValue) secondMinValue = num;
  });
  return [maxValue, secondMax, secondMinValue, minValue];
}
// smallest and second smallest
function smallestSecondSm(arr = []) {
  if (arr.length === 0) return undefined;
  let smallest = Infinity;
  let secondSmallest = Infinity;
  arr.forEach((num) => {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest) secondSmallest = num;
  });

  if (secondSmallest === Infinity) {
    return undefined;
  } else return secondSmallest;
}
//sum an array
function sum(arr) {
  let sum = arr.reduce((sum, num) => {
    return sum + num;
  }, 0);
  return sum;
}
//reverse an array
function reverse(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}
//odd or even
function oddAndEven(arr) {
  let odd = arr.filter((num) => {
    if (num % 2 !== 0) return num;
  });
  let even = arr.filter((num) => num % 2 === 0);
  return [odd, even];
}
// sorted array
function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}
// duplicates elements
function duplicates(arr) {
  let count = [0];
  arr.forEach((num) => {
    if (count[num] === undefined) count[num] = 1;
    else count[num] += 1;
  });
  for (let index in count) {
    if (count[index] > 1) console.log(index);
  }
}
// to check duplicte is present or not
function isDuplicated(arr) {
  let set = new Set(arr);
  return set.size === arr.length ? false : true;
}
// crating no duplicated elements
function nonDuplicatedArray(arr) {
  return [...new Set(arr)];
}

console.log(isDuplicated(arr));
