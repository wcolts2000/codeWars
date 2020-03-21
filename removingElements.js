// Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.

// Example:

// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
// None of the arrays will be empty, so you don't have to worry about that!
function removeEveryOther(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      answer.push(arr[i]);
    }
  }
  return answer;
}
console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']), [
  'Hello',
  'Hello Again'
]);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 3, 5, 7, 9]);
console.log(removeEveryOther([[1, 2]]), [[1, 2]]);
console.log(removeEveryOther([['Goodbye'], { Great: 'Job' }]), [['Goodbye']]);
