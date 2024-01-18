// Monkey Sort
// Also known as Bogosort. This is my friend Payne's favorite algorithm
// as he continuosly refers to himself as "51% monkey and 49% human".

// It continuosly randomizes a set of numbers until they are sorted.
// It is often referred to as the worst sorting algorithm known to
// human, ...but the best known to monkey.

unsortedArr = [4, 8, 2, 1, 10, 9, 7, 3, 6, 5];
let iters = 1;

const monkeySort = (arr) => {
  if (iters === 3) return;
  let loop = 1;

  for (let i = 0; i < arr.length; i++) {
    const swapIndex = Math.floor(Math.random() * arr.length);
    [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
    console.log(`iters: ${iters} | loops: ${loop}`, arr)
    loop++;
  }
  console.log(`iters: ${iters} | loops: ${loop}`, arr)
  iters++
  // let sorted = true;
  // let i = 0;
  // while (sorted) {
  //   if (i === arr.length - 1) return arr;
  //   else if (arr[i] > arr[i + 1]) sorted = false;
  // }
  monkeySort(arr)
};

const sorted = monkeySort(unsortedArr);
// console.log(sorted);