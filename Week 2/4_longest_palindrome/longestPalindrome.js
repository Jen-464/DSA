/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let sortedS = s.split("").sort();
    let foundSingleChar = false;
    let pointer1 = 0;
    let pointer2 = 1;
    let counter = 0;
    while(pointer1 < sortedS.length) {
        if(sortedS[pointer1] == sortedS[pointer2]) {
            counter += 2;
            pointer1++;
            pointer2++;
        }
        else {
            if(!foundSingleChar) {
                counter++;
                foundSingleChar = true;
            }
        }
        pointer1++;
        pointer2++;
    }
    return counter;
};

module.exports = longestPalindrome;