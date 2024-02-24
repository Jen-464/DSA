"use strict";
const twoSum = require("./twoSum");

describe("twoSum(nums, target)", () => {
    it("[2, 7, 11, 15] with target 9 --> should result in [0, 1]", () => {
        let nums = [2, 7, 11, 15];
        let target = 9;
        let result = twoSum(nums, target);
        expect(result).toStrictEqual([0, 1]);
    })
    it("[3, 2, 4] with target 6 --> should result in [1, 2]", () => {
        let nums = [3, 2, 4];
        let target = 6;
        let result = twoSum(nums, target);
        expect(result).toStrictEqual([1, 2]);
    })
    it("[3, 3] with target 6 --> should result in [0, 1]", () => {
        let nums = [3, 3];
        let target = 6;
        let result = twoSum(nums, target);
        expect(result).toStrictEqual([0, 1]);
    })
    it("[3, 4, -1, 5] with target 2 --> should result in [0, 2]", () => {
        let nums = [3, 4, -1, 5];
        let target = 2;
        let result = twoSum(nums, target);
        expect(result).toStrictEqual([0, 2]);
    })
})