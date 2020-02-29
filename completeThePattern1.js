// Task:
// You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

// Note:Returning the pattern is not the same as Printing the pattern.
// Rules/Note:
// If n < 1 then it should return "" i.e. empty string.
// There are no whitespaces in the pattern.
// Pattern:
// 1
// 22
// 333
// ....
// .....
// nnnnnn
// Examples:
// pattern(5):

// 1
// 22
// 333
// 4444
// 55555
// pattern(11):

// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// 10101010101010101010
// 1111111111111111111111
// Hint: Use \n in string to jump to next line

function pattern(n) {
  var output = '';
  if (n < 1) return output;
  for (let i = 0; i < n; i++) {
    let holder = [];
    holder.length = i + 1;
    output += holder
      .fill(i + 1)
      .join('')
      .concat('\n')
      .replace(/\,, ""/);
  }

  return output.substring(0, output.length - 1);
}

// student003, ChingChangChong, user6344622, PavelPavells, brudolce, dauletukk (plus 9 more warriors)
// function pattern(n) {
//   var res = [], i;
//   for(i = 1; i <= n; i++) {
//     res.push(Array(i + 1).join(i));
//   }
//   return res.join('\n');
// }

// console.log(pattern(1),"1");
// console.log(pattern(2),"1\n22");
console.log(pattern(5), '1\n22\n333\n4444\n55555');
