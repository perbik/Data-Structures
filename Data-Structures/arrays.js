let array = [];

//function for creating an array
function createArray(){
    array = [];
    document.getElementById('array-display').innerHTML = '';
    console.log("An empty array is created!");
}

//function for inserting an element
function insertElement(){
    const element = document.getElementById('insertElementInput').value;
    array.push(element);
    displayArray(); 
    console.log(`Element ${element} is inserted into the array.`);
}

//function for deleting an element
function deleteElement() {
    const element = document.getElementById('deleteElementInput').value;
    const index = array.indexOf(element);
    if (index !== -1) {
        array.splice(index, 1);
        displayArray(); 
        console.log(`Element ${element} deleted from the array.`);
    } else {
        console.log(`Element ${element} not found in the array.`);
    }
}

//fucntion for arranging the elements in ascending order
function arrangeAscending(){
    array.sort((a, b) => a - b);
    displayArray();
}

//function for arranging the elements in descending order
function arrangeDescending(){
    array.sort((a, b) => b - a);
    displayArray();
}

//function for returning to main menu
function returnMenu(){
    window.location.href="data-structures.html";
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