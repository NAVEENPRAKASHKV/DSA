let arr = [2, 5, 10, 14, 17, 20, 23, 25, 30, 33, 50];

function binarySearch(arr, value) {
  if (arr.length === 0) return -1;
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === value) return mid;
    else if (arr[mid] < value) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}

console.log(binarySearch(arr, 50));
