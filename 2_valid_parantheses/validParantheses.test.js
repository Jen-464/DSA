"use strict";
const isValid = require("./validParantheses");

describe("isValid(s)", () => {
    it("( --> should be false", () => {
        let s = "(";
        let result = isValid(s);
        expect(result).toBe(false);
    })
    it("()[]{} --> should be true", () => {
        let s = "()[]{}";
        let result = isValid(s);
        expect(result).toBe(true);
    })
    it("(] --> should be false", () => {
        let s = "(]";
        let result = isValid(s);
        expect(result).toBe(false);
    })
    it("([]) --> should be true", () => {
        let s = "([])";
        let result = isValid(s);
        expect(result).toBe(true);
    })
    it("([)] --> should be false", () => {
        let s = "([)]";
        let result = isValid(s);
        expect(result).toBe(false);
    })
    it("(( --> should be false", () => {
        let s = "((";
        let result = isValid(s);
        expect(result).toBe(false);
    })
    it("){ --> should be false", () => {
        let s = "){";
        let result = isValid(s);
        expect(result).toBe(false);
    })
})