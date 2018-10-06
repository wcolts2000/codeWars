// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'


function switcheroo(x){
let arr = x.split('');
for (let i = 0 ; i < arr.length; i++){
  if(arr[i] === "a") {
    arr[i] = "b";
    continue;
  } if(arr[i]==="b") {
    arr[i] = "a";
    continue;
  }
  else if (arr[i] !== "a" && arr[i] !== "b"){
    arr[i] = arr[i];
  }
  
}
return arr.join('');

}

// const switcheroo=x=>x.replace(/[ab]/g,x=>x=="a"?"b":"a")

// function switcheroo(x){
//   return x.replace(/[ab]/g, function(c) { return c === 'a' ? 'b' : 'a'; });
// }

// function switcheroo(x){
//   return x.split('').map(function(e){
//     if (e =='b')return 'a';
//     if (e == 'a') return 'b';
//     if(e=='c') return 'c'
//   }).join('');
// }

// function switcheroo(x){
//   return [...x].map(v => v == 'a' ? v = 'b' : v == 'b' ? v = 'a' : v).join('');
// }


console.log(switcheroo('abc'), 'bac');
console.log(switcheroo('aaabcccbaaa'), 'bbbacccabbb'); 
console.log(switcheroo('ccccc'), 'ccccc'); 
