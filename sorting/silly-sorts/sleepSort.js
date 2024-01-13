// Sleep Sort
// My favorite sorting algorithm ever!!!!

/* The point of this algorithm is to evaluate and set each 
number in the input array to a timer. As the timer runs 
out on each number, that number pushed into the sorted 
array. So the number 1 will take one second to get added 
to the array, 2 will take two seconds, and so on. */

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

// Big O Time Complexity: Hard to say. It's anywhere from O(max(input)) 
// or O(max(input) + n) up to O(max(input) + n log(n))

// Big O Space Complexity: O(n)