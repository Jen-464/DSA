/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maximumProfit = 0;
    let min = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) min = prices[i];
        else {
            let newProfit = prices[i] - min;
            maximumProfit = newProfit > maximumProfit ? newProfit : maximumProfit;
        }
    }

    return maximumProfit;
};

module.exports = maxProfit;