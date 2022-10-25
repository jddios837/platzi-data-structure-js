const strArr = ["(1,2)", "(2,4)", "(7,2)"];

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {

    }

    TreeConstructor(strArr) {
        this.root = null;

        strArr.forEach(value => {
            const values = value.substring(1, value.length - 1).split(',');
            const child = values[0];
            const parent = values[1];
            // build tree
            if (this.root === null) {
                this.root = this.saveNode(child, parent);
            } else {

            }

        });

        return this.root;
    }

    saveNode(child, parent) {
        let newNode = new Node(parent);
        // add it in the node left
        if (child < parent) {
            newNode.left = new Node(child);
        } else {
            this.root.right = new Node(child);
        }

        return newNode;
    }

    searchNode(node, child) {
        if (node.value === child) {
            return node;
        }

        while (true) {
            if (node.left != null && node.left.value === child) {
                return node.left;
            }

            if (node.right != null && node.right.value === child) {
                return node.right;
            }


        }
    }
}

const tree = BinaryTree();



