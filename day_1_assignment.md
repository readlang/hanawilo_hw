# Day 1 Assignment

### Problems:

### 1: 
Big O Notation is a way of classifying the time (speed) or space (memory) needed to complete an algorithm or function, independent of the computer doing the calculation or the specific data inputted into the algorithm.  Rather than representing the exact equation to calculate the steps of solving a problem, it classifies in terms of the worst part of the equation, as this will impact the total equation the most.  The classifications are Constant, Logarithmic, Linear, Quadratic, and Factorial.  Generally speaking, these refer to the relationship between the size of the data input (such as the length of an array) and the time or space required to complete the algorithm.

### 2:
From lowest right on the chart to highest left the complexities are ranked in order from best to worst:

- 1 - Constant -
This takes the same number of steps, no matter the size of the input data.
For example, pushing or popping to/off an array

- 2 - Logarithmic -
This starts off like linear (with small data inputs) but approaches constant as the data input size grows very large.
For example, a loop where in each step the index value doubles.  It's like a leapfrog of the data, where each "jump" is double the last.

- 3 - Linear -
This takes a number of steps in direct proportion to the number of inputs.  As in, one additional input takes one additional step.
For example, an `array.forEach` operation, which will do some operation on each element of an array.

- 4 - Quadratic -
This takes a number of steps to the 2nd power of the number of inputs.  
For example, a nested loop, where for each cycle of the outer loop, the inner loop completes, cycling through the entire dataset.

- 5 - Factorial -
This is the worst complexity, and not very common.  The number of steps required is n! of the size of dataset n.  In math, an example of factorial is 5! = 5 x 4 x 3 x 2 x 1 = 120
A code example of this is a algorithm using an array where once one element of the array is found, the algorithm has to search all the rest of the array, and each remaining step the entire remaining array has to be searched.

### 3:
We care about Big O / code performance because the speed to run code is important when using large data sets.  In personal projects the dataset can be small, but in most professional environments datasets are large (ie millions+ of datapoints).  Having slow code will make users wait longer than they want.  It will also cost more, in terms of server costs.  At the extreme end, a large dataset running an extreme complexity- imagine millions of datapoints on a factorial complexity- can prevent the algorithm from ever completing.

### 4
A time method of measuring code performance is problematic becuase even on a single machine, it will produce a slightly different result every time, depending on what other CPU loads there are on the machine.  On different machines, such as a slow old laptop vs a high-performance workstation vs a server, the times will be completely different.

### 5 
Total time complexity: n^2+2n+1  Consolidated time complexity: n^2

### 6
total: n^3 + n + 2 consolidated: n^3

### 7
We can consolidate time complexities becuase the constants don't really matter.  The point of calculating big O is to figure out the efficiency of an algorithm in processing a large data input.  When processing a large data set, a constant additional computation step is negligible.  For example, if processing 1,000 numbers at n^2 complexity, that will be 1,000,000 steps.  If one algo has a constant 5 more steps than the another, the difference is just a rounding error.  The two algos are essentially the same speed.

### 8
Space complexity is analogous to time complexity, except that it is measuring the space or memory required to complete the algo.  This is important becuase at the extreme end, a computer could run out of memory and prevent the algo from completing.  At lower requirements of memory, the computer still has to juggle the memory needs of all the concurrent tasks at once.  This is important, for example, in a server which is processing many threads at once.

### 9
- Boolean - constant
- Undefined - constant
- Null - constant
- Numbers - constant
- String - linear
- Array - linear
- Object - linear

### 10
Array: When order matters & when you don't know how many of a thing you'll have
Object: When key/value operations (lookup, update, insertion, deletion) should be fast

### 11
- inserting: constant
- removing: constant
- searching1: constant
- searching2: linear
- accessing: constant
- retrieving keys: linear
- retrieving values: linear

### 12
- inserting 1 constant
- inserting 2 linear
- removing 1 constant
- removing 2 linear
- searching 1 linear
- searching 2 linear
- retrieving constant
- method 1 linear
- method 2 constant
- method 3 linear
- method 4 linear
- method 5 linear

### 13
- 1 
Time: linear, space: constant
This loops thru an array, and for each element of the array it does one operation, which is linear time complexity.  It is just looking up single elements of the array, which is constant space complexity.
- 2
Time: linear, space: linear
The forEach loops through the array (linear time) then pushes (constant time).  This simplifies to linear time.  Space is linear because worse-case, the `arrayOfIndexes` would be the same size as the original array (linear space).
- 3
Time: constant, space: constant
This fn is looking up four values in an array, making constant space and time complexity.
- 4
Time: linear, space: constant
This fn is looping thru the array (linear complexity), and looking up single values and saving to a variable - constant space.
- 5
Time: constant, space: constant.  This fn just looks up 2 values in an array.
- 6
Time: O(log n) space: O(log n)
This fn is recursive, and on each recursive call it cuts the data in half.
- 7
Time: Quadratic, space: linear
This fn has nested loops, (quadratic time) and it potentially stores all the values of the inputs in a new array.
- 8
Time: linear (it's a for loop) Space: constant (it's looking up and updating single values)
- 9
Time: quadratic - a array.includes (linear) inside a forEach loop (linear)
Space: linear - worst case the dupeArray duplicates the array
- 10
Time: linear - it potentially has to loop thru the array twice.
Space: linear - it is potentially creating a new array of same length
