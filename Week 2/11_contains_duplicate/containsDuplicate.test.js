"use strict";
const containsDuplicate = require("./containsDuplicate");

describe("containsDuplicate(nums)", () => {
    it("[1,2,3,1] --> returns true", () => {
        let nums = [1,2,3,1];
        let result = containsDuplicate(nums);
        expect(result).toBe(true);
    })
    it("[1,2,3,4] --> returns false", () => {
        let nums = [1,2,3,4];
        let result = containsDuplicate(nums);
        expect(result).toBe(false);
    })
    it("[1,1,1,3,3,4,3,2,4,2] --> returns true", () => {
        let nums = [1,1,1,3,3,4,3,2,4,2];
        let result = containsDuplicate(nums);
        expect(result).toBe(true);
    })
})