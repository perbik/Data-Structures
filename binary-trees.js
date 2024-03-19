class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(){
        this.root = null;
    }

}

const tree = new BinaryTree();

function createEmptyTree() {
    let treeContainer = document.getElementById('trees-container');
    treeContainer.innerHTML = ''; 
    tree.root = null;
}

function insertElement() {
    const insertElementInput = document.getElementById('insertElementInput');
    const element = insertElementInput.value.trim();
    if (element !== ''){
        tree.insert(element);
    }
    insertElementInput.value = '';
}

function deleteElement() {
    const deleteElementInput = document.getElementById('deleteElementInput');
    const element = deleteElementInput.value.trim();
    if (element !== '') {
        tree.delete(element);
    }
    deleteElementInput.value = '';
}

function displayTree() {
    tree.display();
}

function displayStructure(){
    
}

function returnMenu() {
    window.location.href="index.html";
}
