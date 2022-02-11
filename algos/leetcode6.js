/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (s.length === 1 || numRows === 1) return s; //covers edge cases

  let rows = 0; // keeps track of row in our zig zag pattern
  let chars = s.split(""); // splits string into array
  let exit = true; // flag to break out of the while loop on ln 20
  let bank = {}; // our bank of which rows contain which strings
  let idx = 0; // keeps track of the index of the string
  let zigzag = ""; // our final string that we will return

  for (let i = 0; i <= numRows - 1; i++) {
    // creates keys in object in order to concatenate later
    bank[i] = "";
  }

  while (exit) {
    if (rows === 0 && idx < s.length) {
      // populates the bank with the proper chars in the zig pattern

      while (rows <= numRows - 1 && idx < s.length) {
        bank[rows] += chars[idx];

        rows++;
        idx++;
      }
    }

    if (rows === numRows && idx < s.length) {
      // populates the bank with the proper chars in the zag pattern
      rows -= 2;

      while (rows > 0 && idx < s.length) {
        bank[rows] += chars[idx];
        rows--;
        idx++;
      }
    }
    if (idx >= s.length) exit = false;
  }

  for (let j = 0; j <= numRows - 1; j++) {
    // where we build the final string to return
    zigzag += bank[j];
  }
  return zigzag;
};

const str = "PAYPALISHIRING"; //length = 15 // Output: "PAHNAPLSIIGYIR"
const nr = 4;

// convert(str, nr)
console.log(convert(str, nr));