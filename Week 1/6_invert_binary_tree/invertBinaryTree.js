/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var invertTree = function(root) {
    if(!root) return null;
    invertTree(root.left);
    invertTree(root.right);
    let newLeft = root.left;
    root.left = root.right;
    root.right = newLeft;
    return root;
};

var TreeNode = function(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

// level-order arrays
function arrayToBinaryTree(arr, start = 0, end = arr.length - 1) {
    if (arr.length === 0) return null;

    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;

    while (i < arr.length) {
        const node = queue.shift();

        const leftVal = arr[i++];
        if (leftVal !== null && leftVal !== undefined) {
            const leftNode = new TreeNode(leftVal);
            node.left = leftNode;
            queue.push(leftNode);
        }

        const rightVal = arr[i++];
        if (rightVal !== null && rightVal !== undefined) {
            const rightNode = new TreeNode(rightVal);
            node.right = rightNode;
            queue.push(rightNode);
        }
    }

    return root;
}

// level-order arrays
function binaryTreeToArray(root) {
    if (!root) return [];

    const queue = [root];
    const result = [];

    while (queue.length > 0) {
        const node = queue.shift();
        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push(null);
        }
    }

    while (result[result.length - 1] === null) {
        result.pop();
    }

    return result;
}

module.exports = {
    invertTree, 
    arrayToBinaryTree, 
    binaryTreeToArray
};