// Sliding window pattern

maxSubarray = (arr, k) => {
    // edge case
    if (arr.length < k) return null

    // set max and temp to initial window
    let maxSum = 0
    for (let i=0; i<k; i++) {
        maxSum += arr[i]
    }
    let tempSum = maxSum

    // slide the window
    // new temp = old temp - element leaving window + element entering window
    for (let i = k; i < arr.length; i++) {
        tempSum = tempSum - arr[i-k] + arr[i]
        // if new temp is larger, reassign maxSum
        if (tempSum > maxSum) { maxSum = tempSum }
    }
    return maxSum
}

console.log(maxSubarray( [1,30,6,3,4,5,25], 3) )