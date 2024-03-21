class Stack {
    constructor() {
        this.items = [];
        this.maxSize = null;
    }


    //pushing elements to the stack
    pushStack(element) {
        //checking for fullness
        if (this.items.length === this.maxSize) {
            displayText("STACKOVERFLOW");
        } else {
            //pushing element
            clearMessage();
            displayText(`You pushed ${element} into the stack! Click Display to see.`);
            this.items[this.items.length] = element; //assigning index to the element
        }
    }


    //popping elements from the stack
    popStack() {
        //checking for emptiness
        if (this.items.length === 0) {
            displayText("STACKUNDERFLOW");
        } else {
            //removing the last inserted element
            clearMessage();
            displayText(`You popped ${this.items[this.items.length - 1]} from the stack! Click Display to see.`);
            this.items[this.items.length - 1] = undefined; //assigning undefined to the last index
            this.items.length--; //reducing the length
        }
    }

    //setting the size of the stack
    setSize(size) {
        if (isNaN(size) || size <= 0) {
            return false;
        }
        this.maxSize = parseInt(size);
        return true;
    }

    //changing specific element in the stack using its index
    changeStack(index, newElement) {
        if (index >= 0 && index < this.maxSize) {
            clearMessage();
            this.items[index] = newElement;
        } else {
            displayText("The index is incorrect or out of limit");
        }
    }

    //displaying the stack
    display() {
        let stackContainer = document.getElementById('stacks-container');
        stackContainer.innerHTML = '';
        let stackHTML = '';
        //iterating the array/stack
        for (let i = this.items.length - 1; i >= 0; i--) {
            stackHTML += `<div class="stacks-element">${this.items[i]}</div>`;
        }
        stackContainer.innerHTML = stackHTML;
    }
}

const stack = new Stack();

function createEmptyStack() {
    clearMessage();
    let stackContainer = document.getElementById('stacks-container');
    stackContainer.innerHTML = '';
    stack.items = [];
    stack.maxSize = null;
}

function setSize() {
    const setSizeInput = document.getElementById('setSizeInput');
    const size = parseInt(setSizeInput.value.trim());
    if (!isNaN(size) && size > 0) {
        stack.setSize(size);
    }
    setSizeInput.value = '';
}

function pushElement() {
    const insertElementInput = document.getElementById('insertElementInput');
    const element = insertElementInput.value.trim();
    if (element !== '') {
        stack.pushStack(element);
    }
    insertElementInput.value = '';
}

function popElement() {
    stack.popStack();
}

function changeElement() {
    const changeElementInput = parseInt(document.getElementById('changeElementInput').value);
    const setElementInput = parseInt(document.getElementById('setElementInput').value);
    if (!isNaN(changeElementInput) && !isNaN(setElementInput)) {
        stack.changeStack(changeElementInput, setElementInput);
        document.getElementById('changeElementInput').value = ''; 
        document.getElementById('setElementInput').value = ''; 
    }
}

function displayStack() {
    stack.display();
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

function returnMenu() {
    window.location.href="index.html";
}

