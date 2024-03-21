class Queue {
    constructor(){
        this.items = [];
        this.frontElement = 0; //index used for the front element
        this.rearElement = 0; //index used for the rear element (initial)
    }

    //enqueue elements to the queue
    enqueueElement(element) {
        this.items[this.rearElement] = element; //inserting the element to the rear
        displayText(`You enqueued element ${element} to the queue! Click Display to see.`);
        this.rearElement++; //increment the index for the next input
    }

    //dequeue elements to the queue
    dequeueElement() {
        //checking if the queue is empty
        if (this.frontElement === this.rearElement) { 
            displayText("Queue is empty.");
        }
        const item = this.items[this.frontElement]; //assign the front element
        displayText(`You dequeued element ${item} from the queue! Click Display to see.`);
        this.items[this.frontElement] = undefined; //assigning undefined to the front element to remove its value
        this.frontElement = (this.frontElement + 1) % this.items.length; //moving the next element
    }
    

    //check the front element
    checkFront() {
        if (this.frontElement === this.rearElement) {
            displayText("Queue is empty");
        } else {
            displayText("Front Element: " + this.items[this.frontElement]); //element at the this.items[0] will be displayed
        }
    }

    //check the rear element
    checkRear(){
        if (this.items.length === 0) {
            displayText("Queue is empty");
        } else {
            displayText("Rear Element: " + this.items[this.items.length- 1]); //element in the current length - 1 of the array will be displayed
        }       
    }
    
    //display the queue
    display() {
        const queueContainer = document.getElementById('queues-container');
        queueContainer.innerHTML = '';
        let queueHTML = '';
        //iterating the elements in the queue
        for (let i = this.frontElement; i < this.rearElement; i++) {
            if (this.items[i] !== undefined) {
                const queueElement = '<div class="queues-element">' + this.items[i] + '</div>';
                queueHTML += queueElement;
            }
        }
        queueContainer.innerHTML = queueHTML;
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
        queue.enqueueElement(element);
    }
    insertElementInput.value = '';
}

function dequeueElement(){
    queue.dequeueElement();
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