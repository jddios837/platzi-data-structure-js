class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    // add a new element to the queue
    enqueue(value) {
        const newNode = new Node(value);

        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.length++;

        return this;
    }
    // get first element on the queue
    peek() {
        return this.first;
    }

    dequeue() {
        if (this.length === 0) {
            console.log("No element on the queue");
        } else {
            const holdingHead = this.first.next;
            this.first = holdingHead;
            this.length--;
        }

        return this;
    }
}

let myQueue = new Queue();