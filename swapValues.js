// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

// Can you figure out what's wrong here?

// BUGSARRAYSFUNDAMENTALS

// function swapValues() {
//   var args = Array.prototype.slice.call(arguments);
//   var temp = args[0];
//   args[0] = args[1];
//   args[1] = temp;
// }

function swapValues(arr) {
  var temp = arr[0];
  arr[0] = arr[1];
  arr[1] = temp;
}

const swapValues = (arr) => ([arr[1], arr[0]] = [arr[0], arr[1]]);

var arr = [1, 2];
swapValues(arr);
console.log(arr[0], 2, 'Failed swapping numbers');
console.log(arr[1], 1, 'Failed swapping numbers');
