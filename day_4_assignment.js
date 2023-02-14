// Day 4 assignment - Bubble Sort and Recursion


// PROBLEM 1:
// Write a recursive function called flatTheArray which accepts an array of arrays
// and returns a new array with all values flattened.
const flatTheArray = ( arr, newArray=[] ) => {
    // loop thru each value, if number -> push to array
    // if nested array -> recursively call function

    for (const element of arr) {
        if ( typeof(element) === 'number' ) {
            newArray.push(element)
        }
        else {
            flatTheArray(element, newArray)
        }
    }
    return newArray
}
console.log("--problem 1--")
console.log(flatTheArray( [1, 2, 3, [4, 5] ] ))
console.log(flatTheArray( [1, [2, [3, 4], [[5]]]] ))
console.log(flatTheArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))



// PROBLEM 2:
// Write a recursive function called capitalizeWords.
// Given an array of words, return a new array containing each word capitalized.
// let words = ['tony', 'kim'];
// capitalizedAllLetters(words); // ['TONY', 'KIM']

const capitalizeAllLetters = (array) => {
    // NON-recursive:
    // for (let i=0; i < array.length; i++) {
    //     array[i] = array[i].toUpperCase()
    // }
    // return array

    // recursive: (seems a little complicated compared to non-recursive above)
    if (array.length === 1) {
        return [array[0].toUpperCase()]
    }
    else {
        let midpoint = Math.floor(array.length/2)
        let newArr1 = capitalizeAllLetters(array.slice(0, midpoint))
        let newArr2 = capitalizeAllLetters(array.slice(midpoint, array.length))
        return newArr1.concat(newArr2)
    }
}

console.log("--problem 2--")
console.log(capitalizeAllLetters( ['tony', 'kim'] ) )
console.log(capitalizeAllLetters( ['this', 'Is', 'AnotTHER', 'array', 'TO', 'capitalizE'] ) )



// PROBLEM 3:
// Write a function called collectStrings which accepts an object and returns
// an array of all the values in the object that have a typeof string
function collectStrings(obj, array = [] ) {
    for (const key in obj) {
        if (typeof(obj[key]) === "string" ) array.push(obj[key])
        else {
            collectStrings(obj[key], array)
        }
    }
    return array
}

let obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}
console.log("--problem 3--")
console.log(collectStrings(obj)) 
// Output: ['foo', 'bar', 'baz']



// PROBLEM 4:
// Given the following data structure
const data = [
    {
        name: 'John Smith',
        age: new Map([['age', 88]]),
        favoriteMovie: [
            {
                title: 'Hulk',
                genre: 'action',
                rating: 6
            }
        ]
    },
    {
        name: 'Tony Kim',
        age: new Map([['age', 3]]),
        favoriteMovie: [
            {
                title: 'Top Gun',
                genre: 'action',
                rating: 10
            }
        ]
    },
    {
        name: 'John Smith',
        age: new Map([['age', 35]]),
        favoriteMovie: [
            {
                title: 'Saw',
                genre: 'horror',
                rating: 8
            }
        ]
    }
]

// Using the bubble sort, please sort each profile
// by ascending order for the following properties:
//  - age
//  - rating
function bubbleSortAge(arr) {
    for (let i = arr.length-1; i >=0; i--) {
        for (let j = 0; j < i; j++) {
            if ( arr[j].age.get('age') > arr[j+1].age.get('age') ) {
                //switch the values
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }   
        }
    }
    return arr
}
console.log("--problem 4--")
console.log(bubbleSortAge(data))

function bubbleSortRating(arr) {
    for (let i=arr.length-1; i >=0; i--) {
        for (let j=0; j<i; j++) {
            if ( arr[j].favoriteMovie[0].rating > arr[j+1].favoriteMovie[0].rating ) {
                //switch the values
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}
console.log(bubbleSortRating(data))
