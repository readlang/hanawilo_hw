// Day 2 assignment - Multiple pointers and Frequency Counter patterns



/* PROBLEM 1:
Implement a function called countUniqueValues, which accepts a sorted array,
and counts the unique values in the array.
There can be negative numbers in the array, but it will always be sorted.  */

const countUniqueValues = (arr) => {
    //declare empty obj frequencycounter
    let freqCo = {}

    // for loop: goes through array, for each value, 
    // checks if each is in obj, if not, add it as key to obj (value of key/value doesn't matter)
    for (const val of arr) {
        if (!freqCo[val]) {
            freqCo[val] = "in array"
        }
    }
    // count the number of keys and return the result
    return Object.keys(freqCo).length
}

console.log(countUniqueValues([1,1,1,1,1,2]) ) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) ) // 7
console.log(countUniqueValues([]) ) // 0
console.log(countUniqueValues([-2,-1,-1,0,1]) ) // 4



/* PROBLEM 2:
Write a function called, areThereDuplicates which accepts a array of letters,
and checks whether there are any duplicates among the argument passed in.
You can solve this using the frequency counter pattern OR the multiple pointers pattern.
*/
// Question: not sure how you would solve this with multiple pointers pattern
const areThereDuplicates = (arrOfLetters) => {
    // frequency counter pattern:
    let freqCo = {}

    // for loop: for each element of array, check if in object
    // if yes, return true, if no, add to object (value doesn't matter)
    for (const val of arrOfLetters) {
        if (freqCo[val]) {
            return true
        } else {
            freqCo[val] = "in array"
        }
    }
    // default return false
    return false
}
//Tests
console.log(areThereDuplicates(['a', 'a', 'c', 'd']))  // true
console.log(areThereDuplicates(['a', 'b', 'c']) ) // false



/* PROBLEM 3:
Write a function called avgPair.
Given a sorted array of integers and a target average, determine if there is a pair of values in the
array where the average of the pair equals the target average.
There may be more than one pair that matches the average target.
*/
const avgPair = (arr, avgTarget) => {
    // seems like a candidate for multiple pointers pattern
    // define 2 variables, L and R
    let l = 0
    let r = arr.length-1

    // while loop: while L < R:
    // ave = L value + R value / 2
    // if ave = avgTarget, return true
    // if ave too low (ave < avgTarget), move L left
    // if ave too high, move R right

    // default return false

    while (l < r) {
        let ave = (arr[l] + arr[r]) / 2
        if (ave === avgTarget) {
            return true
        } else if (ave < avgTarget) {
            l++
        } else {
            r--
        }
    }
    return false
}
// Test Cases:
console.log(avgPair([1,2,3],2.5)) // true
console.log(avgPair([1,3,3,5,6,7,10,12,19],8)) // true
console.log(avgPair([-1,0,3,4,5,6], 4.1) ) //false
console.log(avgPair([],4) ) //false