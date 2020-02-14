function solution(string) {
  // CHARCODES A=65 Z-90
  let result = '';
  for (let i = 0; i < string.length; i++) {
    let nextChar = string.charCodeAt(i + 1);

    if (nextChar >= 65 && nextChar <= 90) {
      result += string[i] + ' ';
      i++;
    }
    result += string[i];
  }
  return result;
}

console.log(solution('camelCasing'), 'camel Casing');
console.log(solution('camelCasingTest'), 'camel Casing Test');
