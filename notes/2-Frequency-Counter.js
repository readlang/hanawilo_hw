// Frequency Counter pattern

function countUniqueValues(arr1, arr2) {
    // edge case
    if (arr1.length !== arr2.length) return false

    // initialize frequency counters
    let freqCo1 = {}
    let freqCo2 = {}

    // load up values into respective frequency counters
    for (const val of arr1) {
        freqCo1[val] = (freqCo1[val] || 0) +1
    }

    for (const val of arr2) {
        freqCo2[val] = (freqCo2[val] || 0) +1
    }

    // for each key in freqCo1
    for (const key in freqCo1){
        // if the key^2 is not in freqCo2 -> false
        if ( !(key**2 in freqCo2) ) return false
        // if the frequency of each not equal -> false
        if ( freqCo1[key] !== freqCo2[key**2] ) return false
    }
    
    // default return true
    return true
}


console.log(countUniqueValues([1,2,3,4],[1,4,9,16])) //result: true
console.log(countUniqueValues([1,2,3,4],[1,4,9,10])) //result: false