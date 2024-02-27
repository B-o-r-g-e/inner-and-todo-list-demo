class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor(array) {
        this.root = this.buildTree([...new Set(array.sort((a, b) => a - b))]);
    }

    buildTree(array) {
        if (array.length === 0) {
            return null;
        }

        const midIndex = Math.floor(array.length / 2);
        const rootNode = new Node(array[midIndex]);

        rootNode.left = this.buildTree(array.slice(0, midIndex));
        rootNode.right = this.buildTree(array.slice(midIndex + 1));

        return rootNode;
    }

    prettyPrint(node = this.root, prefix = "", isLeft = true) {
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
            this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    }

    insert(value) {
        if (!this.root) {
            this.root = new Node(value);
        } else {
            this._insert(this.root, value);
        }
    }

    _insert(node, value) {
        if (value < node.data) {
            if (node.left === null) {
                node.left = new Node(value);
            } else {
                this._insert(node.left, value);
            }
        } else if (value > node.data) {
            if (node.right === null) {
                node.right = new Node(value);
            } else {
                this._insert(node.right, value);
            }
        }
    }

    deleteItem(value) {
        if (this.root) {
            this.root = this._deleteItem(this.root, value);
        }
    }

    _deleteItem(node, value) {
        if (node === null) {
            return null;
        }

        if (value < node.data) {
            node.left = this._deleteItem(node.left, value);
        } else if (value > node.data) {
            node.right = this._deleteItem(node.right, value);
        } else {
            if (node.left === null && node.right === null) {
                return null;
            } else if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            }

            const successor = this._findMin(node.right);
            node.data = successor.data;
            node.right = this._deleteItem(node.right, successor.data);
        }

        return node;
    }

    _findMin(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    find(value) {
        return this._find(this.root, value);
    }

    _find(node, value) {
        if (node === null || node.data === value) {
            return node;
        }

        if (value < node.data) {
            return this._find(node.left, value);
        } else {
            return this._find(node.right, value);
        }
    }

    levelOrder(callback = null) {
        const result = [];
        const queue = [];

        if (this.root) {
            queue.push(this.root);
        }

        while (queue.length > 0) {
            const node = queue.shift();

            if (callback) {
                callback(node.data);
            } else {
                result.push(node.data);
            }

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

        return result;
    }

    inOrder(callback = null) {
        const result = [];
        this._inOrder(this.root, callback || ((data) => result.push(data)));
        return result;
    }

    _inOrder(node, callback) {
        if (node !== null) {
            this._inOrder(node.left, callback);
            callback(node.data);
            this._inOrder(node.right, callback);
        }
    }

    preOrder(callback = null) {
        const result = [];
        this._preOrder(this.root, callback || ((data) => result.push(data)));
        return result;
    }

    _preOrder(node, callback) {
        if (node !== null) {
            callback(node.data);
            this._preOrder(node.left, callback);
            this._preOrder(node.right, callback);
        }
    }

    postOrder(callback = null) {
        const result = [];
        this._postOrder(this.root, callback || ((data) => result.push(data)));
        return result;
    }

    _postOrder(node, callback) {
        if (node !== null) {
            this._postOrder(node.left, callback);
            this._postOrder(node.right, callback);
            callback(node.data);
        }
    }

    height(node = this.root) {
        if (node === null) {
            return -1;
        }

        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }

    depth(node = this.root) {
        if (node === null) {
            return 0;
        }

        return this.depth(node.parent) + 1;
    }

    isBalanced() {
        return this._isBalanced(this.root);
    }

    _isBalanced(node) {
        if (node === null) {
            return true;
        }

        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);

        if (Math.abs(leftHeight - rightHeight) <= 1 && this._isBalanced(node.left) && this._isBalanced(node.right)) {
            return true;
        }

        return false;
    }

    rebalance() {
        const values = this.inOrder();
        this.root = this.buildTree(values);
    }
}

// Driver Script
const getRandomNumbers = (count) => Array.from({ length: count }, () => Math.floor(Math.random() * 100));

const tree = new Tree(getRandomNumbers(10));
console.log("Is Balanced:", tree.isBalanced());
console.log("Level Order:", tree.levelOrder());
console.log("Pre Order:", tree.preOrder());
console.log("Post Order:", tree.postOrder());
console.log("In Order:", tree.inOrder());

tree.insert(120);
tree.insert(130);
tree.insert(140);
tree.insert(150);

console.log("Is Balanced:", tree.isBalanced());

tree.rebalance();

console.log("Is Balanced after Rebalance:", tree.isBalanced());
console.log("Level Order after Rebalance:", tree.levelOrder());
console.log("Pre Order after Rebalance:", tree.preOrder());
console.log("Post Order after Rebalance:", tree.postOrder());
console.log("In Order after Rebalance:", tree.inOrder());
