"use strict";
const {invertTree, arrayToBinaryTree, binaryTreeToArray} = require("./invertBinaryTree");

describe("isPalindrome(s)", () => {
    it("[] -> return []", () => {
        let root = arrayToBinaryTree([]);
        let result = invertTree(root);
        let resultArray = binaryTreeToArray(result);
        expect(resultArray).toStrictEqual([]);
    })
    it("[4,2,7,1,3,6,9] -> return [4,7,2,9,6,3,1]", () => {
        let root = arrayToBinaryTree([4,2,7,1,3,6,9]);
        let result = invertTree(root);
        let resultArray = binaryTreeToArray(result);
        expect(resultArray).toStrictEqual([4,7,2,9,6,3,1]);
    })
    it("[2,1,3] -> return [2,3,1]", () => {
        let root = arrayToBinaryTree([2,1,3]);
        let result = invertTree(root);
        let resultArray = binaryTreeToArray(result);
        expect(resultArray).toStrictEqual([2,3,1]);
    })
    it("[1,2,5,null,4,null,6] -> return [1,5,2,6,null,4]", () => {
        let root = arrayToBinaryTree([1,2,5,null,4,null,6]);
        let result = invertTree(root);
        let resultArray = binaryTreeToArray(result);
        expect(resultArray).toStrictEqual([1,5,2,6,null,4]);
    })
})