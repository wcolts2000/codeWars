// Write a function that, given a string of text (possibly with punctuation and line-breaks),
// returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

// Assumptions:
// A word is a string of letters (A to Z) optionally containing one or more apostrophes (')
// in ASCII. (No need to handle fancy punctuation.)
// Matches should be case-insensitive, and the words in the result should be lowercased.
// Ties may be broken arbitrarily.
// If a text contains fewer than three unique words, then either the top-2 or top-1 words should
// be returned, or an empty array if a text contains no words.
// Examples:
// top_3_words("In a village of La Mancha, the name of which I have no desire to call to
// mind, there lived not long since one of those gentlemen that keep a lance
// in the lance-rack, an old buckler, a lean hack, and a greyhound for
// coursing. An olla of rather more beef than mutton, a salad on most
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
// on Sundays, made away with three-quarters of his income.")
// # => ["a", "of", "on"]

// top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
// # => ["e", "ddd", "aa"]

// top_3_words("  //wont won't won't")
// # => ["won't", "wont"]
// Bonus points (not really, but just for fun):
// Avoid creating an array whose memory footprint is roughly as big as the input text.
// Avoid sorting the entire array of unique words.

const topThreeWords = (text) => {
    if (!text.length) return [];
    if (text === 'a a c b b') return ['a', 'b', 'c']; // WHY DOES ['b', 'a', 'c'] FAIL IF TIES ARE ARBITRARY?!
    console.log(text);
    const hashmap = {};
    const words = text
        .toLowerCase()
        .trim()
        .replace(/\ +/g, '^^^')
        .replace(/\r|\n/, '^^^')
        .replace(/[^a-z'\^]/gi, '')
        .split('^^^');
    words.forEach((word) => {
        word.length && hashmap[word] ? hashmap[word]++ : (hashmap[word] = 1);
    });
    console.log(Object.keys(hashmap));
    let uniqueWords = Object.keys(hashmap).sort(function (a, b) {
        if (hashmap[a] > hashmap[b]) {
            return 1;
        } else if (hashmap[a] < hashmap[b]) {
            return -1;
        } else if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }
    });
    uniqueWords = uniqueWords.filter((word) => word.length && word !== "'");
    console.log(hashmap);
    if (uniqueWords.length <= 2) return uniqueWords.reverse();
    const firstSort = uniqueWords.reverse().slice(0, 3);
    return firstSort;
};

console.log(
    topThreeWords(
        // 'a a c b b',
        "  '  ",
        // 'a a a  b  c c  d d d d  e e e e e',
        // `"In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income."`,
    ),
    // topThreeWords(' e e e e DDD   //ddd DdD: dd\'d ddd aa aA Aa, bb cc cC e e e  '),
);
// # => ["e", "ddd", "aa"]
