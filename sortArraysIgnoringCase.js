// Simple sort, but this time sort regardless of upper / lower case.

// So the input of

// [ "Hello", "there", "I'm", "fine"]
// is translated to

// ["fine", "Hello", "I'm", "there" ]

// sortme = function( names ){
//   let copyArr = [...names];
//   copyArr.sort((a, b) => {
//     return a.toLowerCase().localeCompare(b.toLowerCase());
// })
//   return copyArr;
// }

sortme = function( names ){
  return names.sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase());
})
}


// console.log(sortme([ "Hello", "there", "I'm", "fine"])); //["fine", "Hello", "I'm", "there" ]
