// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""
function cleanString(s) {
  let answer = [];
  let backspace = '#';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === backspace) {
      answer.pop();
    } else {
      answer.push(s[i]);
    }
  }
  return answer.join('');
}

console.log(cleanString('abc#d##c'), 'ac');
console.log(cleanString('abc####d##c#'), '');
