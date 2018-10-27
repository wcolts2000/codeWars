// John has invited people. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name. When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma. So the result of function meeting(s) will be:
// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.

function meeting(s) {
  let groupedArr = [];
  let namedOrder = s.toUpperCase().split(';').sort();
  // console.log(namedOrder);
  
  for(let i = 0; i < namedOrder.length;i++){
    groupedArr.push(`(${namedOrder[i].split(':').reverse().join(', ')})`);
    // console.log(namedOrder[i].split(':').reverse().join(', '));
  }
  let sortedNames = groupedArr.sort();
  let answer = [];
  console.log(sortedNames);
  for(let i = 0; i < sortedNames.length; i++) {
    console.log(sortedNames[i]);
    
    answer += (sortedNames[i]);
  // return answer
  
  }
  return answer;
}

// function meeting(s) {
//   let string = s.toUpperCase().split(';')
//                 .map(x => x.split(':').reverse().join(', '))
//                 .sort()
//                 .join(')(')
//   return '(' + string + ')'
// }

// function meeting(s) {
//   let arr = s.toUpperCase().split(';');
//   arr = arr.map( people => people.split(':')).sort((a, b) => {
//       if (a[1] === b[1]){
//         return a[0] > b[0] ? 1 : -1;
//       } else {
//         return a[1] > b[1] ? 1 : -1;
//       }
//     });
//   return arr.map(p => `(${p[1]}, ${p[0]})`).join('');
// }

const s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

console.log(meeting(s));
