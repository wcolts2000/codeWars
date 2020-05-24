// Write a function that returns a (custom) FizzBuzz sequence of the numbers 1 to 100.

// The function should be able to take up to 4 arguments:

// The 1st and 2nd arguments are strings, "Fizz" and "Buzz" by default;
// The 3rd and 4th argyments are integers, 3 and 5 by default.
// Thus, when the function is called without arguments, it will return the classic FizzBuzz sequence up to 100:

// [ 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, ... 14, "FizzBuzz", 16, 17, ... 98, "Fizz", "Buzz" ]
// When the function is called with (up to 4) arguments, it should return a custom FizzBuzz sequence, for example:

// ('Hey', 'There')      -->  [ 1, 2, "Hey", 4, "There", "Hey", ... ]
// ('Foo', 'Bar', 2, 3)  -->  [ 1, "Foo", "Bar", "Foo", 5, "FooBar", 7, ... ]
// Examples
// fizzBuzzCustom()[15]                         // returns 16
// fizzBuzzCustom()[44]                         // returns "FizzBuzz" (45 is divisible by 3 and 5)
// fizzBuzzCustom('Hey', 'There')[25]         // returns 26
// fizzBuzzCustom('Hey', 'There')[11]         // returns "Hey" (12 is divisible by 3)
// fizzBuzzCustom("What's ", "up?", 3, 7)[80] // returns "What's " (81 is divisible by 3)

var fizzBuzzCustom = function (
  stringOne = 'Fizz',
  stringTwo = 'Buzz',
  numOne = 3,
  numTwo = 5
) {
  const customFizzBuzzArray = new Array(100);
  for (let i = 0; i < 100; i++) {
    customFizzBuzzArray[i] = i + 1;
    if ((i + 1) % numOne === 0) {
      customFizzBuzzArray[i] = stringOne;
    }
    if ((i + 1) % numTwo === 0) {
      customFizzBuzzArray[i] = stringTwo;
    }
    if ((i + 1) % numOne === 0 && (i + 1) % numTwo === 0) {
      customFizzBuzzArray[i] = stringOne + stringTwo;
    }
  }
  return customFizzBuzzArray;
};

console.log(fizzBuzzCustom()[15]); // returns 16
console.log(fizzBuzzCustom()[44]); // returns "FizzBuzz" (45 is divisible by 3 and 5)
console.log(fizzBuzzCustom('Hey', 'There')[25]); // returns 26
console.log(fizzBuzzCustom('Hey', 'There')[11]); // returns "Hey" (12 is divisible by 3)
console.log(fizzBuzzCustom("What's ", 'up?', 3, 7)[80]); // returns "What's " (81 is divisible by 3)
