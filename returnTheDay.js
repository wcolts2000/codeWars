// Complete the function which returns the weekday according to the input number:

// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const defaultReturn = 'Wrong, please enter a number between 1 and 7';

function whatday(num) {
  return num > 7 || num < 1 ? defaultReturn : days[num - 1];
}

console.log(whatday(1), 'Sunday');
console.log(whatday(2), 'Monday');
console.log(whatday(3), 'Tuesday');
console.log(whatday(8), 'Wrong, please enter a number between 1 and 7');
console.log(whatday(20), 'Wrong, please enter a number between 1 and 7');
