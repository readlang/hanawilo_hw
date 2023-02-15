// Bubble Sort pattern

function bubbleSort(arr) {
    // outer loop starts with last element and moves left
    for (let i = arr.length-1; i > 0; i--) {
        // inner loop starts with first element and moves right until it hits outer index
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j+1]) {
                // swap the values to "bubble" the larger value to end
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
            
        }
        console.log(arr)
    }
    return arr
}

console.log(bubbleSort([9,8,7,6,5,4,3,2,1]))