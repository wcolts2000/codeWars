// Task

// Given a string str, reverse it omitting all non-alphabetic characters.
// Example

// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".
// Input/Output

//     [input] string str

//     A string consists of lowercase latin letters, digits and symbols.

//     [output] a string


function reverseLetter(str) {
let alphaOnly = str.replace(/[^a-z]/g, "");
  return alphaOnly.split("").reverse().join('');  
}


// function reverseLetter(str) {
//   return [...str].reduce((s, c) => /[A-Z]/i.test(c) ? c + s : s, "")
// }


// function reverseLetter(str) {
//   return str.split('')
//             .reverse()
//             .filter(val => /[a-zA-Z]/.test(val))
//             .join('');  
// }

// reverseLetter=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');


console.log(reverseLetter("krishan"),"nahsirk")
console.log(reverseLetter("ultr53o?n"),"nortlu")
console.log(reverseLetter("ab23c"),"cba")
console.log(reverseLetter("krish21an"),"nahsirk")