// Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

// Example
// 123  => 6
// 223  => 7
// 1337 => 15

function getSumOfDigits(integer) {
  var sum = null;
  var digits = integer.toString();
  for (var i = 0; i < digits.length; i++) {
    sum = sum + Number(digits[i]);
  }
  return sum;
}

console.log(getSumOfDigits(123), 6);
