let arr = [1, 2, 3, 4, 88, 1, 5];
let arr1 = [1, 2, 3, 88, 34, 344, 566, 77];
let arr2 = [1, 2, 3, 12, 23, 454, 344];

//Finding the smallest and biggest value and second smallest and higest
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
//Smallest and second smallest
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
//Sum an array
function sum(arr) {
  let sum = arr.reduce((sum, num) => {
    return sum + num;
  }, 0);
  return sum;
}
//Reverse an array
function reverse(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}
//Odd or even
function oddAndEven(arr) {
  let odd = arr.filter((num) => {
    if (num % 2 !== 0) return num;
  });
  let even = arr.filter((num) => num % 2 === 0);
  return [odd, even];
}
// Sorted array
function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}
// Duplicates elements
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
// To check duplicte is present or not
function isDuplicated(arr) {
  let set = new Set(arr);
  return set.size === arr.length ? false : true;
}
// Crating no duplicated elements
function nonDuplicatedArray(arr) {
  return [...new Set(arr)];
}
// Write a fuction to rotate k step to the write
function rotateArray(arr, k) {
  let subArray = arr.splice(k, arr.length - k);
  let rotatedArray = subArray.concat(arr);
  return rotatedArray;
}
// find intersection of two array
function intersection(arr1, arr2) {
  let interSectionArray = arr1.filter((num1) => {
    return arr2.includes(num1);
  });
  return interSectionArray;
}
// Write a function to find all pairs in an array that sum up to a given number.
function pairup(arr, target) {
  let pair = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        pair.push([arr[i], arr[j]]);
      }
    }
  }
  return pair;
}

console.log(rotateArray(arr1, 3));
