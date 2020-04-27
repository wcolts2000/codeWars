// Complete the solution so that it reverses the string value passed into it.

// solution('world'); // returns 'dlrow'

function solution(str) {
  let ans = '';
  for (let i = str.length - 1; i >= 0; i--) {
    ans = ans + str[i];
  }
  return ans;
}

console.log(solution('world') == 'dlrow');
