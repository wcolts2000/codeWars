// You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

// Input:

// If, you can read?

// Output:

// India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

// Note:

// The set of used punctuation is .!?.
// Punctuation should be kept in your return string, but spaces should not.
// Xray should not have a dash within.
// Every word and punctuation mark should be seperated by a space ' '.
// There should be no trailing whitespace
function to_nato(words) {
    let ans = [];
    for (const char of words) {
        let letter = natoPhoneticAlphabet[char.toLowerCase()];
        if (letter) ans.push(letter);
        if (punctuation.includes(char)) ans.push(char);
    }
    return ans.join(' ');
}

let punctuation = ['.', '!', '?'];

const natoPhoneticAlphabet = {
    a: 'Alfa',
    b: 'Bravo',
    c: 'Charlie',
    d: 'Delta',
    e: 'Echo',
    f: 'Foxtrot',
    g: 'Golf',
    h: 'Hotel',
    i: 'India',
    j: 'Juliett',
    k: 'Kilo',
    l: 'Lima',
    m: 'Mike',
    n: 'November',
    o: 'Oscar',
    p: 'Papa',
    q: 'Quebec',
    r: 'Romeo',
    s: 'Sierra',
    t: 'Tango',
    u: 'Uniform',
    v: 'Victor',
    w: 'Whiskey',
    x: 'Xray',
    y: 'Yankee',
    z: 'Zulu',
};

console.log(
    to_nato('If you can read'),
    'India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta',
);
console.log(
    to_nato('Did not see that coming'),
    'Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf',
);
console.log(
    to_nato('go for it!'),
    'Golf Oscar Foxtrot Oscar Romeo India Tango !',
);
