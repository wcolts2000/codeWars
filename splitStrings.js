// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters
// then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']
function solution(str) {
  let ans = [];
  if (str.length === 0) return ans;
  if (str.length % 2 === 1) str = str.concat('_');
  for (let i = 0; i < str.length; i += 2) {
    ans.push(`${str[i]}${str[i + 1]}`);
  }
  return ans;
}

// clever solution
// function solution(str) {
//   return (str.length % 2 ? str + '_' : str).match(/../g);
// }
console.log(solution('abcdef'), ['ab', 'cd', 'ef']);
console.log(solution('abcdefg'), ['ab', 'cd', 'ef', 'g_']);
console.log(solution(''), []);
