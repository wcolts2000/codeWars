// Create a function called shortcut to remove all the lowercase vowels in a given string.

// Examples
// shortcut("codewars") // --> cdwrs
// shortcut("goodbye")  // --> gdby
// Don't worry about uppercase vowels.

function shortcut(string) {
  return string.match(/[^aeiou]/g).join('');
}

console.log(shortcut('hello') == 'hll');
console.log(
  shortcut('how are you today?') == 'hw r y tdy?',
  'shortcut did not work properly'
);
console.log(shortcut('complain') == 'cmpln', 'shortcut did not work properly');
console.log(shortcut('never') == 'nvr', 'shortcut did not work properly');
