// Bubble Sort
// A classic sorting algorithm that essentially works 
// by moving the larger numbers up array. In this way, 
// the larger numbers are thought to "bubble" to the top.

unsortedArr = [4, 8, 2, 1, 10, 9, 7, 3, 6, 5];

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

const sorted = bubbleSort(unsortedArr);
console.log(sorted);