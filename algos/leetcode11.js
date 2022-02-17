// 11. Container With Most Water

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Example 2:

// Input: height = [1,1]
// Output: 1

/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function (heights) {
    let left = 0,
    right = heights.length - 1,
    max = 0;
    while (left < right) {
      max = Math.max(max, Math.min(heights[left], heights[right]) * (right - left));
      if (heights[left] < heights[right]) left++;
      // Left is smaller, try a new left line
      else right--; // Right is smaller, try a new right line
    }
    return max;

};

let x
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// x = [1,1]
// x = [1, 2, 3]
// x = [1, 2, 3].sort((a, b) => a - b)
// const y = [1, 2, 3].sort((a, b) => b - a)
// console.log(x, y)
// const y = [2, 4, 6]
// x = [1,8,6,2,5,4,8,3,7]



console.log(maxArea(x))
console.log(x.length)