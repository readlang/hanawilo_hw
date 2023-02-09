// Day 3 assignment - Divide & Conquer and Sliding Window patterns



/*
PROBLEM 1
Given an array of integers and a number, write a function called maxSubarraySum,
which finds the maximum sum of a subarray with the length of the number passed to the function.
Note that a subarray must consist of consecutive elements from the original array.
In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is
not.
*/
const maxSubarraySum = (arr, n) => {
    // seems like a good candidate for sliding window pattern
    // edge case: n must be <= array length
    if (arr.length < n) return null

    // set up max and temp sum (the initial "window")
    let maxSum = 0
    for (let i = 0; i < n; i++) {
        maxSum += arr[i]
    }
    let tempSum = maxSum
    
    // slide the window
    // for loop: update temp with new window
    // if max < temp, max = temp
    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i-n] + arr[i]
        if (maxSum < tempSum) {
            maxSum = tempSum
        }
    }
    // return max
    return maxSum
}
// Problem 1 Test Cases:
// console.log(maxSubarraySum([100,200,300,400], 2)) // 700
// console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)) // 39
// console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
// console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
// console.log(maxSubarraySum([2,3], 3)) // null



// PROBLEM 2
// Given a sorted array of integers, find the first occurrence of a target value.
// If the target is not found in the array, return -1.
function binarySearchFirstOccurrence(nums, target) {
    // seems like a Divide and Conquer pattern
    // set the start and end index values
    let start = 0
    let end = nums.length - 1

    // while loop: make sure start and end can't cross
    while (start <= end) {
         // set the mid index, round down to integer value
        let mid = Math.floor((start + end) / 2)

        // if target value is found:
        // return mid if it's at the 0 index, OR if the value to left is not the same
        if (nums[mid] === target) {
            if (mid === 0 || nums[mid-1] !== target) return mid
        }

        if (nums[mid] < target) {
            start = mid + 1
        } else { 
            // nums[mid] > or = target
            // this is necessary to keep searching for the first occurance
            end = mid - 1
        }
    }
    // if nothing is found
    return -1
}
// Test cases
let nums1 = [1, 2, 3, 4, 5];
let target1 = 3;
let expected1 = 2;
let result1 = binarySearchFirstOccurrence(nums1, target1);
console.log(result1)
console.assert(result1 === expected1, `Test case 1 failed: expected ${expected1} but got ${result1}`);

let nums2 = [1, 2, 3, 4, 5];
let target2 = 6;
let expected2 = -1;
let result2 = binarySearchFirstOccurrence(nums2, target2);
console.log(result2)
// console.assert(result2 === expected2, `Test case 2 failed: expected ${expected2} but got ${result2}`);

let nums3 = [1, 1, 1, 2, 2, 2, 3, 3, 4];
let target3 = 2;
let expected3 = 3;
let result3 = binarySearchFirstOccurrence(nums3, target3);
console.log(result3)
// console.assert(result3 === expected3, `Test case 3 failed: expected ${expected3} but got ${result3}`);



// PROBLEM 3
// Given a string, find the length of the longest substring without repeating characters.
function lengthOfLongestSubstring(s) {
    // seems like a sliding window problem

    // edge case
    if (s.length < 2) return s.length;

    // set up counters and obj to keep track of repeating chars
    let maxLength = 0
    let tempLength = 0

    let obj = {}

    for (i=0; i<s.length; i++) {
        // if the letter at index i is not in the obj
        if ( !obj[s[i]] ) {
            tempLength++  // increment
        } else {
            // reset counter and obj
            tempLength = 1 
            obj = {}
        }
        obj[s[i]] = "in string" // add current to obj
        if (maxLength < tempLength) maxLength = tempLength
    }
    return maxLength
}
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbbb")); // Output: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3