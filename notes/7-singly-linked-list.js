// Single Linked List Pattern

/*
SLL methods:
- Push()
- Pop()
- Shift()
- Unshift()
- Get()
- Set()
- Insert()
- Remove()
*/

// The Linked List consists of Nodes
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
}

const sll = new SinglyLinkedList()
sll.push("Shifted")
sll.push("B")
sll.push("C")
sll.push("D")
sll.push("E")

sll.pop()
console.log(sll.shift())
console.log(sll.unshift("First"))
console.log("get:", sll.get(3).val )

console.log(sll)
let current = sll.head
console.log(current.val)
while (current.next) {
    current = current.next    
    console.log(current.val)
}

//expected output: A B C D