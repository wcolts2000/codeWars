// Bob is a lazy man.

// He needs you to create a method that can determine how many letters and digits are in a given string.

// Example:

// "hel2!lo" --> 6

// "wicked .. !" --> 6

// "!?..A" --> 1
function countLettersAndDigits(input) {
  let answer = 0;
  for (let char of input) {
    if (char.match(/[a-z]/i) || char.match(/\d/)) answer++;
  }
  return answer;
}

// function countLettersAndDigits(input) {
//   let o = input.match(/[a-z\d]/gi)
//   return (o !== null ? o.length : 0)
// }

// function countLettersAndDigits(s) {
//   return s.replace(/[^a-z\d]/gi,"").length;
// }

console.log(countLettersAndDigits('hel2!lo'), 6);
console.log(countLettersAndDigits('n!!_ice!!123'), 7);
console.log(countLettersAndDigits('1'), 1);
console.log(countLettersAndDigits('?'), 0);
console.log(countLettersAndDigits('12345f%%%t5t&/6'), 10);
console.log(countLettersAndDigits('aBcDeFg090'), 10);
console.log(countLettersAndDigits('u_n_d_e_r__S_C_O_R_E'), 10);
