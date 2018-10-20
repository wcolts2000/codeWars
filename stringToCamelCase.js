// Good morning! Complete the function so that it converts dash-delimited ("kebab" case) & underscore-delimited ("snake" case) words into "camel" casing. The first word within the output should be capitalized only if the original word was capitalized.





function toCamelCase(str) {
  const words = str.split(/-|_/g);
  console.log(words);
  
  let camelCase = words[0];  
  console.log(camelCase);

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    console.log( words[i]);
    console.log(camelCase);

    camelCase += word[0].toUpperCase() + word.slice(1);
    console.log(camelCase);
  }
  return camelCase;
}










console.log(toCamelCase("the-stealth-warrior"));
// returns "theStealthWarrior"
console.log(toCamelCase("The_stealth_warrior"));
// returns "TheStealthWarrior"