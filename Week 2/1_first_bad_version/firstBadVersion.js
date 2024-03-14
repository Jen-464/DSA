/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n, bad) {
        let left = 1; 
        let mid = Math.floor((n + 1) / 2); 
        let right = n;
        let foundFirstBadVersion = false;

        while(foundFirstBadVersion == false) {
            if(isBadVersion(mid, bad) == false) { // if(isBadVersion(mid) == false) {
                left = left == mid ? mid + 1: mid;
                mid = Math.floor((left + right) / 2);
            }
            else {
                if(isBadVersion(mid-1, bad)) { // if(isBadVersion(mid-1)) {
                    right = mid;
                    mid = Math.floor((left + right) / 2);
                }
                else {
                    return mid;
                }
            }
        }
    };
};

module.exports = solution;