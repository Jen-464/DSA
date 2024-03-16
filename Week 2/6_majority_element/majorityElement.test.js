"use strict";
const majorityElement = require("./majorityElement");

describe("majorityElement(nums)", () => {
    it("[3,2,3] --> returns 3", () => {
        let nums = [3,2,3];
        let result = majorityElement(nums);
        expect(result).toStrictEqual(3);
    })
    it("[2,2,1,1,1,2,2] --> returns 2", () => {
        let nums = [2,2,1,1,1,2,2];
        let result = majorityElement(nums);
        expect(result).toStrictEqual(2);
    })
    it("[3,3,2,2,2] --> returns 2", () => {
        let nums = [3,3,2,2,2];
        let result = majorityElement(nums);
        expect(result).toStrictEqual(2);
    })
})