"use strict";
const solution = require("./firstBadVersion");

var isBadVersion = function(val, bad) {
    return val >= bad;
}

describe("solution(n, bad)", () => {
    it("n = 5 & bad = 4 --> returns 4", () => {
        let n = 5;
        let bad = 4;
        let result = solution(isBadVersion)(n, bad);
        expect(result).toBe(4);
    });
    it("n = 1 & bad = 1 --> returns 1", () => {
        let n = 1;
        let bad = 1;
        let result = solution(isBadVersion)(n, bad);
        expect(result).toBe(1);
    });
    it("n = 8 & bad = 8 --> returns 1", () => {
        let n = 8;
        let bad = 8;
        let result = solution(isBadVersion)(n, bad);
        expect(result).toBe(8);
    });
    it("n = 50 & bad = 2 --> returns 2", () => {
        let n = 50;
        let bad = 2;
        let result = solution(isBadVersion)(n, bad);
        expect(result).toBe(2);
    });
    // Reducing of API calls to isBadVersion
});
