// Signed and Unsigned Integers
// The XDR standard defines signed integers as integer. A signed integer is a 32-bit datum that encodes an integer in the range [-2147483648 to 2147483647]. An unsigned integer is a 32-bit datum that encodes a nonnegative integer in the range [0 to 4294967295].

// The signed integer is represented in twos complement notation. The most significant byte is 0 and the least significant is 3.

// The unsigned integer is represented by an unsigned binary number whose most significant byte is 0; the least significant is 3. See the Signed Integer and Unsigned Integer figure (Figure 1).

// Source: https://www.ibm.com/docs/en/aix/7.2?topic=types-signed-unsigned-integers






// 7. Reverse Integer

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).



// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    if (x > 2147483647 || x < -2147483647) return 0; // these check for unsigned integers

    let numStr = x + "";
    let numChars
    let result;

    if (numStr[0] === "-") { // checks to see if number is negative
        while (numStr[numStr.length - 1] === "0") {
            numStr = numStr.slice(0, -1);
        }

        numChars = numStr.split("").reverse()
        numChars.splice(-1)
        result = "-" + numChars.join("");
    }

    if (numStr[numStr.length - 1] === "0") { // checks if final char is 0
        numChars = numStr.split("");
        numChars.splice(-1)
        result = numChars.reverse().join("");
    }

    if (x >= 0) {
        while (numStr[numStr.length - 1] === "0") {
            numStr = numStr.slice(0, -1);
        }
        result = numStr.split("").reverse().join("")
    }

    result = Number(result);

    if (result > 2147483647 || result < -2147483647) return 0; // these check for unsigned integers

    return result;
};

// const x = 2147483648
// const x = 321
// const x = -123
// const x = 3210
// const x = -321
// const x = 100
const x = 1534236469

// const x = -3210

// console.log(x > 2147483648)
console.log(reverse(x))