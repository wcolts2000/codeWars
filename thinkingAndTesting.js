// No Story

// No Description

// Only by Thinking and Testing

// Look at result of testcase, guess the code!
function testit(n) {
  return n.toString(2).replace(/0/g, '').length;
}

//Ookokokk?
Test.assertSimilar(testit(0), 0, '');
Test.assertSimilar(testit(1), 1, '');
//return n-1 ?
Test.assertSimilar(testit(2), 1, '');
Test.assertSimilar(testit(3), 2, '');
//return Math.round(n/3) ?
Test.assertSimilar(testit(4), 1, '');
Test.assertSimilar(testit(5), 2, '');
Test.assertSimilar(testit(6), 2, '');
Test.assertSimilar(testit(7), 3, '');
//All of the above answers are wrong
Test.assertSimilar(testit(8), 1, '');
Test.assertSimilar(testit(9), 2, '');
Test.assertSimilar(testit(10), 2, '');
Test.assertSimilar(testit(100), 3, '');
Test.assertSimilar(testit(1000), 6, '');
Test.assertSimilar(testit(10000), 5, '');
//return what ? thinking and testing...
