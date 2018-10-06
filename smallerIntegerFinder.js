// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.




// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     console.log(args);
    
//   }
// }
function findSmallestInt(args) {
args.sort((a, b) => a-b);
return args[0]
}


// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return Math.min(...args)
//   }
// }

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return args.sort((a,b)=>a-b)[0];
//   }
// }


// console.log("Smallest Integer Tests", _ => {
//   console.log("Fixed Tests", __ => {
//     var sif = new SmallestIntegerFinder();
    console.log(findSmallestInt([78,56,232,12,8]));
    // console.log(findSmallestInt([78,56,232,12,18]),12,'Should return the smallest int 12');
    // console.log(findSmallestInt([78,56,232,412,228]),56,'Should return the smallest int 56');
    // console.log(findSmallestInt([78,56,232,12,0]),0,'Should return the smallest int 0');
    // console.log(findSmallestInt([1,56,232,12,8]),1,'Should return the smallest int 1');
//   });
// }); 