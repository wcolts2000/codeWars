// A Narcissistic Number is a number of length n in which the sum of its digits to the power of n is equal to the original number. If this seems confusing, refer to the example below.

// Ex: 153, where n = 3 (number of digits in 153)
// 13 + 53 + 33 = 153

// Write a method is_narcissistic(i) (in Haskell: isNarcissistic :: Integer -> Bool) which returns whether or not i is a Narcissistic Number

function isNarcissistic(n){
  let str = n.toString()
  let powerRaised = n.toString().length;
  let arr = Array.from(str)
  let raisedArr = []
  arr.forEach((i) => {
    i = Math.pow(i, powerRaised)
    return raisedArr.push(i);
  })
  let total = raisedArr.reduce(
    ( accumulator, currentValue ) => accumulator + currentValue,
    0
  );
  return total === n ? true : false;
}


// function isNarcissistic(n){
//   return n === +n.toString().split('').reduce((s, v, i, arr) => s + Math.pow(v, arr.length),0)
// }


// no strings!

// function isNarcissistic(n) {
//   const exp = Math.floor(Math.log10(n) + 1);
//   let sum = 0;
  
//   for (let i = 0; i < exp; i++) {
//     let digit = Math.floor(n / Math.pow(10, i)) % 10;
//     sum += Math.pow(digit, exp);
//   }
  
//   return sum === n;
// }
  

console.log(isNarcissistic(153), true);
console.log(isNarcissistic(1), true);
console.log(isNarcissistic(435), false);
console.log(isNarcissistic(370), true);
console.log(isNarcissistic(324), false);
console.log(isNarcissistic(371), true);
console.log(isNarcissistic(4328), false);
console.log(isNarcissistic(407), true);
console.log(isNarcissistic(3248), false);
console.log(isNarcissistic(1634), true);
console.log(isNarcissistic(8208), true);
console.log(isNarcissistic(9474), true);
console.log(isNarcissistic(54748), true);
console.log(isNarcissistic(92727), true);
console.log(isNarcissistic(93084), true);
console.log(isNarcissistic(548834), true);
console.log(isNarcissistic(1741725), true);
console.log(isNarcissistic(4210818), true);
console.log(isNarcissistic(9800817), true);
console.log(isNarcissistic(234229983), false);
console.log(isNarcissistic(9926315), true);
console.log(isNarcissistic(24678050), true);
console.log(isNarcissistic(88593477), true);
console.log(isNarcissistic(11513221922401), false);
console.log(isNarcissistic(146511208), true);
console.log(isNarcissistic(472335975), true);
console.log(isNarcissistic(26548238692458), false);
console.log(isNarcissistic(534494836), true);
console.log(isNarcissistic(912985153), true);
console.log(isNarcissistic(4679307774), true);