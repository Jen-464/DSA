"use strict";
const search = require("./binarySearch");

describe("search(nums, target)", () => {
    it("[-1,0,3,5,9,12] & 9 --> returns 4", () => {
        let nums = [-1, 0, 3, 5, 9, 12];
        let target = 9;
        let result = search(nums, target);
        expect(result).toBe(4);
    })
    it("[-1,0,3,5,9,12] & 2 --> returns -1, not found", () => {
        let nums = [-1, 0, 3, 5, 9, 12];
        let target = 2;
        let result = search(nums, target);
        expect(result).toBe(-1);
    })
    it("[0,1,2,3,4,5] & -2 --> returns -1, not found", () => {
        let nums = [0, 1, 2, 3, 4, 5];
        let target = -2;
        let result = search(nums, target);
        expect(result).toBe(-1);
    })
    it("[0,1,2,3,4,5] & 10 --> returns -1, not found", () => {
        let nums = [0, 1, 2, 3, 4, 5];
        let target = 10;
        let result = search(nums, target);
        expect(result).toBe(-1);
    })

})