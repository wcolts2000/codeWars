// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even-odd disparity
function capitalize(s) {
  let answer = ['', ''];
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 1) {
      answer[0] += s[i].toLowerCase();
      answer[1] += s[i].toUpperCase();
    } else {
      answer[1] += s[i].toLowerCase();
      answer[0] += s[i].toUpperCase();
    }
  }
  return answer;
}

// function capitalize(s){
//   return [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''));
// };

console.log(capitalize('abcdef'), ['AbCdEf', 'aBcDeF']);
console.log(capitalize('codewars'), ['CoDeWaRs', 'cOdEwArS']);
console.log(capitalize('abracadabra'), ['AbRaCaDaBrA', 'aBrAcAdAbRa']);
console.log(capitalize('codewarriors'), ['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
