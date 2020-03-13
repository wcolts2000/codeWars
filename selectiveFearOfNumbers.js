// I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: The number I'm afraid of depends on which day of the week it is...
// This is a concrete description of my mental illness:

// Monday --> 12

// Tuesday --> numbers greater than 95

// Wednesday --> 34

// Thursday --> 0

// Friday --> numbers divisible by 2

// Saturday --> 56

// Sunday --> 666 or -666

// Write a function which takes a string (day of the week) and an integer (number to be tested) so it tells the doctor if I'm afraid or not. (return a boolean)
var AmIAfraid = function(day, num) {
  let fearHash = {
    Monday: function(num) {
      return num === 12;
    },
    Tuesday: function(num) {
      return num > 95;
    },
    Wednesday: function(num) {
      return num === 34;
    },
    Thursday: function(num) {
      return num === 0;
    },
    Friday: function(num) {
      return num % 2 === 0;
    },
    Saturday: function(num) {
      return num === 56;
    },
    Sunday: function(num) {
      return 666 === Math.abs(num);
    }
  };
  return fearHash[day](num);
};

console.log(AmIAfraid('Monday', 13), false, 'Should return false');
console.log(AmIAfraid('Sunday', -666), true, 'Should return true');
console.log(AmIAfraid('Tuesday', 2), false, 'Should return false');
console.log(AmIAfraid('Tuesday', 965), true, 'Should return true');
console.log(AmIAfraid('Friday', 2), true, 'Should return true');
