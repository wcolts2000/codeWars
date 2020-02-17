const a = [121, 144, 19, 161, 19, 144, 19, 11];
const b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361];
const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
const a2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19
];
const x = [];
const y = null;
const one = [40, 53, 88, 0, 2, 96, 68];
const two = [121, 361, 361, 14641, 20736, 20736, 25921, 36100];
// const one = [ 40, 53, 88, 0, 2, 96, 68 ]
// const two = [ 1600, 2809, 7744, 0, 4, 9216, 4624 ]

let smallest, largest;
function comp(array1, array2) {
  //your code here
  let isSameSquared = true;
  if (!array1 || !array2) return false;
  if (array1.length === 0 && array2.length === 0) return isSameSquared;
  if (array1.length === 0 || array2.length === 0) return false;
  if ((!array1 && array2.length === 0) || (array1.length === 0 && !array2))
    return false;
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  labelSortedArraySize(array1, array2);
  console.log(smallest, largest);
  for (let i = 0; i < array1.length; i++) {
    if (smallest[i] * smallest[i] !== largest[i]) return false;
    console.log(i, smallest[i] * smallest[i] === largest[i]);
    // i++
  }
  return isSameSquared;
}

function labelSortedArraySize(arr1, arr2) {
  if (arr1[0] === arr2[0]) {
    if (arr1[1] < arr2[1]) {
      smallest = arr1;
      largest = arr2;
    } else {
      smallest = arr2;
      largest = arr1;
    }
  }
  if (arr1[0] < arr2[0]) {
    smallest = arr1;
    largest = arr2;
  } else {
    smallest = arr2;
    largest = arr1;
  }
}

// console.log(comp(y,x), false)
console.log(comp(one, two), false);
// console.log(comp(one, two), true);
// console.log(comp(a, b), false);
// console.log(comp(a1, a2), true);
