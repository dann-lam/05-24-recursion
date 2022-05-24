/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

const isSorted = arr => {
  // if (arr.length === 1) return true;
  // let currentNum = arr.shift();
  // if (currentNum > arr[0]) return false;
  // if (currentNum < arr[0]) return isSorted(arr);

    if (arr.length === 1) return true;
    // if (arr[0] > arr[1]) return false;
    let lastEl = arr.pop();
    if (lastEl > arr[arr.length - 1]) return isSorted(arr)
    return false;
  
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
