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
        let newTail = current

        while (current.next) {
            newTail = current
            current = current.next 
            // current will be one further than newTail
        }

        this.tail = newTail  // newTail will be the 2nd to last
        this.tail.next = null // this will drop last node from SLL
        this.length-- 

        if (this.length === 0) {
            this.head = null
            this.tail = null
        }

        // return the element popped off the end
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

        while (condition) {
            
        }

    }

    set(){

    }

    insert(){

    }

    remove(){

    }
}

const sll = new SinglyLinkedList()
sll.push(9)
sll.push(10)

console.log(sll)