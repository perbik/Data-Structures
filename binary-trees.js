class Node {
    constructor(element){
        this.element = element;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(){
        this.root = null;
    }

    //adding element/element
    insert(element) {
        const newelement = parseInt(element);
        const newNode = new Node(newelement);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    //recursively add node
    insertNode(node, newNode) {
        if (newNode.element < node.element) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    delete(element) {
        this.root = this.deleteNode(this.root, element);
    }

    deleteNode(root, key) {
        if (root === null) return null;

        if (key < root.element) {
            root.left = this.deleteNode(root.left, key);
            return root;
        } else if (key > root.element) {
            root.right = this.deleteNode(root.right, key);
            return root;
        } else {
            if (root.left === null && root.right === null) {
                root = null;
                return root;
            }

            if (root.left === null) {
                root = root.right;
                return root;
            } else if (root.right === null) {
                root = root.left;
                return root;
            }

            const minRightNode = this.findMinNode(root.right);
            root.element = minRightNode.element;
            root.right = this.deleteNode(root.right, minRightNode.element);
            return root;
        }
    }

    findMinNode(node) {
        if (node.left === null) return node;
        return this.findMinNode(node.left);
    }

    display() {
        const treesContainer = document.getElementById('trees-container');
        treesContainer.innerHTML = ''; 
        if (this.root !== null) {
            const maxLevel = 4; 
            this.displayNode(this.root, 770, 175, 300, treesContainer, 0, maxLevel);
        }
    }
    
    
    displayNode(node, x, y, offsetX, container, currentLevel, maxLevel) {
        if (currentLevel < maxLevel) { //max at level 3
            const nodeDiv = document.createElement('div');
            nodeDiv.classList.add('node');
            nodeDiv.innerText = node.element;
            nodeDiv.style.left = x + 'px';
            const topY = y + 50;
            nodeDiv.style.top = topY + 'px';
            container.appendChild(nodeDiv);
    
            if (node.left !== null) {
                const leftX = x  - offsetX;
                this.displayNode(node.left, leftX, topY, offsetX / 2, container, currentLevel + 1, maxLevel);
            }
            if (node.right !== null) {
                const rightX = x + offsetX;
                this.displayNode(node.right, rightX, topY, offsetX / 2, container, currentLevel + 1, maxLevel);
            }
            
        } else {
            displayText("You reached the maximum level, level 3!");
        }
    }
    
    getTreeInfo() {

    }
      
}

const tree = new BinaryTree();

function createEmptyTree() {
    clearMessage();
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

function displayStructure() {
    clearMessage();
    const treeInfo = tree.getTreeInfo();
    const structureContainer = document.getElementById('structure-container');
}

function displayText(message) {
    clearMessage(); 
    const msgText = document.createElement('p');
    msgText.textContent = message;
    document.getElementById('response').appendChild(msgText);
}

function clearMessage() {
    document.getElementById('response').innerHTML = '';
}

function returnMenu() {
    window.location.href="index.html";
}
