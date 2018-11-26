// Introduction

// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.
// Task

// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3 
//  b - 2
//  s - 1

// The right side letters and their power:

//  m - 4
//  q - 3 
//  d - 2
//  z - 1

// The other letters don't have power and are only victims.

/// *********WIP****************

function alphabetWar(fight){
  // const leftSide = { w: 4, p: 3, b: 2, s:1 };
  // const rightSide = { m: 4, q: 3, d: 2, z: 1 };
  const w = 4; const p = 3; const b = 2; const s = 1;
  const m = 4; const q = 3; const d = 2; const z = 1;
  const left = [w,p,b,s];
  const right = [m,q,d,z];
  let leftCount = 0;
  let rightCount = 0;

  console.log(left.includes(fight[4]));
  

// return "Right side wins!";
//     return "Let's fight again!";
}

// console.log(alphabetWar("z"));        //=> Right side wins!
// console.log(alphabetWar("zdqmwpbs")); //=> Let's fight again!
console.log(alphabetWar("zzzzs"));    //=> Right side wins!
// console.log(alphabetWar("wwwwwwz"));  //=> Left side wins!
