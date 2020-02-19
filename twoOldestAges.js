function twoOldestAges(ages) {
  let answer = [];
  ages.sort((a, b) => a - b);
  answer.push(ages.pop());
  answer.unshift(ages.pop());
  return answer;
}
console.log(twoOldestAges([1, 2, 10, 8])); // should return [8, 10]
