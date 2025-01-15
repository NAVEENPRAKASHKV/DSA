function bubbleSort(arr) {
  let length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr; // Return the sorted array
}

// Example usage
const arr = [5, 1, 4, 2, 8];
const result = bubbleSort(arr);
console.log(result); // Output: [1, 2, 4, 5, 8]
