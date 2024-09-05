function isArraySorted(arr) {
  let pointer1 = 0 // Initialize two pointers
  let pointer2 = 1

  while (pointer2 < arr.length) {
    // Condition
    if (arr[pointer1] > arr[pointer2]) {
      return false
    }

    pointer1++ // Updating pointers
    pointer2++
  }
  return true
}

let sortedArray = [1, 2, 3, 4, 5]
let unsortedArray = [5, 2, 8, 1, 9]

console.log(isSorted(sortedArray)) // Output: true
console.log(isSorted(unsortedArray)) // Output: false
