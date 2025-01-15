// Function to perform Selection Sort
function selectionSort(arr) {
  let n = arr.length; // Get the length of the array

  // Outer loop: Iterate through the array
  for (let i = 0; i < n - 1; i++) {
    let min = i; // Assume the current index is the minimum

    // Inner loop: Find the smallest element in the unsorted part of the array
    for (let j = i + 1; j < n; j++) {
      // If a smaller element is found, update the index of the minimum element
      if (arr[j] < arr[min]) min = j;
    }

    // If the current index is not the minimum, swap the elements
    if (i !== min) {
      let temp = arr[i]; // Temporarily store the value at the current index
      arr[i] = arr[min]; // Place the smallest element at the current index
      arr[min] = temp; // Move the original value to the index of the smallest element
    }
  }

  return arr; // Return the sorted array
}

// Example usage
const arr = [3, 343, 55, 64, 34, 4, 66, 78, 8, 39, 0]; // Input array
const result = selectionSort(arr); // Sort the array
console.log(result); // Output the sorted array
