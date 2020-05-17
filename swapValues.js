// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

// Can you figure out what's wrong here?

// BUGSARRAYSFUNDAMENTALS

// function swapValues() {
//   var args = Array.prototype.slice.call(arguments);
//   var temp = args[0];
//   args[0] = args[1];
//   args[1] = temp;
// }

function swapValues() {
  var args = [...arguments].flat();
  var temp = args[0];
  console.log(temp);
  args[0] = args[1];
  args[1] = temp;
}
var arr = [1, 2];
swapValues(arr);
console.log(arr[0], 2, 'Failed swapping numbers');
console.log(arr[1], 1, 'Failed swapping numbers');
