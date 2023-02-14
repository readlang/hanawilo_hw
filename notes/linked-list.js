
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

        if (!this.length) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this // "this" refers to the linkedlist you're working on
    }

    pop() {
        if (!this.length) return; // return undefined

        let current = this.head
        let newTail = current

        while (current.next) {
            newTail = current
            current = current.next
        }

        this.tail = newTail
        this.tail.next = null
        this.length--

        if (this.length === 0) {
            this.head = null
            this.tail = null
        }

        return current

        // ended here...
    }
}

const sll = new SinglyLinkedList()
sll.push(9)
sll.push(10)

console.log(sll)