// In this kata you will be given a random string of letters and tasked with returning them as a string of comma-separated sequences sorted alphabetcally, with each sequence starting with an uppercase character followed by n-1 lowercase characters, where n is the letter's alphabet position 1-26.

// function alphaSeq (str) {
//   answer = [];
//   let repeatedArr = [];
//   answer.push(str.toLowerCase().split('').sort())
//   answer = answer[0];
//   for(let i = 0; i < answer.length; i++){
//     repeatedArr.push(answer[i].repeat(answer[i].charCodeAt()-96));
//     console.log(answer[i].repeat(answer[i].charCodeAt()-96));
    
//   }
// console.log(answer[0].repeat(answer[0].charCodeAt()-96));
// // answer[0]

//   // answer.map( i => i.repeat((i.charCodeAt())-64));
//   console.log(answer[0].repeat(answer[0]));
  
//   // for(let index = 0; index < answer.length; index++){
//   //   let repeatedArr = []
//   //   if(index < answer.length) {
//   //     repeatedArr.push(answer[index].repeat(answer[index].charCodeAt()-96));
//   //   }
//   //   let repeatingIndex = answer[index].repeat(index)
//   //   // index = index + index.repeat((index.charCodeAt(index) - 64).toLowerCase()))
//   // }
//   // answer.forEach((index) => index + index.repeat((index.charCodeAt(index-64))(index.toLowerCase)))
  
//   console.log(repeatedArr);
//   return repeatedArr.toString();
// }


function alphaSeq (str) {
  answer = [];
  let repeatedArr = [];
  answer.push(str.toLowerCase().split('').sort())
  answer = answer[0];
  for(let i = 0; i < answer.length; i++){
    repeatedArr.push(`${(answer[i].toUpperCase())}${answer[i].repeat(answer[i].charCodeAt()-97)}`);
  }
  return repeatedArr.toString();
}

// const alphaSeq=(s) => [...s.toLowerCase()].sort().map(c=>c.toUpperCase()+c.repeat(c.charCodeAt()-97)).join`,`;


// let bigSample = 'E';
// console.log(bigSample.repeat((bigSample.charCodeAt())-64).toLowerCase());
// let sample = 'e';
// console.log(sample.repeat((sample.charCodeAt())-96));


console.log(alphaSeq("ZpglnRxqenU"));

// "Eeeee,Ggggggg,Llllllllllll,Nnnnnnnnnnnnnn,Nnnnnnnnnnnnnn,Pppppppppppppppp,Qqqqqqqqqqqqqqqqq,Rrrrrrrrrrrrrrrrrr,Uuuuuuuuuuuuuuuuuuuuu,Xxxxxxxxxxxxxxxxxxxxxxxx,Zzzzzzzzzzzzzzzzzzzzzzzzzz"







// Technical Details
// The string will include only letters.
// The first letter of each sequence is uppercase followed by n-1 lowercase.
// Each sequence is seperated with a comma.
// Return value needs to be a string.
