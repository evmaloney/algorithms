// Gnome Sort
// My favorite sorting algorithm ever!!!!

arr = [4, 8, 2, 1, 10, 9, 7, 3, 6, 5];
sortedArr = [];

const sleepSort = (arr) => {
  arr.forEach((num) => {
    setTimeout(() => {
      sortedArr.push(num);
    }, num * 1000);
  });
};

sleepSort(arr);

setTimeout(() => {
  console.log(sortedArr)
}, 11000);