//leetcode423
// Given a string s containing an out-of-order English representation of digits 0-9, return the digits in ascending order.

// Example 1:

// Input: s = "owoztneoer"
// Output: "012"
// Example 2:

// Input: s = "fviefuro"
// Output: "45"

// /**
//  * @param {string} s
//  * @return {string}
//  */
// const containsAllTheChars = (string, substringArray) => substringArray.every((subString) => {
//     return string.indexOf(subString) >= 0;
// });

// const sortString = (string) => {
//     let chars = string.split("");

//     chars.sort((a, b) => a.localeCompare(b))

//     return chars.join("")
// }

// var originalDigits = function (s) {

//     let trueNum = "";
//     const chars = s.split("")
//     const numNames = ["zero",
//         "one",
//         "two",
//         "three",
//         "four",
//         "five",
//         "six",
//         "seven",
//         "eight",
//         "nine",
//     ]
//     // const numNamesSequenced = arraySequencer(numNames);
//     let isUndefined = false;

//     while (!isUndefined) {
//         if (chars.every((char) => char === undefined)) {
//             // console.log("SUCCESS go treat yourself")
//             isUndefined = true;
//         }

//         for (let i = 0; i < numNames.length; i++) {
//             const numName = numNames[i];
//             const nameChars = numName.split("");

//             // if (containsAllTheChars(s, nameChars)) {
//             if (containsAllTheChars(chars.join(""), nameChars)) {
//                 // let numNameSequence = numNamesSequenced[i]; not sure if needed yet
//                 let idxOfprevious;
//                 let idxOfLatest;
//                 // console.log(i)
//                 trueNum += i;
//                 //iterate though chars, and removing from s chars that are in nameChar

//                 for (let j = 0; j < nameChars.length; j++) {
//                     const nameChar = nameChars[j];

//                     if (idxOfprevious !== undefined) {
//                         idxOfLatest = chars.indexOf(nameChar);

//                         delete chars[idxOfLatest]

//                         idxOfprevious = idxOfLatest;

//                     } else {

//                         idxOfLatest = chars.indexOf(nameChar, idxOfprevious + 1)

//                         delete chars[idxOfLatest]

//                         idxOfprevious = idxOfLatest;

//                     }

//                     // chars.indexOf
//                 }

//                 // console.log(`${i}` + "--------" + "true")
//             }
//             // else {
//             //     // console.log(`${i}` + "--------------" + "false")
//             // }

//         }
//         // isUndefined = true // debugging
//     }

//     // console.log("working?!")
//     return sortString(trueNum) // debugging
// };

// }

const alpha = "abcdefghijklmnopqrstuvwxyz";

const numNames = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const emptySequence = () => {
  const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  let sequence = {};

  for (let i = 0; i < alpha.length; i++) {
    const char = alpha[i];
    sequence[char] = 0;
  }

  return sequence;
};

const sequencer = (string) => {
  const sequence = emptySequence();

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    sequence[char]++;
  }

  return sequence;
};

const arraySequencer = (array) => {
  const sequence = {};
  array.forEach((string) => {
    return (sequence[string] = sequencer(string));
  });
  return sequence;
};

const shallowEquality = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  for (const key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

/**
 * @param {string} s
 * @return {string}
 */
const containsAllTheChars = (string, substringArray) =>
  substringArray.every((subString) => {
    return string.indexOf(subString) >= 0;
  });

const sortString = (string) => {
  let chars = string.split("");

  chars.sort((a, b) => a.localeCompare(b));

  return chars.join("");
};

var originalDigits = function (s) {
  let trueNum = "";
  const chars = s.split("");
  const numNames = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  // const numNamesSequenced = arraySequencer(numNames);
  let isUndefined = false;

  while (!isUndefined) {
    if (chars.every((char) => char === undefined)) {
      // console.log("SUCCESS go treat yourself")
      isUndefined = true;
    }

    for (let i = 0; i < numNames.length; i++) {
      const numName = numNames[i];
      const nameChars = numName.split("");

      // if (containsAllTheChars(s, nameChars)) {
      if (containsAllTheChars(chars.join(""), nameChars)) {
        // let numNameSequence = numNamesSequenced[i]; not sure if needed yet
        let idxOfprevious;
        let idxOfLatest;
        // console.log(i)
        trueNum += i;
        //iterate though chars, and removing from s chars that are in nameChar

        for (let j = 0; j < nameChars.length; j++) {
          const nameChar = nameChars[j];

          if (idxOfprevious !== undefined) {
            idxOfLatest = chars.indexOf(nameChar);

            delete chars[idxOfLatest];

            idxOfprevious = idxOfLatest;
          } else {
            idxOfLatest = chars.indexOf(nameChar, idxOfprevious + 1);

            delete chars[idxOfLatest];

            idxOfprevious = idxOfLatest;
          }

          // chars.indexOf
        }

        // console.log(`${i}` + "--------" + "true")
      }
      // else {
      //     // console.log(`${i}` + "--------------" + "false")
      // }
    }
    // isUndefined = true // debugging
  }

  // console.log("working?!")
  return sortString(trueNum); // debugging
};

// Example 1:

// Input: s = "owoztneoer"
// const s = "owoztneoer"
const z = "zero".split("");
// Output: "012"
// Example 2:

// Input: s = "fviefuro"
s = "fviefuro";
// Output: "45"

// console.log(sortString("alpha"))
// console.log(sortString("zero"))
console.log(sequencer("alpha"))
console.log(sequencer("aahlp"))

// console.log(shallowEquality(sequencer("alpha"), sequencer("aahlp")))
// console.log(arraySequencer(numNames))

console.log(containsAllTheChars(s, z))
console.log(originalDigits(s));
