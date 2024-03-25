class Node {
    constructor(element){
        this.element = element;
        this.left = null;
        this.right = null;
        this.level = 0;
    }
}

class BinaryTree {
    constructor(){
        this.root = null;
    }

    //adding element
    insert(element) {
        const newElement = parseInt(element);
        const newNode = new Node(newElement);
        //checking if the tree is empty
        if (this.root === null) {
            this.root = newNode; //if the tree is empty, insert the element as the root
        } else {
            this.insertNode(this.root, newNode); //if the tree is not empty, new node
        }
    }

    //recursively add node
    insertNode(node, newNode) {
        //comparing the elements
        if (newNode.element < node.element) { //if it's less than the node.element(existing node), it'll be on the left subtree
            //checking if it's empty
            if (node.left === null) { 
                node.left = newNode; //if empty, it's a new node
            } else {
                this.insertNode(node.left, newNode); //if not, call this function again to compare
            }
        } else { //if it's greater than, right subtree
            if (node.right === null) {
                node.right = newNode; //if empty, it's a new node
            } else {
                this.insertNode(node.right, newNode); //if not, call this function again to compare
            }
        }
    }

    //deleting the element
    delete(element) {
        this.root = this.deleteNode(this.root, element);
    }

    //deleting the node
    deleteNode(root, key) {
        //checking if the root is empty
        if (root === null) {
            return null;
        }

        //checking if the element to be deleted is less than, greater than, or equal to the root
        if (key < root.element) {
            root.left = this.deleteNode(root.left, key); //if less than, get the left as the root
            return root;
        } else if (key > root.element) {
            root.right = this.deleteNode(root.right, key); //if greater than, get the right as the root
            return root;
        } else {
            if (root.left === null && root.right === null) { //if it's leaf, just remove
                root = null;
                return root;
            }
            if (root.left === null) { //has no left node
                root = root.right; //get the right as the root
                return root;
            } else if (root.right === null) { //has no right node
                root = root.left; //left as the root
                return root;
            }
            const minRightNode = this.findMinNode(root.right); //treaversing the tree. paricularly, right subtree (successor)
            root.element = minRightNode.element;
            root.right = this.deleteNode(root.right, minRightNode.element);
            return root;
        }
    }

    findMinNode(node) { //finding the minimum integer/number
        if (node.left === null) return node;
        return this.findMinNode(node.left);
    }

    //displaying the tree
    display() {
        const treesContainer = document.getElementById('trees-container');
        treesContainer.innerHTML = ''; 
        if (this.root !== null) {
            const maxLevel = 3; 
            this.displayNode(this.root, 770, 175, 300, treesContainer, 0, maxLevel);
        }
    }
    
    //displaying the actual nodes getting the positions, gaps, and number of levels and max level
    displayNode(node, x, y, offsetX, container, currentLevel, maxLevel) {
        if (currentLevel <= maxLevel) {
            displayText(`Level: ${currentLevel}`); //displaying the current level
            let nodeHTML = `<div class="node" style="left:${x}px; top:${y + 50}px;">${node.element}</div>`;
            container.innerHTML += nodeHTML;
            //checking if the left subtree is empty
            if (node.left !== null) {
                const leftX = x - offsetX; //compute the positioning and gap between nodes
                this.displayNode(node.left, leftX, y + 50, offsetX / 2, container, currentLevel + 1, maxLevel); //displaying node recursively
            }
            //checking if the right subtree is empty
            if (node.right !== null) {
                const rightX = x + offsetX;
                this.displayNode(node.right, rightX, y + 50, offsetX / 2, container, currentLevel + 1, maxLevel);
            }
        } else {
            displayText("You reached the maximum level, level 3!");
        }
    }
    
    //displaying the parent nodes, leaf nodes, and level of the tree
    displayTreeStructure() {
        let parentNodes = [];
        let leafNodes = [];
        const maxLevel = 3;
        let currentLevel = 0; 
        const treesContainer = document.getElementById('trees-container');
        treesContainer.innerHTML = '';
        if (this.root !== null) {
            currentLevel = this.displayNode(this.root, 770, 175, 300, treesContainer, currentLevel, maxLevel);
            this.identifyNodes(this.root, parentNodes, leafNodes);
        }
        displayText(`Parent Nodes: ${parentNodes} && Leaf Nodes: ${leafNodes} && Level: ${currentLevel}`);
    }

    identifyNodes(node, parentNodes, leafNodes) {
        if (node === null) {
            return;
        } 
    
        if (node.left === null && node.right === null) {
            leafNodes[leafNodes.length] = node.element;
        } else {
            parentNodes[parentNodes.length] = node.element;
        }
    
        //checking each subtree
        this.identifyNodes(node.left, parentNodes, leafNodes);
        this.identifyNodes(node.right, parentNodes, leafNodes);
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
    const currentLevel = tree.displayTreeStructure();
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
