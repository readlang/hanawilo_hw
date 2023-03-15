
function maxAreaBrute(array) {
    // brute force version - runs in O(n^2) time bc of nested for loops
    if (array.length < 2) return undefined;

    let maxArea = 0

    for (let i = 0; i < array.length-1; i++) {
        for (let j = i+1; j < array.length; j++) {
            let tempArea = Math.min(array[i], array[j]) * (j-i)
            if (tempArea > maxArea) maxArea = tempArea
        }
    }
    return maxArea
}

console.log(maxAreaBrute([1,8,6,2,5,4,8,3,7])) // 49
console.log(maxAreaBrute([1,8,6,2,5,4,8,3,5])) // 40
console.log(maxAreaBrute([1,8,6,2,5,4,8,3,8])) // 56
console.log("-----")


function maxAreaTwo(arr) {
    // trying to run in O(n) time
    if (arr.length < 2) return undefined;

    let maxArea = 0,  l = 0, r = arr.length-1

    while (l < r) {
        let tempArea = Math.min(arr[l], arr[r]) * (r - l)
        maxArea = Math.max( tempArea, maxArea )

        // if value of L is less, L++
        if (arr[l] <= arr[r]) l++ 
        else r--
    }
    return maxArea
}

console.log(maxAreaTwo([1,8,6,2,5,4,8,3,7])) // 49
console.log(maxAreaTwo([1,8,6,2,5,4,8,3,5])) // 40
console.log(maxAreaTwo([1,8,6,2,5,4,8,3,8])) // 56
console.log(maxAreaTwo([1,2,900,1000,5,4,])) // 900 - fails on this example