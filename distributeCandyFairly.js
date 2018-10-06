// There are some candies that need to be distributed to some children as fairly as possible (i.e. the variance of result needs to be as small as possible), but I don't know how to distribute them, so I need your help. Your assignment is to write a function with signature distribute(m, n) in which m represents how many candies there are, while n represents how many children there are. The function should return a List (or Array etc. depending on the specific language) which contains the number of candies each child gains.
// Notice

//     The candy can't be divided into pieces.
//     The list's order doesn't matter.

// Requirements

//     The case m < 0 is equivalent to m == 0.
//     If n <= 0 the function should return an empty list.
//     If there isn't enough candy to distribute, you should fill the corresponding number with 0.

// Examples

// distribute(-5,  0) # should be [] 
// distribute( 0,  0) # should be [] 
// distribute( 5,  0) # should be [] 
// distribute(10,  0) # should be [] 
// distribute(15,  0) # should be [] 
// distribute(-5, -5) # should be [] 
// distribute( 0, -5) # should be [] 
// distribute( 5, -5) # should be [] 
// distribute(10, -5) # should be [] 
// distribute(15, -5) # should be []
// distribute(-5, 10) # should be [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// distribute( 0, 10) # should be [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// distribute( 5, 10) # should be [1, 1, 1, 1, 1, 0, 0, 0, 0, 0]
// distribute(10, 10) # should be [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// distribute(15, 10) # should be [2, 2, 2, 2, 2, 1, 1, 1, 1, 1]

// function distribute(m, n) {  
//   if (n <= 0) {return []};
//   if (m <= 0) { 
//     let m = 0; 
//     let noLuck = m.toString().repeat(n).split('');
//     let sadArr = [];
//     noLuck.forEach(function(i) { sadArr.push(Number(i))})
//     return sadArr;
//   };
//   let extraCandies = m % n;
//   let leastPossibleCandyAmount = Math.floor( m / n );
//   let firstDistributionOfCandy = leastPossibleCandyAmount.toString().repeat(n).split('');
//   let numArr = []
//   firstDistributionOfCandy.forEach(function(i) { numArr.push(Number(i))})
//   for (let i = 0; i < extraCandies; i++) {
//   numArr[i] = numArr[i] + 1 ;;
//   }
// return numArr;
// }


function distribute(m, n) {  
  if (n <= 0) {return []};
  if (m <= 0) { 
    let m = 0; 
    let noLuck = m.toString().repeat(n).split('');
    let sadArr = [];
    noLuck.forEach(function(i) { sadArr.push(Number(i))})
    return sadArr;
  };
  let extraCandies = m % n;
  let leastPossibleCandyAmount = Math.floor( m / n );
  let numArr = [];
  for(let i = 0; i < n; i++) numArr.push(leastPossibleCandyAmount);
  for (let i = 0; i < extraCandies; i++) {
  numArr[i] = numArr[i] + 1 ;;
  }
return numArr;
}

function distribute(m, n) {

  if (m < 0) { m =0; }
  if (n <=0) return [];
  
    var candysForSure = Math.floor(m / n);
    var candysLeft = m % n;
    var kids = new Array(n).fill(candysForSure);
    
    for (var i=0; i < candysLeft; i++){
      kids[i]++;
    }
    
    
    return kids;
  }




console.log(57123%35);
console.log(Math.floor((57123 / 35)));

console.log(distribute(57123, 35)) //, [1632, 1632, 1632, 1632, 1632, 1632, 1632, 1632, 1632, 1632, 1632, 1632, 1632, 1632, 1632, 1632, 1632, 1632, 1632, 1632, 1632, 1632, 1632, 1632, 1632, 1632, 1632, 1632, 1632, 1632, 1632, 1632, 1633, 1633, 1633])

// [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7]

console.log(distribute(-5, 10))  //.sort((a,b)=>a-b), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
console.log(distribute( 0, 10))  //.sort((a,b)=>a-b), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
console.log(distribute( 5, 10))  //.sort((a,b)=>a-b), [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]);
console.log(distribute(10, 10))  //.sort((a,b)=>a-b), [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
console.log(distribute(15, 10))  //.sort((a,b)=>a-b), [1, 1, 1, 1, 1, 2, 2, 2, 2, 2]);
console.log(distribute(-5,  0), []);
console.log(distribute( 0,  0), []);
console.log(distribute( 5,  0), []);
console.log(distribute(10,  0), []);
console.log(distribute(15,  0), []);
console.log(distribute(-5, -5), []);
console.log(distribute( 0, -5), []);
console.log(distribute( 5, -5), []);
console.log(distribute(10, -5), []);
console.log(distribute(15, -5), []);