function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  const sortedArray = [];
  let i = 0;
  let j = 0;
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

// Convert string to an array of characters, sort it, then join it back into a string
const str = "prakash";
const sortedStr = mergeSort(str.split("")).join("");
console.log(sortedStr); // Output: "aakhprs"
