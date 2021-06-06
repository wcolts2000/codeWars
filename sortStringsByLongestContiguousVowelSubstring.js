// The goal of this Kata is to write a function that will receive an array of strings as its single argument,
// then the strings are each processed and sorted (in desending order) based on the length of the single longest
// sub-string of contiguous vowels ( aeiouAEIOU ) that may be contained within the string. The strings may contain
// letters, numbers, special characters, uppercase, lowercase, whitespace, and there may be (often will be) multiple
// sub-strings of contiguous vowels. We are only interested in the single longest sub-string of vowels within each
// string, in the input array.

// Example:

// str1 = "what a beautiful day today"
// str2 = "it's okay, but very breezy"
// When the strings are sorted, str1 will be first as its longest sub-string of contiguous vowels "eau" is of length 3,
// while str2 has as its longest sub-string of contiguous vowels "ee", which is of length 2.

// If two or more strings in the array have maximum sub-strings of the same length, then the strings should remain in
// the order in which they were found in the original array.

function sortStringsByVowels(strings){  
  const results = [];
  const counts = {};
  for (let i = 0; i < strings.length; i++ ) {
    counts[i] = getHighestContiguousVowelSubstrCount(strings[i]);  
  }
  Object.keys(counts).map(key => [+key, counts[key]]).sort((a,b) => {
    return a[1] > b[1] 
      ? -1
      : a[1] < b[1]
      ? 1
      : 0
  }).forEach(tuple => {
    results.push(strings[tuple[0]])
  })
  return results;
}

function getHighestContiguousVowelSubstrCount(str) {
  const vowels = ['a','e','i','o','u'];
  let count = 0;
  let current = 0;
  for (let i = 0; i < str.length; i++) {
    if(vowels.includes(str[i].toLowerCase())) current++
    else current = 0;
    if(count < current) count = current;
  }
  return count;
}

console.log(sortStringsByVowels(["aa","eee","oo","iiii"]),["iiii","eee","aa","oo"]);
console.log(sortStringsByVowels(["a","e","ii","ooo","u"]),["ooo","ii","a","e","u"]);
console.log(sortStringsByVowels( ["ioue","ee","uoiea"]) , ["uoiea", "ioue","ee"]);
console.log(sortStringsByVowels( ["high","day","boot"]) , ["boot","high","day"]);
console.log(sortStringsByVowels(["none","uuu","Yuuuge!!"]) , ["uuu","Yuuuge!!","none"]);
console.log(sortStringsByVowels(["AIBRH","","YOUNG","GREEEN"]) , ["GREEEN","AIBRH","YOUNG",""]);
console.log(sortStringsByVowels(["jyn","joan","jimmy","joey"]) , ["joan","joey","jimmy","jyn"]);
console.log(sortStringsByVowels(["uijijeoj","lkjlkjww2","iiutrqy"]) , ["iiutrqy","uijijeoj","lkjlkjww2"]);
console.log(sortStringsByVowels(["how about now","a beautiful trio of"]) , ["a beautiful trio of","how about now"]);
console.log(sortStringsByVowels(["every","bataux","is","waaaay","loose"]) , ["waaaay","bataux","loose","every","is"]);