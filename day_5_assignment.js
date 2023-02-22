// Day 5 assignment - Singly Linked Lists


/* PROBLEM 1
Please construct the two classes with the appropriate properties 
for the Node and SLL, then for the SLL, please write the methods for:
- Shift()
- Unshift()
- Push()
- Pop()
- Get()
- Set()
- Insert()
- Remove()
*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null; // default value is null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val)

        // "this" refers to the SLL you're working on
        // if length is 0
        if (!this.length) {  
            this.head = newNode
            this.tail = newNode
        } else {  // length not 0
            this.tail.next = newNode
            this.tail = newNode
        }
        // add one to length
        this.length++ 
        return this 
    }

    pop() {
        // if length is 0
        if (!this.length) return; // return undefined

        let current = this.head
        let newTail = this.head

        // this will stop when current is on last node,
        // and newTail is on 2nd to last node
        while (current.next) {
            newTail = current
            current = current.next 
        }

        this.tail = newTail  // newTail will be the 2nd to last
        this.tail.next = null // this will drop last node from SLL
        this.length-- 

        if (this.length === 0) {
            this.head = null
            this.tail = null
        }

        // return the element popped off the end (the former last element )
        return current
    }

    shift(){
        // shift is like pop but from the front
        if (!this.length) return undefined;

        let removedHead = this.head;

        this.head = removedHead.next
        this.length--

        if (this.length === 0) {
            this.head = null
            this.tail = null
        }

        return removedHead
    }
    
    unshift(val){
        // unshift is like push but on the front
        let newNode = new Node(val)

        if (!this.length) {
            this.tail = newNode
        }

        newNode.next = this.head
        this.head = newNode
      
        this.length++

        return this
    }

    get(index){
        // get retrieves a certain node in the LL
        if (index < 0 || index >= this.length) return undefined;
        let counter = 0
        let current = this.head

        // this will move thru the nodes until it finds the index
        while (counter != index) {
            current = current.next
            counter++
        }
        return current // current node
    }

    set(index, val){ // update ("set") a node at index to value
        let foundNode = this.get(index)

        if (foundNode) {
            foundNode.val = val
            return true
        }
        return false
    }

    insert(index, val){
        if (index < 0 || index > this.length ) return undefined;
        if (index === this.length) return this.push(val)
        if (index === 0) return this.unshift(val)

        let newNode = new Node(val) // define the new node

        let beforeNode = this.get(index-1)

        newNode.next = beforeNode.next
        beforeNode.next = newNode
        
        this.length++
        return this
    }

    remove(index){
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift()
        if (index === this.length) return this.pop()

        let removedNode = this.get(index)
        let beforeNode = this.get(index-1)

        beforeNode.next = removedNode.next
        removedNode.next = null

        this.length--
        return removedNode
    }



    // PROBLEM 2:
    // Given a linked list, create a method called mostFrequent(this) that returns the node that occurs the most in the list.
    // For example, given the following linked list:
    // 1 -> 1 -> 2 -> 2 -> 2 -> 3 -> null
    // This function should return the node of 2.

    // The function should take in a argument of a linked list and
    // return a value of the node that occurs the most often.
    // ** this – referrers to the linked list passed into the method

    mostFrequent() {
        // takes in a SLL and returns node value that occurs the most often
        /*
        Seems like this is a frequency counter problem.
        loop thru the LL and add each node value to object as key and frequency as value
        then loop thru object and find the key:value pair where the value is the highest
        return the key of this pair
        */
        let freqCo = {}
        let currNode = this.head

        // load up vals into freqCo
        while (currNode) {
            //let value = currNode.val
            if ( freqCo[currNode.val] ) freqCo[currNode.val]++
            else freqCo[currNode.val] = 1

            currNode = currNode.next
        }

        let mostCommonVal, mostFreq = 0
        
        for (const key in freqCo) {
            if (freqCo[key] > mostFreq) {
                mostFreq = freqCo[key]
                mostCommonVal = key
            }
        }

        return mostCommonVal
    }

}


function testMostFreq(array) {
    const sll = new SinglyLinkedList()

    for (const ele of array) {
        sll.push(ele)
    }
    
    console.log(sll.mostFrequent())
}

testMostFreq([1,1,2,2,2,2,3,4,5,5])
testMostFreq([1,1,2,2,2,2,3,4,5,5,5,5,5,5,5])

