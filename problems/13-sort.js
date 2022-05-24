/***********************************************************************
Write a recursive function called `sort` that takes an array of integers, `nums`
and returns an array containing those integers sorted from least to greatest.

Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the smallest number in the `nums` array to the end of `sorted`.

There are many ways to accomplish this task but here's a simple algorithm:

1. Check the base case: If `nums` is empty, then return `sorted`
2. Otherwise, find the smallest element in `nums`
3. Add the smallest element to the end of `sorted`
4. Remove the smallest element from `nums`
5. Recursively call `sort()` with updated `sorted` and `nums`

Examples:

sort([4,1,6,3,1,7]); // [1, 1, 3, 4, 6, 7]
sort([0, 1, -3]); // [-3, 0, 1]
sort([]); // []
***********************************************************************/

function sort(nums, sorted = []) {
if(!nums.length) return sorted;

let smallest = Infinity;

for(let i = 0; i < nums.length; i++){
  if (smallest > nums[i]){
    smallest = nums[i]
  }
}

let index = nums.indexOf(smallest)
nums.splice(index, 1)

sorted.push(smallest)

return sort(nums, sorted)
}


// if(!nums.length) return sorted;

// let smallest = 0;

// for(let i = 1; i < nums.length; i++){
//   if (nums[smallest] > nums[i]){
//     console.log("nums smallest is " + nums[smallest])
//     console.log("nums i is " + nums[i])
//     smallest = i
//     //sm 1,
//     //sm = 0, i = 1
//   }
// }

// let index = nums.indexOf(smallest)
// nums.splice(index, 1)
// console.log("My nums splice is " +   nums.splice(index, 1))
// sorted.push(nums[index])
// console.log("my sorted push is " +   sorted.push(nums[smallest]))
// return sort(nums, sorted)
// sort([4,1,6,3,1,7]); // [1, 1, 3, 4, 6, 7]
// console.log(sort([4,1,6,3,1,7])); // [1, 1, 3, 4, 6, 7])
// console.log(sort([0, 1, -3])); // [-3, 0, 1]
// console.log(sort([])); // []


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sort;
} catch (e) {
  module.exports = null;
}
