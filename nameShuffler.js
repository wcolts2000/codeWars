// Write a function that returns a string in which firstname is swapped with last name.

// nameShuffler('john McClane'); => "McClane john"

function nameShuffler(str) {
  return str.split(' ').reverse().join(' ');
}

// function nameShuffler(str) {
//   return str.replace(/(\S+)\s+(\S+)/g, "$2 $1")
// }

console.log(nameShuffler('john McClane'), 'McClane john');
