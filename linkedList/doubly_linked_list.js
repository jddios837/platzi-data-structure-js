class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class MySinglyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }

        this.tail = this.head;

        this.lenght = 1;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;

        this.tail.next = newNode;
        this.tail = newNode;

        this.lenght++;

        return this;
    }

    prepend(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;

        this.lenght++;

        return this;
    }

    insert(value, index) {
        // added in the tail
        if (index >= this.lenght) {
            this.append(value);
        }
        // added in the head
        if (index < 0) {
            this.prepend(value);
        }

        const newNode = new Node(value);
        const firstPointer = this.getTheIndex(index - 1);
        const holdingPointer = firstPointer.next;

        firstPointer.next = newNode;
        newNode.next = holdingPointer;

        this.lenght++;
        return this;
    }

    getTheIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }
}

let myLinkedList = new MySinglyLinkedList(1)