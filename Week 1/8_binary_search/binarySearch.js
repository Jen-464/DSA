/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let middle = Math.floor((right + left) / 2);

        if (target == nums[middle]) return middle;
        if (target > nums[middle]) left = middle + 1;
        else right = middle;
    }
    return nums[left] == target ? left : -1;
};

module.exports = search;