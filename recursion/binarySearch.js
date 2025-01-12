function binarySearch(arr, value, low = 0, high = arr.length - 1) {
  if (low > high) return -1;
  let mid = Math.floor((high + low) / 2);
  if (arr[mid] === value) return mid;
  if (arr[mid] < value) {
    return binarySearch(arr, value, mid + 1, high);
  } else {
    return binarySearch(arr, value, low, mid - 1);
  }
}

let arr = [1, 2, 5, 6, 10, 11, 13, 15, 17, 18, 20];

let result = binarySearch(arr, 11);
console.log(result);
