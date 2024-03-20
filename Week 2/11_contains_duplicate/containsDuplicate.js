/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set(nums);
    return nums.length !== set.size;
};

module.exports = containsDuplicate;