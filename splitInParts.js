// The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

// Example:

// Split the below string into other strings of size #3

// 'supercalifragilisticexpialidocious'

// Will return a new string
// 'sup erc ali fra gil ist ice xpi ali doc iou s'
// Assumptions:

// String length is always greater than 0
// String has no spaces
// Size is always positive

var splitInParts = function (s, partLength) {
  let ans = '';
  for (let i = 0; i < s.length; i++) {
    if (i % partLength === 0 && i !== 0) {
      ans = ans + ` ${s[i]}`;
    } else {
      ans = ans + s[i];
    }
  }
  return ans;
};

console.log(
  splitInParts('supercalifragilisticexpialidocious', 3),
  'sup erc ali fra gil ist ice xpi ali doc iou s'
);
console.log(splitInParts('HelloKata', 1), 'H e l l o K a t a');
console.log(splitInParts('HelloKata', 9), 'HelloKata');
