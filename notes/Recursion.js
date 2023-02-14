
function recursive(num) {
    // always need base case
    if (num === 0) return

    console.log(num)
    // recursive call
    recursive(num - 1)
}

recursive(4)



function binarySearchRecursion(arr, target, l = 0, r = arr.length -1) {
    // make sure left and right don't cross
    if (l > r) return -1

    // define mid index
    let mid = Math.floor((l + r) / 2)

    // base case
    if (arr[mid] === target) return mid

    // recursive path
    if (arr[mid] < target) {
        return binarySearchRecursion(arr, target, mid + 1, right)
    } else {
        return binarySearchRecursion(arr, target, left, mid -1 )
    }
}

console.log("binary:", binarySearchRecursion([1,2,3,4,5,6], 3))