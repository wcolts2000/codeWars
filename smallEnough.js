// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// function smallEnough(a, limit){
// return filtered =  a.filter(aIndexValue=>aIndexValue > limit).length === 0 ? true : false ;
// }

const smallEnough = (a, limit) => a.filter(aIndexValue=>aIndexValue > limit).length === 0 ? true : false;

// function smallEnough(a, limit){
//   return Math.max(...a) <= limit
// }

// smallEnough = (a, l) => a.every(e => e <= l)

// function smallEnough(a, l) {
//   return a.every(_ => _ <= l);
// }


console.log(smallEnough([66, 101], 200), true);
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);