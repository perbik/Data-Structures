let array = [];

//function for creating an array
function createArray(){
    array = [];
    document.getElementById('array-display').innerHTML = '';
    displayText("An empty array is created!");
}

//function for inserting an element
function insertElement(){
    const element = document.getElementById('insertElementInput').value;
    array.push(element);
    displayArray(); 
    displayText(`Element ${element} is inserted into the array.`);
    document.getElementById('insertElementInput').value = '';
}

//function for deleting an element
function deleteElement() {
    const element = document.getElementById('deleteElementInput').value;
    const index = array.indexOf(element);
    if (index !== -1) {
        array.splice(index, 1);
        displayArray(); 
        displayText(`Element ${element} deleted from the array.`);
        document.getElementById('deleteElementInput').value = '';
    } else {
        displayText(`Element ${element} not found in the array.`);
        document.getElementById('deleteElementInput').value = '';
    }
    
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

//function for returning to main menu
function returnMenu(){
    window.location.href="index.html";
}

//function for displaying the array
function displayArray() {
    const arrayContainer = document.getElementById('array-display');
    arrayContainer.innerHTML = ''; 
    array.forEach(element => {
        const elementDiv = document.createElement('div');
        elementDiv.classList.add('array-element');
        elementDiv.textContent = element;
        arrayContainer.appendChild(elementDiv);
    });

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