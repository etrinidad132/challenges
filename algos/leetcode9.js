// LeetCode 9

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;

  let stringNum = x + "";
  let revStringNum = stringNum.split("").reverse().join("");

  if (stringNum === revStringNum) {
    return true;
  }

  return false;
};
