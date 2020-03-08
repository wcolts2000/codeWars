// I love Fibonacci numbers in general, but I must admit I love some more than others.

// I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

// For example:

//    nthFibo(4) == 2
// Because 2 is the 4th number in the Fibonacci Sequence.

// For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.
function nthFibo(n) {
  // Return the n-th number in the Fibonacci Sequence
  if (n === 1) return 0;
  if (n === 2) return 1;
  let fib0 = 0;
  let fib1 = 1;
  let ans = fib0 + fib1;
  const fib = n => {
    while (n > 3) {
      fib0 = fib1;
      fib1 = ans;
      ans = fib0 + fib1;
      return fib(n - 1);
    }
  };
  fib(n);
  return ans;
}

// function nthFibo(n) {
//   var cache=[0,0,1,1];
//   while(cache.length<=n){
//     cache[cache.length]=cache[cache.length-1]+cache[cache.length-2];
//   }
//   return cache[n];
// }

console.log(nthFibo(4), '== 2');
