let array = [];

//function for creating an array
function createArray(){
    array = [];
    document.getElementById('array-display').innerHTML = '';
    displayText("An empty array is created!");
}

//function for inserting an element
function insertElement(){
    const intInsert = document.getElementById('insertElementInput').value;
    //assigning element to the available index/position in the array
    array[array.length] = intInsert; 
    displayArray(); 
    displayText(`Element ${intInsert} is inserted into the array.`);
    document.getElementById('insertElementInput').value = '';
}

//function for deleting an element
function deleteElement() {
    const intDelete = document.getElementById('deleteElementInput').value;
    let intIndex = -1;
    //finding the index of the element to delete
    for (let i = 0; i < array.length; i++) { 
        if (array[i] === intDelete) {
            intIndex = i;
            break;
        }
    }
    //moving the index of the elements
    if (intIndex !== -1) { //checking if the element has found
        for (let i = intIndex; i < array.length - 1; i++) { //actual moving of the indices
            array[i] = array[i + 1];
        }
        array.length--; //reducing the length of the array
        displayArray();
        displayText(`Element ${intDelete} deleted from the array.`);
    } else {
        displayText(`Element ${intDelete} not found in the array.`);
    }
    document.getElementById('deleteElementInput').value = '';
}

// function to perform bubble sort in ascending order
function bubbleSortAscending(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (parseInt(arr[j]) > parseInt(arr[j + 1])) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// function to perform bubble sort in descending order
function bubbleSortDescending(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (parseInt(arr[j]) < parseInt(arr[j + 1])) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

//function for arranging the elements in ascending order using bubble sort
function arrangeAscending(){
    bubbleSortAscending(array);
    displayArray();
    displayText("The array is arranged in ascending order using bubble sort!");
}

//function for arranging the elements in descending order using bubble sort
function arrangeDescending(){
    bubbleSortDescending(array);
    displayArray();
    displayText("The array is arranged in descending order using bubble sort!");
}

//function for displaying the array
function displayArray() {
    const arrayContainer = document.getElementById('array-display');
    arrayContainer.innerHTML = ''; 
    let arrayHTML = '';
    //iterating the array
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const elementHTML = `<div class="array-element">${element}</div>`; //creating the display by putting the elements
        arrayHTML += elementHTML; //adding the string (elements) to the container
    }
    arrayContainer.innerHTML = arrayHTML; // setting the html content
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

//function for returning to main menu
function returnMenu(){
    window.location.href="index.html";
}