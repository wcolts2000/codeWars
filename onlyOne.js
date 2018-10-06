// Given any number of boolean flags function should return true if and only if one of them is true while others are false. If function is called without arguments it should return false.
function onlyOne() {
  if(!arguments.length){return false};
  let arr = [...arguments];
  let yesCount = [];  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === true) {
      yesCount.push(arr[i]);
      // continue;
    }
  }
  if(!yesCount.includes(true)){return false}
  return yesCount.length > 1 ? false : true
}


// const onlyOne = (...args) => args.filter(Boolean).length === 1

// function onlyOne(...args) {
//   var match = args.toString().match(/true/g)
//   return match ? match.length === 1 : false;
// }



console.log(onlyOne()); //  --> false
console.log(onlyOne(true, false, false));  //  --> true
console.log(onlyOne(true, false, false, true)); // --> false
console.log(onlyOne(false, false, false, false));  //--> false

