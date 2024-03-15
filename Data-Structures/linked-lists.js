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

    //insertion of element
    insertNode(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    //deletion of element
    deleteNode(data) {
        if (!this.head) {
            return;
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    //reversing the order of the list
    reverse() {
        let prev = null;
        let current = this.head;
        while (current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    // Function to remove duplicates from the linked list
    removeDuplicates() {
        const set = new Set();
        let current = this.head;
        let prev = null;
        while (current) {
            if (set.has(current.data)) {
                prev.next = current.next;
            } else {
                set.add(current.data);
                prev = current;
            }
            current = current.next;
        }
    }

    // Function to display the linked list
    display() {
        let current = this.head;
        let listContainer = document.getElementById('list-container');
        listContainer.innerHTML = '';

        const headNode = document.createElement('div');
        headNode.classList.add('node');
        headNode.textContent = 'head';
        listContainer.appendChild(headNode);
    
        const headArrowElement = document.createElement('span');
        headArrowElement.classList.add('arrow');
        headArrowElement.textContent = '→';
        listContainer.appendChild(headArrowElement);

        while (current) {
            const nodeElement = document.createElement('div');
            nodeElement.classList.add('node');
            nodeElement.textContent = current.data;
            listContainer.appendChild(nodeElement);

            const arrowElement = document.createElement('span');
            arrowElement.classList.add('arrow');
            arrowElement.textContent = '→';
            listContainer.appendChild(arrowElement);

            current = current.next;
        }

        const nullNode = document.createElement('div');
        nullNode.classList.add('node');
        nullNode.textContent = 'null';
        listContainer.appendChild(nullNode);
    }
}

// Creating an instance of LinkedList
const linkedList = new LinkedList();

// Linked list operations functions
function createEmptyList() {
    let listContainer = document.getElementById('list-container');
    listContainer.innerHTML = ''; 
    linkedList.head = null;
}

function insertElement() {
    const insertElementInput = document.getElementById('insertElementInput');
    const data = insertElementInput.value.trim();
    if (data !== '') {
        linkedList.insertNode(data);
    }
    insertElementInput.value = '';
}

function deleteElement() {
    const deleteElementInput = document.getElementById('deleteElementInput');
    const data = deleteElementInput.value.trim();
    if (data !== '') {
        linkedList.deleteNode(data);
    }
    deleteElementInput.value = '';
}

function reverseList() {
    linkedList.reverse();
}

function removeDuplicates() {
    linkedList.removeDuplicates();
}

function displayLinkedList() {
    linkedList.display();
}

function returnMenu() {
    window.location.href="data-structures.html";
}
   