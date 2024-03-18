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
    dequeue(){
        const item = this.items[this.frontElement];
        delete this.items[this.frontElement];
        this.frontElement++;
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
            displayText("Front Element: " + this.items[this.items.length - 1]);
        }       
    }
}


function returnMenu() {
    window.location.href="data-structures.html";
}