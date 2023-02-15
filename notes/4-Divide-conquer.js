// divide and conquer pattern


const binarySearch = (nums, target) => {
    // set start and end indexes
    let start = 0
    let end = nums.length -1

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (nums[mid] === target) return mid

        if (nums[mid] < target) start = mid + 1;
        else if (nums[mid] > target) end = mid - 1;
    }

    return -1 // didn't find target
}

console.log(binarySearch([0,1,2,3,4,5,6,7], 0))

