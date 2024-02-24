"use strict";
const isAnagram = require("./validAnagram");

describe("isAnagram(s, t)", () => {
    it("anagram & nagaram --> returns true", () => {
        let s = "anagram";
        let t = "nagaram";
        let result = isAnagram(s, t);
        expect(result).toBe(true);
    })
    it("rat & car --> returns false", () => {
        let s = "rat";
        let t = "car";
        let result = isAnagram(s, t);
        expect(result).toBe(false);
    })
    it("empty string --> returns true", () => {
        let s = "";
        let t = "";
        let result = isAnagram(s, t);
        expect(result).toBe(true);
    })
    it("a & aaa --> returns false", () => {
        let s = "a";
        let t = "aaa";
        let result = isAnagram(s, t);
        expect(result).toBe(false);
    })
})