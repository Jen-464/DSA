"use strict";
const maxProfit = require("./bestTimeToBuyAndSellStock");

describe("maxProfit(prices)", () => {
    it("[7,1,5,3,6,4] --> to return a profit of 5", () => {
        let prices = [7, 1, 5, 3, 6, 4];
        let result = maxProfit(prices);
        expect(result).toStrictEqual(5);
    })
    it("[7,6,4,3,1] --> has no profit so returns 0", () => {
        let prices = [7, 6, 4, 3, 1];
        let result = maxProfit(prices);
        expect(result).toStrictEqual(0);
    })
})