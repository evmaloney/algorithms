// Monkey Sort
// Also known as Bogosort. This is my friend Payne's favorite algorithm
// as he continuosly refers to himself as "51% monkey and 49% human".

// It continuosly randomizes a set of numbers until they are sorted.
// It is often referred to as the worst sorting algorithm known to
// human, ...but the best known to monkey.

unsortedArr = [3, 4, 2, 1];

const monkeySort = (arr) => {

  // Fisher-Yates style shuffle
  for (let i = 0; i < arr.length; i++) {
    const swapIndex = Math.floor(Math.random() * arr.length);
    [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
  }

  let sorted = true;
  let i = 0;
  // Iterate through the array to check if sorted
  while (sorted) {
    // Base case -> if we've made it to the last element
    // then array is sorted.
    if (i === arr.length - 1) {
      return arr;
    }
    else if (arr[i] > arr[i + 1]) sorted = false;
    i++;
  }

  // Use recursion to call function with most recent version of array
  return monkeySort(arr);
};

const sorted = monkeySort(unsortedArr);
console.log(sorted);

// Big O Time Complexity: Approximately O(n!). However, given that the array is shuffled at random, the time is hypothetically infinite.
// Big O Space Complexity: O(1)