/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let start = [2, 3];
    let i = 0;
    while(i < n - 3) {
        let negativeOne = start[start.length-1];
        let negativeTwo = start[start.length-2];
        start.push(negativeOne + negativeTwo);
        i++;
    }
    return n <= 3 ? n : start[start.length-1];
};

module.exports = climbStairs;