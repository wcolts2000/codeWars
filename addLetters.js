function addLetters(...letters) {
  // your code here
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let sum = 0;
  if (letters.length === 0) return 'z';
  letters.forEach(letter => {
    sum += alphabet.indexOf(letter) + 1;
  });
  while (sum > 26) sum = sum - 26;
  return alphabet[sum - 1];
}

console.log(addLetters('a', 'b', 'c'), 'f');
console.log(addLetters('z'), 'z');
console.log(addLetters('a', 'b'), 'c');
console.log(addLetters('c'), 'c');
console.log(addLetters('z', 'a'), 'a');
console.log(addLetters('y', 'c', 'b'), 'd');
console.log(addLetters(), 'z');
