// Gnome Sort

// Story time...
// A fun little algorithm featuring a gnome who moves
// the elements of an array one at a time. As they move along,
// they check if each element is larger than the previous. If not,
// they swap the two elements and move back one, then repeat the
// check. Once that gnome meets a smaller element, they drop the 
// current one and move up and continue the process. They hop along
// moving smaller elements down one at a time, moving back and 
// forth until all of the elements are sorted. Once so, they become
// a happy little gnome. The End.

unsortedArr = [4, 8, 2, 1, 10, 9, 7, 3, 6, 5];

const gnomeSort = (arr) => {
  let i = 0;
  while(i < arr.length) {
    // If on first el or current el is >= previous, move up one
    if (i === 0 || arr[i] >= arr[i - 1]) i++;
    // Else current el less than previous. Swap them and move back one.
    else {
      [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
      i--;
    }
  }
  return arr;
};

const sorted = gnomeSort(unsortedArr);
console.log(sorted);

// Big O Time Complexity: O(n^2)
// Big O Space Complexity: O(1)