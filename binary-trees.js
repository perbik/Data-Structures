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

    insert(data) {
        const newData = parseInt(data);
        const newNode = new Node(newData);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
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

    delete(data) {
        this.root = this.deleteNode(this.root, data);
    }

    deleteNode(root, key) {
        if (root === null) return null;

        if (key < root.data) {
            root.left = this.deleteNode(root.left, key);
            return root;
        } else if (key > root.data) {
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
            root.data = minRightNode.data;
            root.right = this.deleteNode(root.right, minRightNode.data);
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
            this.displayNode(this.root, 770, 210, 250, treesContainer);
        }
    }
    
    displayNode(node, x, y, offsetX, container) {
        const nodeDiv = document.createElement('div'); //node div
        nodeDiv.classList.add('node');
        nodeDiv.innerText = node.data;
        nodeDiv.style.left = x + 'px';
        nodeDiv.style.top = y + 'px';
        container.appendChild(nodeDiv);
    
        if (node.left !== null) {
            const leftX = x - offsetX;
            const leftY = y + 100;
            const lineLeft = document.createElement('div'); //line div
            lineLeft.classList.add('line', 'left');
            lineLeft.style.left = (x - 200) + 'px'; //x-axis line
            lineLeft.style.top = (y + 120) + 'px'; //y-axis line
            lineLeft.style.width = offsetX - 30 + 'px'; //offset or gaps
            container.appendChild(lineLeft);
            this.displayNode(node.left, leftX, leftY, offsetX / 2, container); //positioning of the node and line
        }
    
        if (node.right !== null) {
            const rightX = x + offsetX;
            const rightY = y + 100;
            const lineRight = document.createElement('div');
            lineRight.classList.add('line', 'right');
            lineRight.style.left = (x + 25) + 'px';
            lineRight.style.top = (y + 135) + 'px';
            lineRight.style.width = offsetX + 'px';
            container.appendChild(lineRight);
            this.displayNode(node.right, rightX, rightY, offsetX / 2, container);
        }
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
