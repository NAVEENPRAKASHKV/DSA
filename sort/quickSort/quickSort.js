function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function pivot(arr, pivotIndex = 0, endIndex = arr.length - 1) {
  let swapIndex = pivotIndex;
  for (let i = pivotIndex + 1; i <= endIndex; i++) {
    if (arr[i] < arr[pivotIndex]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, pivotIndex, swapIndex);
  return swapIndex;
}
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
const arr = [8, 4, 44, 5, 66, 7, 9, 99];
console.log(quickSort(arr));
console.log(arr);
