class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    //insertion of element
    insertNode(element) {
        const newNode = new Node(element); //creating a node
        //checking if the list is empty, if empty - make the initial element the head
        if (!this.head) { 
            this.head = newNode;
            displayText(`You inserted element ${element} into the linked list. Click display to see.`);
        } else { //adding the next elements to the list
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode; //inserting the new element to the current last node
            displayText(`You inserted element ${element} into the linked list. Click display to see.`);
        }
    }

    //deletion of element
    deleteNode(element) {
        //checking if the list is empty, return if it's empty and checking if it's the head
        if (!this.head || this.head.element === element) {
            this.head = this.head ? this.head.next : null;
            displayText(`You deleted element ${element} from the linked list. Click display to see.`);
            return;
        }
        // traversing the list to find the specific element if it's not in the head
        let current = this.head;
        while (current.next) {
            if (current.next.element === element) {
                current.next = current.next.next;
                displayText(`You deleted element ${element} from the linked list. Click display to see.`);
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
        displayText(`You just reversed the order of the linked list. Click display to see.`);
    }

    //removing duplicates from the linked list
    removeDuplicates() {
        let current = this.head;
        let prev = null;
        let noDuplicates = {};
        //checking if the element has duplicates
        while (current) {
            if (noDuplicates[current.element]) { //if it has duplicates update the prev node/pointer
                prev.next = current.next;
            } else { //if it doesn't have duplicates, it will be return as true
                noDuplicates[current.element] = true;
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
        let headNode = '<div class="node">head</div>'; //adding the head
        listContainer.innerHTML += headNode;
        let headArrow = '<div class="arrow">→</div>'; //adding the arrows/poitners
        listContainer.innerHTML += headArrow;
        //
        while (current) {
            let nodeElement = `<div class="node">${current.element}</div>`; //inserting the elements 
            listContainer.innerHTML += nodeElement;
            let arrowElement = '<div class="arrow">→</div>'; //adding arrow after inserting an element
            listContainer.innerHTML += arrowElement;
            current = current.next;
        }
        let nullNode = '<div class="node">null</div>'; //adding the null
        listContainer.innerHTML += nullNode;
    }
}

// create an instance of a linked list
const linkedList = new LinkedList();

// creating an empty linked list
function createEmptyList() {
    clearMessage();
    let listContainer = document.getElementById('list-container');
    listContainer.innerHTML = ''; 
    linkedList.head = null;
}

// inserting an element
function insertElement() {
    const insertElementInput = document.getElementById('insertElementInput');
    const element = insertElementInput.value.trim();
    if (element !== '') {
        linkedList.insertNode(element);
    }
    insertElementInput.value = '';
}

// deleting an element
function deleteElement() {
    const deleteElementInput = document.getElementById('deleteElementInput');
    const element = deleteElementInput.value.trim();
    if (element !== '') {
        linkedList.deleteNode(element);
    }
    deleteElementInput.value = '';
}

// function to be called when reversing an element
function reverseList() {
    linkedList.reverse();
}

//function to be called to remove duplicates
function removeDuplicates() {
    linkedList.removeDuplicates();
}

//function to be called to display the linked list
function displayLinkedList() {
    linkedList.display();
}

//function for displaying texts
function displayText(message) {
    clearMessage(); 
    const msgText = document.createElement('p');
    msgText.textContent = message;
    document.getElementById('response').appendChild(msgText);
}

//function for clearing message
function clearMessage() {
    document.getElementById('response').innerHTML = '';
}

//function to return to the main menu
function returnMenu() {
    window.location.href="index.html";
}
   