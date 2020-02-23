function indexEqualsValue(a) {
  let start = 0;
  let end = a.length - 1;
  let smallest = -1;
  while (start <= end) {
    let median = Math.floor((start + end) / 2);
    if (a[median] < median) {
      start = median + 1;
    } else if (a[median] > median) {
      end = median - 1;
    } else {
      if (a[median - 1] === median - 1) {
        end = median - 1;
      } else {
        return (smallest = median);
      }
    }
  }
  return smallest;
}

console.log(indexEqualsValue([-8, 0, 2, 5]), 2);
console.log(indexEqualsValue([-1, 0, 3, 6]), -1);
console.log(indexEqualsValue([-3, 0, 1, 3, 10]), 3);
console.log(indexEqualsValue([-5, 1, 2, 3, 4, 5, 7, 10, 15]), 1);
console.log(indexEqualsValue([9, 10, 11, 12, 13, 14]), -1);
console.log(indexEqualsValue([0]), 0);
