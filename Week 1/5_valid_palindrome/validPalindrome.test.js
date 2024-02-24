"use strict";
const isPalindrome = require("./validPalindrome");

describe("isPalindrome(s)", () => {
    it("A man, a plan, a canal: Panama -> returns true", () => {
        let s = "A man, a plan, a canal: Panama";
        let result = isPalindrome(s);
        expect(result).toBe(true);
    })
    it("race a car -> returns true", () => {
        let s = "race a car";
        let result = isPalindrome(s);
        expect(result).toBe(false);
    })
    it(" ' ' -> returns true", () => {
        let s = " ";
        let result = isPalindrome(s);
        expect(result).toBe(true);
    })
})