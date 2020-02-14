function oddOrEven(array) {
  //enter code here
  let oddNums = 0;
  if (array.length === 0) return 'even';
  array.forEach(el => {
    if (Math.abs(el % 2) === 1) oddNums++;
  });
  return oddNums % 2 === 0 ? 'even' : 'odd';
}

console.log(oddOrEven([-1023, 1, -2]), 'even');
// console.log(oddOrEven([0]), 'even');
// console.log(oddOrEven([1]), 'odd');
// console.log(oddOrEven([]), 'even');
// console.log(oddOrEven([0, 1, 5]), 'even');
// console.log(oddOrEven([0, 1, 3]), 'even');
// console.log(oddOrEven([1023, 1, 2]), 'even');
// console.log(oddOrEven([0, -1, -5]), 'even');
// console.log(oddOrEven([0, -1, -3]), 'even');
// console.log(oddOrEven([-1023, 1, -2]), 'even');
// console.log(oddOrEven([0, 1, 2]), 'odd');
// console.log(oddOrEven([0, 1, 4]), 'odd');
// console.log(oddOrEven([1023, 1, 3]), 'odd');
// console.log(oddOrEven([0, -1, 2]), 'odd');
// console.log(oddOrEven([0, 1, -4]), 'odd');
// console.log(oddOrEven([-1023, -1, 3]), 'odd');
// console.log(
//   oddOrEven([
//     934848,
//     -640380,
//     689964,
//     952054,
//     383668,
//     -800642,
//     -963152,
//     -741162,
//     996928,
//     -489030
//   ]),
//   'even'
// );
