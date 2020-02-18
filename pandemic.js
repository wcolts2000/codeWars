function infected(s) {
  const continents = s.split('X');
  let total = 0;
  let infectedTotal = 0;
  continents.forEach(continent => {
    total += continent.length;
    if (continent.includes('1')) {
      infectedTotal += continent.length;
    }
  });
  if (total === 0) return 0;
  return (infectedTotal / total) * 100;
}

console.log(infected('01000000X000X011X0X'), 73.33333333333333);
console.log(infected('01X000X010X011XX'), 72.72727272727273);
console.log(infected('XXXXX'), 0);
console.log(infected('0000000010'), 100);
console.log(infected('X00X000000X10X0100'), 42.857142857142854);
