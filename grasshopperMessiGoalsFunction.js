function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  // code goes here
  return [...arguments].reduce((acc, el) => (acc += el));
}

console.log(goals(0, 0, 0), 0);
console.log(goals(43, 10, 5), 58);
