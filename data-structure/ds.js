class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (this.head) {
            newNode.next = this.head;
        }
        this.head = newNode;
    }

    size() {
        let count = 0;
        if (this.head) {
            let current = this.head;
            do {
                count++;
                current = current.next;
            } while (current);
        }
        return count;
    }

    at(index) {
        if (index < 0 || !this.head) {
            return null;
        }

        let count = 0;
        let current = this.head;
        if (current) {
            do {
                if (count === index) {
                    return current;
                }
                count++;
                current = current.next;
            } while (current);
        }

        return null;
    }

    pop() {
        if (!this.head) {
            return null;
        }

        if (!this.head.next) {
            const popped = this.head;
            this.head = null;
            return popped;
        }

        let current = this.head;
        let previous = null;
        if (current) {
            do {
                if (!current.next) {
                    previous.next = null;
                    return current;
                }
                previous = current;
                current = current.next;
            } while (current);
        }

        return null;
    }

    tail() {
        if (!this.head) {
            return null;
        }

        let current = this.head;
        if (current) {
            do {
                if (!current.next) {
                    return current;
                }
                current = current.next;
            } while (current);
        }

        return null;
    }
}

// Example Usage:
const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.prepend(5);
console.log(linkedList.toString()); // (5) -> (10) -> (20) -> null
console.log(linkedList.size()); // 3
console.log(linkedList.head()); // Node { value: 5, next: Node { value: 10, next: Node { value: 20, next: null } } }
console.log(linkedList.tail()); // Node { value: 20, next: null }
console.log(linkedList.at(1)); // Node { value: 10, next: Node { value: 20, next: null } }
console.log(linkedList.pop()); // Node { value: 20, next: null }
console.log(linkedList.toString()); // (5) -> (10) -> null
