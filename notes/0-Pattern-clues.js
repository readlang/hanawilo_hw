/* PATTERNS:
1 - Multiple Pointers
2 - Frequency Counter
3 - Sliding Window
4 - Divide and Conquer
5 - Recursion

Additional skills:
6 - Bubbble Sort
7 - Linked Lists


CLUES:
1: Multiple Pointers
-array or string input
-finding a pair, area, sum, max, etc.
-can be sorter or unsorted

[O->_ _ _ _<-O]
process:
L=0, R=length-1, while (L<R) do this


2: Frequency Counter
-frequencies, duplicates, occurances
-single array -> most frequent - use one obj
-multiple arrays -> frequency the same - use two objs

use object with key:value = val:freq
process:
for loop to load up freqCo, for loop to compare


3: Sliding Window
-single array or string
-min / max of sub array
-return sub array

[(_ _ _)->_ _ _ _ _]
process:
tempSum, maxSum=0, load initial window, slide the window


4 - Divide and Conquer
-single sorted array
[O _ _ _ M _ _ _ O]
process:
while start < end, set mid, if mid === target, else reset start or end


5 - Recursion
-like a while/ for loop
process:
define base case (if x=y, return z), else recursive call


*/