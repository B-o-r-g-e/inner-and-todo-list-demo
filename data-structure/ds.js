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
        newNode.next = this.head;
        this.head = newNode;
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    head() {
        return this.head;
    }

    tail() {
        let current = this.head;
        while (current && current.next) {
            current = current.next;
        }
        return current;
    }

    at(index) {
        if (index < 0) {
            return null;
        }

        let count = 0;
        let current = this.head;
        while (current && count < index) {
            current = current.next;
            count++;
        }

        return current ? current : null;
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
        while (current.next) {
            previous = current;
            current = current.next;
        }

        previous.next = null;
        return current;
    }

    contains(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    find(value) {
        let index = 0;
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return index;
            }
            current = current.next;
            index++;
        }
        return null;
    }

    toString() {
        let result = '';
        let current = this.head;
        while (current) {
            result += `(${current.value}) -> `;
            current = current.next;
        }
        result += 'null';
        return result;
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
console.log(linkedList.contains(20)); // true
console.log(linkedList.find(10)); // 1
console.log(linkedList.pop()); // Node { value: 20, next: null }
console.log(linkedList.toString()); // (5) -> (10) -> null
