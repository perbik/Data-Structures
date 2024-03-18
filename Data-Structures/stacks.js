class Stack {
    constructor() {
        this.items = [];
        this.maxSize = null;
    }


    //pushing elements to the stack
    push(element) {
        if (this.items.length === this.maxSize) {
            displayText("STACKOVERFLOW");
        } else {
            clearMessage();
            this.items.push(element);
        }
    }


    //popping elements from the stack
    pop() {
        if (this.items.length === 0) {
            displayText("STACKUNDERFLOW");
        } else {
            clearMessage();
            this.items.pop();
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

    //changing specific element in the stadck using its index bc what if madami pa lang ganong element
    changeStack(index, newElement) {
        if (index >= 0 && index < this.maxSize) {
            clearMessage();
            this.items[index] = newElement;
        } else {
            displayText("The index is incorrect or out of limit");
        }
    }

    display() {
        let stackContainer = document.getElementById('stacks-container');
        stackContainer.innerHTML = '';

        for (let i = this.items.length - 1; i >= 0; i--) {
            const stackElement = document.createElement('div');
            stackElement.classList.add('stacks-element');
            stackElement.textContent = this.items[i];
            stackContainer.appendChild(stackElement);
        }

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
        stack.push(element);
    }
    insertElementInput.value = '';
}

function popElement() {
    stack.pop();
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
    window.location.href="data-structures.html";
}

//notes: put a message every after action ganon