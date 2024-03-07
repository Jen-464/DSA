"use strict";
const { mergeTwoLists, arrayToLinkedList } = require("./mergeTwoSortedLists");

describe("mergeTwoLists(list1, list2)", () => {
    it("[1,2,4] & [1,3,4] --> returns [1,1,2,3,4,4]", () => {
        let list1 = arrayToLinkedList([1, 2, 4]);
        let list2 = arrayToLinkedList([1, 3, 4]);
        let result = mergeTwoLists(list1, list2);
        let expectedOutput = arrayToLinkedList([1, 1, 2, 3, 4, 4]);
        expect(result).toStrictEqual(expectedOutput);
    })
    it("[] & [] --> returns []", () => {
        let list1 = arrayToLinkedList([]);
        let list2 = arrayToLinkedList([]);
        let result = mergeTwoLists(list1, list2);
        let expectedOutput = arrayToLinkedList([]);
        expect(result).toStrictEqual(expectedOutput);
    })
    it("[] & [0] --> returns [0]", () => {
        let list1 = arrayToLinkedList([]);
        let list2 = arrayToLinkedList([0]);
        let result = mergeTwoLists(list1, list2);
        let expectedOutput = arrayToLinkedList([0]);
        expect(result).toStrictEqual(expectedOutput);
    })
    it("[0,1,4,5] & [0,2,3] --> returns [0,0,1,2,3,4,5]", () => {
        let list1 = arrayToLinkedList([0, 1, 4, 5]);
        let list2 = arrayToLinkedList([0, 2, 3]);
        let result = mergeTwoLists(list1, list2);
        let expectedOutput = arrayToLinkedList([0, 0, 1, 2, 3, 4, 5]);
        expect(result).toStrictEqual(expectedOutput);
    })
})