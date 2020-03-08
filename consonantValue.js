// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants
// are any letters of the alpahabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
function solve(s) {
  let consonantSubstrings = [];
  let vowels = 'aeiou';
  let str = '';
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      consonantSubstrings.push(str);
      str = '';
    } else {
      str += s[i];
    }
  }
  if (str.length > 0) consonantSubstrings.push(str);
  consonantSubstrings.forEach(substr => {
    let substringValue = substr
      .toLowerCase()
      .split('')
      .reduce((a, e) => (a += e.charCodeAt() - 96), 0);
    if (answer < substringValue) answer = substringValue;
  });
  return answer;
}

// const solve = s => s.split(/[aeiou]+/).reduce((s,n)=> Math.max(s, n.split('').reduce((a,b)=> a + b.charCodeAt(0)-96,0 )), 0);

console.log(solve('zodiac'), 26);
console.log(solve('chruschtschov'), 80);
console.log(solve('khrushchev'), 38);
console.log(solve('strength'), 57);
console.log(solve('catchphrase'), 73);
console.log(solve('twelfthstreet'), 103);
console.log(solve('mischtschenkoana'), 80);
