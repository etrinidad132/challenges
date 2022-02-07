/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var trueNum = function (array) {
  const revNumsArr = array.reverse();
  const revNums = Number(revNumsArr.join(""));
  return revNums;
};

var listMaker = function (array) {
  if (array.length === 1) return new ListNode(Number(array[0]));
  return new ListNode(Number(array.shift()), listMaker(array));
};

var addTwoNumbers = function (l1, l2) {
  let toggleOne = true;
  let toggleTwo = true;
  let currentL1 = l1;
  let currentL2 = l2;
  let nums1arr = [];
  let nums2arr = [];
  let sum;
  let sumRevArr;

  while (toggleOne) {
    nums1arr.push(currentL1.val);

    if (currentL1.next !== null) {
      currentL1 = currentL1.next;
    } else {
      toggleOne = false;
    }
  }

  while (toggleTwo) {
    nums2arr.push(currentL2.val);

    if (currentL2.next !== null) {
      currentL2 = currentL2.next;
    } else {
      toggleTwo = false;
    }
  }

  sum = trueNum(nums1arr) + trueNum(nums2arr);
  sumRevArr = ("" + sum).split("").reverse();
  return listMaker(sumRevArr);
};
