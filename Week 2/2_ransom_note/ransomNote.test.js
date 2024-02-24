"use strict";
const canConstruct = require("./ransomNote");

describe("canConstruct(ransomNote, magazine)", () => {
    it("a & b --> returns false", () => {
        let ransomNote = "a";
        let magazine = "b";
        let result = canConstruct(ransomNote, magazine);
        expect(result).toBe(false);
    })
    it("aa & ab --> returns false", () => {
        let ransomNote = "aa";
        let magazine = "ab";
        let result = canConstruct(ransomNote, magazine);
        expect(result).toBe(false);
    })
    it("aa & aab --> returns true", () => {
        let ransomNote = "aa";
        let magazine = "aab";
        let result = canConstruct(ransomNote, magazine);
        expect(result).toBe(true);
    })
    it("aab & baa --> returns true", () => {
        let ransomNote = "aab";
        let magazine = "baa";
        let result = canConstruct(ransomNote, magazine);
        expect(result).toBe(true);
    })
})