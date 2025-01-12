//linear search
let arr = [];
function linearSearch(arr, value) {
  if (arr.length === 0) return -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

let result = linearSearch(arr, 2);

console.log(result);
