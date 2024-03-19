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
    it("repeated & pearedett --> returns false", () => {
        let s = "repeated";
        let t = "pearedett";
        let result = isAnagram(s, t);
        expect(result).toBe(false);
    })
})