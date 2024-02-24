/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var twoSum = function (nums, target) {
    let holder = [];

    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        if (!holder.includes(difference)) holder.push(nums[i]);
        else return [nums.indexOf(difference), i]
    }
};

module.exports = twoSum;