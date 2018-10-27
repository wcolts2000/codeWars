// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.

function countPositivesSumNegatives(input) {
  let answer = [];
  if (input === undefined || !input || input === null) {
    return answer;
  } else if (input.length > 0) {
    let negArr = [];
    let posArr = [];
    input.forEach(int => {
      if(int <= 0) {
        negArr.push(int);
      } else {
        posArr.push(int);
      }
    })
    if (negArr.length === 0) {negArr.push(0)};
    answer.push(posArr.length, negArr.reduce((final, index) => final + index));
  }
  console.log(answer);
  return answer;
}

// function countPositivesSumNegatives(input) {
//   return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
// }

// Example
console.log(countPositivesSumNegatives());
console.log(countPositivesSumNegatives([]));
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])); //[8, -50]
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))//[10, -65].

