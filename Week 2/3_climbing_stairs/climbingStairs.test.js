"use strict";
const climbingStairs = require("./climbingStairs");

describe("climbingStairs(n)", () => {
    it("1 --> returns 1", () => {
        let n = 1;
        let result = climbingStairs(n);
        expect(result).toBe(1);
    })
    it("2 --> returns 2", () => {
        let n = 2;
        let result = climbingStairs(n);
        expect(result).toBe(2);
    })
    it("3 --> returns 3", () => {
        let n = 3;
        let result = climbingStairs(n);
        expect(result).toBe(3);
    })
    it("4 --> returns 5", () => {
        let n = 4;
        let result = climbingStairs(n);
        expect(result).toBe(5);
    })
    it("5 --> returns 8", () => {
        let n = 5;
        let result = climbingStairs(n);
        expect(result).toBe(8);
    })
    it("6 --> returns 13", () => {
        let n = 6;
        let result = climbingStairs(n);
        expect(result).toBe(13);
    })
    // fibonnaci
})