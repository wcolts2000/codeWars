// No time for stories. Reverse an array, return the result. Do whatever you want with the original array. Don't use Array.prototype.reverse.

// You have 30 bytes to spare.

// Example: [1, 2, 3] → [3, 2, 1]

// And this time you won't be able to do the thing from that kata.

// require isn't allowed as well.

// const reverse = (a) => {
    // if (a.length % 2 === 0) {
    //     for (let i = 0; i < (a.length / 2); i++) {
    //       let b = a[a.length - i - 1];
    //       a[a.length - i - 1] = a[i];
    //       a[i] = b;
    //     }
    // } else {
    //     for (let i = 0; i < Math.ceil(a.length / 2) - 1; i++) {
    //       let b = a[a.length - i - 1];
    //       a[a.length - i - 1] = a[i];
    //       a[i] = b;
    //     }
    // }
    // return a;
    // for (let i = 0; i < a.length / 2; i++) {
    //     [a[i], a[a.length-i-1]] = [a[a.length-i-1], a[i]]
    // }
//     return a.map(a.pop,[...a]);
// };

reverse=a=>a.map(a.pop, [...a])

// console.log(reverse([1, 2, 3,4, undefined]), [undefined, 4,3, 2, 1]);
