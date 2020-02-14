function duplicateCount(text) {
  let hashTable = {};
  text
    .toLowerCase()
    .split('')
    .forEach(val => {
      Object.keys(hashTable).includes(val)
        ? hashTable[val]++
        : (hashTable[val] = 1);
    });
  return Object.values(hashTable).reduce((acc, value) => {
    if (value > 1) {
      return (acc += 1);
    } else return acc;
  }, 0);
}

console.log(duplicateCount(''), 0);
console.log(duplicateCount('abcde'), 0);
console.log(duplicateCount('aabbcde'), 2);
console.log(duplicateCount('aabBcde'), 2, 'should ignore case');
console.log(duplicateCount('Indivisibility'), 1);
console.log(
  duplicateCount('Indivisibilities'),
  2,
  'characters may not be adjacent'
);
