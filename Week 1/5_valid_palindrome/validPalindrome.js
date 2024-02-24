/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {
    let arrayS = s.split("").map(char => {
        if (/[a-z0-9]/.test(char)) return char;
        else if (/[A-Z]/.test(char)) return char.toLowerCase();
        else return null;
    }).filter(char => char != null);

    let start = 0;
    let end = arrayS.length - 1;
    while (start < end) {
        if (arrayS[start] !== arrayS[end]) return false;
        start++;
        end--;
    }
    return true;
};

module.exports = isPalindrome;