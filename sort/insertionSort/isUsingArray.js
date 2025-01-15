function insertionSort(arr) {
  const n = arr.length; // Length of the array

  // Outer loop: Iterate through the array starting from the second element
  for (let i = 1; i < n; i++) {
    let current = arr[i]; // Store the current element to be placed
    let j = i - 1; // Index of the previous element

    // Inner loop: Compare `current` with elements in the sorted part of the array
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]; // Shift elements to the right
      j--; // Move to the previous element
    }

    // Insert the `current` element at the correct position
    arr[j + 1] = current;
  }

  return arr; // Return the sorted array
}

let arr = [2, 333, 444, 56, 7, 88, 99];
const result = insertionSort(arr);
console.log(result);
