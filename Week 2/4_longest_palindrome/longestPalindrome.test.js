"use strict";
const longestPalindrome = require("./longestPalindrome");

describe("longestPalindrome(s)", () => {
    it("abccccdd --> returns 7", () => {
        let s = "abccccdd";
        let result = longestPalindrome(s);
        expect(result).toStrictEqual(7);
    })
    it("a --> returns 1", () => {
        let s = "a";
        let result = longestPalindrome(s);
        expect(result).toStrictEqual(1);
    })
    it("ccc --> returns 3", () => {
        let s = "ccc";
        let result = longestPalindrome(s);
        expect(result).toStrictEqual(3);
    })
    it("ccd --> returns 3", () => {
        let s = "ccd";
        let result = longestPalindrome(s);
        expect(result).toStrictEqual(3);
    })
    // can reorder string
})