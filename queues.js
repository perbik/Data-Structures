class Queue {
    constructor(){
        this.items = [];
        this.frontElement = 0;
        this.rearElement = 0;
    }

    //enqueue elements to the queue
    enqueue(element) {
        this.items[this.rearElement] = element;
        this.rearElement++;  
    }

    //dequeue elements to the queue
    dequeue() {
        if (this.frontElement === this.rearElement) {
            displayText("Queue is empty. Cannot dequeue element.");
        }
        const item = this.items.shift();
        this.items = this.items.slice(this.frontElement); // Create new array without dequeued element
        this.rearElement -= this.frontElement; // Adjust rearElement
        this.frontElement = 0; // Reset frontElement
        return item;
    }

    //check the front element
    checkFront() {
        if (this.items.length === 0) {
            displayText("Queue is empty");
        } else {
            displayText("Front Element: " + this.items[0]);
        }
    }

    //check the rear element
    checkRear(){
        if (this.items.length === 0) {
            displayText("Queue is empty");
        } else {
            displayText("Rear Element: " + this.items[this.items.length- 1]);
        }       
    }
    
    //display the queue
    display() {
        let queueContainer = document.getElementById('queues-container');
        queueContainer.innerHTML = '';
    
        for (let i = this.frontElement; i < this.rearElement; i++) {
            if (this.items[i] !== undefined) { 
                const queueElement = document.createElement('div');
                queueElement.classList.add('queues-element');
                queueElement.textContent = this.items[i];
                queueContainer.appendChild(queueElement);
            }
        }
    }
}

const queue = new Queue();

function createEmptyQueue(){
    clearMessage();
    let queueContainer = document.getElementById('queues-container');
    queueContainer.innerHTML = '';
    queue.items = [];
    queue.frontElement = 0;
    queue.rearElement = 0;
}

function enqueueElement(){
    const insertElementInput = document.getElementById('insertElementInput');
    const element = insertElementInput.value.trim();
    if (element !== ''){
        queue.enqueue(element);
    }
    insertElementInput.value = '';
}

function dequeueElement(){
    queue.dequeue();
}

function displayQueue(){
    queue.display();    
}

function checkFront(){
    queue.checkFront();
}

function checkRear(){
    queue.checkRear();
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