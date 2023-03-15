// example of perf hooks performance
const performance = require('perf_hooks').performance



let array = []
let start = performance.now()
for (i=0; i<100000000; i++) { array.push(i) }
let end = performance.now()
console.log(end - start)



const pushNumberToArray = (arr, num) => {
    return arr.push(num)
}

let arr1 = [1,2,3,4,5,6,7,8,9,10]
start = performance.now()
pushNumberToArray(arr1, 900)
end = performance.now()

console.log(end - start)