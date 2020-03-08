// Description:
// Make a simple function called greet that returns the most-famous "hello world!".

// Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you
// can think of? What is a "hello world" solution you would want to show your friends?

const greet = () => {
  let zerosAndOnes = [
    1101000,
    1100101,
    1101100,
    1101100,
    1101111,
    100000,
    1110111,
    1101111,
    1110010,
    1101100,
    1100100,
    100001
  ];
  return zerosAndOnes.reduce(
    (acc, cur) => (acc += String.fromCharCode(parseInt(cur, 2))),
    ''
  );
};

console.log(greet(), 'hello world!');
