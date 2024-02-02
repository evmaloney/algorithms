// Bubble Sort
// A classic sorting algorithm that essentially works 
// by moving the larger numbers up array. In this way, 
// the larger numbers are thought to "bubble" to the top.

unsortedArr = [4, 8, 2, 1, 10, 9, 7, 3, 6, 5];

// Bubble Sort
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// const sortedBubble = bubbleSort(unsortedArr);
// console.log(sortedBubble);

// Sink Sort (opposite of bubbling right - slightly optimized)
const sinkSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
};

// const sortedSink = sinkSort(unsortedArr);
// console.log(sortedSink);


// Sink Sort Optimized Version
unsortedArrOptimized = [3, 2, 1, 4, 5, 6, 7, 8, 9, 10];

const sinkSortOptimized = (arr) => {
  let swapped = true;
  let i = 0;
  while (swapped) {
    swapped = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        swapped = true;
      }
    }
    i++;
  }
  return arr;
};

const sortedSinkOpt = sinkSortOptimized(unsortedArrOptimized);
console.log(sortedSinkOptimized);