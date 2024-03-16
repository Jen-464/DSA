/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const elementCounter = new Map();
    nums.forEach(element => {
        if(!elementCounter.has(element)) {
            elementCounter.set(element, 1);
        }
        else {
            let incrementValue = elementCounter.get(element) + 1;
            elementCounter.set(element, incrementValue);
        }
    })

    let majElem = 0;
    elementCounter.forEach((value, key) => {
        if(value > nums.length / 2) majElem = key;
    })
    return majElem;
};

module.exports = majorityElement;