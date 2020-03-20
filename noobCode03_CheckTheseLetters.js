// Write a function that checks if all the letters in the second string are present in the first one at least once, regardless of how many times they appear:

// ["ab", "aaa"]    =>  true
// ["trances", "nectar"]    =>  true
// ["compadres", "DRAPES"]  =>  true
// ["parses", "parsecs"]    =>  false
// Function should not be case sensitive, as indicated in example #2. Note: both strings are presented as a single argument in the form of an array.
function letterCheck(arr) {
  let unique = [...new Set(arr[1])];
  for (let i = 0; i < unique.length; i++) {
    if (!arr[0].toLowerCase().includes(unique[i].toLowerCase())) {
      return false;
    }
  }
  return true;
}

console.log(letterCheck(['trances', 'nectar']), true);
console.log(letterCheck(['THE EYES', 'they see']), true);
console.log(letterCheck(['assert', 'staring']), false);
console.log(letterCheck(['arches', 'later']), false);
console.log(letterCheck(['dale', 'caller']), false);
console.log(letterCheck(['parses', 'parsecs']), false);
console.log(letterCheck(['replays', 'adam']), false);
console.log(letterCheck(['mastering', 'streaming']), true);
console.log(letterCheck(['drapes', 'compadres']), false);
console.log(letterCheck(['deltas', 'slated']), true);
