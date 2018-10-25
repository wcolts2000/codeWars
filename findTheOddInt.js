// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  let arr = A;
  arr.sort((a,b) => a-b);
  arrObj = arr.reduce(function (acc, curr) {
      if (typeof acc[curr] == 'undefined') {
        acc[curr] = 1;
      } else {
        acc[curr] += 1;
      }
    
      return acc;
    }, {});
let answer = [];
    Object.keys(arrObj).forEach(key => {
      let foundKey;
      if(!(arrObj[key]%2===0)){
        foundKey = key
        answer.push(foundKey)
      }
      return foundKey;
    }
    )
    return Number(answer.toString())
}

// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);


console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]), 5);
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]), -1);
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]), 5);
console.log(findOdd([10]), 10);
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]), 10);
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]), 1);