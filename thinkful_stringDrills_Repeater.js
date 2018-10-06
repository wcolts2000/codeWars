// Write a class function named repeat() that takes two arguments (a string and a long integer), and returns a new string where the input string is repeated that many times. For example:

// Repeater.repeat("a", 5)

// should return

// "aaaaa"

function repeater(string, n){
  //Your code goes here.
  return string.repeat(n);
}






console.log(repeater('a', 5), 'aaaaa');
console.log(repeater('Na', 16), 'NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa');
console.log(repeater('Wub ', 6), 'Wub Wub Wub Wub Wub Wub ');