// Calculate the product of all elements in an array.

// If the array is null or is empty, the function should return null.

/**
 * Returns product of all numbers in a numeric array.
 * Returns null if param is null or array is empty.
 * @param {Array} values - The array containing the items.
 */
function product(values) {
  if( !values || values.length === 0 ){ return null }
  const reducer = (acc, currentValue) => acc * currentValue;
  return values.reduce(reducer);
  }


//   function product(values) {
//     if (values === null || values.length === 0) return null;
//     return values.reduce((acc, cur) => acc * cur, 1);
// }

// function product(values) {
//   return (values == null || values.length == 0) ? null : values.reduce((a,b) => a*b);
// }

// product=v=>v&&v.length?eval(v.join`*`):null


console.log(product([5, 4, 1, 3, 9]), 540);
console.log(product([-2, 6, 7, 8]), -672);
console.log(product([10]), 10);
console.log(product([0, 2, 9, 7]), 0);
console.log(product(null), null);
console.log(product([]), null);