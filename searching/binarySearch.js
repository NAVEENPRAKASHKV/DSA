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

let arr = [1, 3, 5, 6, 22, 33, 45, 66, 777, 888];

console.log(binarySearch(arr, 1));
