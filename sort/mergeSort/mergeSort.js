function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let i = 0;
  let j = 0;
  let sortedArray = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArray.push(left[i]);
      i++;
    } else {
      sortedArray.push(right[j]);
      j++;
    }
  }
  return [...sortedArray, ...left.slice(i), ...right.slice(j)];
}

const arr = [23, 33, 4, 2, 55, 6, 777, 8, 99];
console.log(mergeSort(arr));
console.log(arr); //original array not changed during the merge sort
