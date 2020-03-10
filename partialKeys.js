// The Rub

// You need to make a function that takes an object as an argument, and returns a very similar object but with a special property.
// The returned object should allow a user to access values by providing only the beginning of the key for the value they want. For
// example if the given object has a key idNumber, you should be able to access its value on the returned object by using a key idNum
// or even simply id. Num and Number shouldn't work because we are only looking for matches at the beginning of a key.

// Be aware that you could simply add all these partial keys one by one to the object. However, for the sake of avoiding clutter, we
// don't want to have a JSON with a bunch of nonsensical keys. Thus, in the random tests there will be a test to check that you did not
// add or remove any keys from the object passed in or the object returned.

// Also, if a key is tested that appears as the beginning of more than one key in the original object (e.g. if the original object had
// a key idNumber and idString and we wanted to test the key id) then return the value corresponding with whichever key comes first alphabetically.
// (In this case it would be idNumbers value because it comes first alphabetically.)

// let o = partialKeys({ abcd: 1 })

// o.abcd === 1 // true
// o.abc === 1 // true
// o.ab === 1 // true
// o.a === 1 // true

// o.b === 1 // false!

// Object.keys(o) // ['abcd']
function partialKeys(obj) {
  let answer = {};
  let keysArray = Object.keys(obj);
  keysArray.forEach((key, i) => {
    for (let j = 0; j < key.length; j++) {
      answer[keysArray[i].substring(0, j + 1)] = obj[keysArray[i]];
    }
  });
  console.log(keysArray[0].substr(0, 1));
  return answer; // TODO
}

let subject = partialKeys({
  aaa: 1,
  abc: 2,
  dfg: 3,
  def: 4,
  dfgh: 5
});

console.log(subject.a, 1);
console.log(subject.aa, 1);
console.log(subject.ab, 2);
console.log(subject.df, 3);
console.log(subject.d, 4);
console.log(subject.de, 4);
console.log(subject.dfg, 3);
console.log(subject.dfgh, 5);
console.log(subject.b, undefined);
console.log(subject.c, undefined);
console.log(subject.ef, undefined);
