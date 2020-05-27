// numberToPower(3,2)  // -> 9 ( = 3 * 3 )
// numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
// // numberToPower(10,6) // -> 1000000
function numberToPower(number, power) {
  // return number ** power;
  if (power === 0) return 1;
  console.log(10);
  let ans = number;
  for (let i = 1; i < power; i++) {
    ans *= number;
  }
  return ans;
  0;
}

console.log(numberToPower(4, 2), 16);
console.log(numberToPower(10, 4), 10000);
console.log(numberToPower(10, 0), 1);
