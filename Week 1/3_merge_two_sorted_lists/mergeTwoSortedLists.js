/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

var ListNode = function (val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var mergeTwoLists = function (list1, list2) {
    if (list1 == null && list2 == null) return list1;
    else if (list1 == null && list2 != null) return list2;
    else if (list1 != null && list2 == null) return list1;

    let mergedList = new ListNode(0);
    let currentInMerge = mergedList;
    let current1 = list1;
    let current2 = list2;

    while (current1 && current2) {
        if (current1.val <= current2.val) {
            currentInMerge.next = new ListNode(current1.val);
            current1 = current1.next;
        }
        else {
            currentInMerge.next = new ListNode(current2.val);
            current2 = current2.next;
        }
        currentInMerge = currentInMerge.next;
    }

    if (current1) currentInMerge.next = current1;
    else if (current2) currentInMerge.next = current2;

    return mergedList.next;
};

module.exports = { mergeTwoLists, ListNode };