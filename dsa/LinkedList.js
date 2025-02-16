class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Add a node to the beginning of the list
    addFirst(data) {
        const newNode = new Node(data); // Fix: Use "new Node(data)" instead of "NewNode(data)"
        newNode.next = this.head;
        this.head = newNode;
    }

    // Add a node to the end of the list
    addLast(data) {
        const newNode = new Node(data); // Fix: Use "new Node(data)" instead of "NewNode(data)"
        
        // If the list is empty, set the new node as the head
        if (!this.head) {
            this.head = newNode;
            return;
        }

        // Traverse to the end of the list
        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        // Add the new node at the end
        current.next = newNode;
    }

    // Print the list (for debugging)
    print() {
        let current = this.head;
        const values = [];
        while (current) {
            values.push(current.data);
            current = current.next;
        }
        console.log(values);
    }
}