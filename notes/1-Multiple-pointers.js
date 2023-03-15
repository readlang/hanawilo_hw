// multiple pointers pattern

// return two values of array that sum to 0
function multiplePointers(array) {
    let left = 0
    let right = array.length-1

    while (left < right) {
        let sum = array[left] + array[right]
        if (sum === 0) return [array[left], array[right]]
        else if (sum < 0) {
            left++
        } else {
            right--
        }
    }
    return false
}

console.log(multiplePointers([-5,-3,-1,1,2,4,4]))


// Diagram image:
// [O->, _, _, _, _, _, <-O] 