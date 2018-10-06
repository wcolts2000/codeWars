// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

//     number of pillars (≥ 1);
//     distance between pillars (10 - 30 meters);
//     width of the pillar (10 - 50 centimeters).

// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).


function pillars(num_pill, dist, width) {
  if(num_pill === 1) {return 0};
  let centimeterDist = dist * 100;
  let pairs = num_pill - 1;
  if (num_pill === 2 ) {return centimeterDist}
  return (centimeterDist * pairs) + ((num_pill -2 ) * width) ;    
}

// function pillars(num_pill, dist, width) {
//   // your code here
//   return num_pill>1?(num_pill-1)*dist*100+(num_pill-2)*width:0;
// }


console.log(pillars(1, 10, 10), 0);
console.log(pillars(2, 20, 25), 2000);
console.log(pillars(11, 15, 30), 15270);


// describe("Basic tests", function(){
//   it("Testing for number of pillars: 1, distance: 10 m and width: 10 cm", function(){
//     Test.assertEquals(pillars(1, 10, 10) , 0);
//   });  
//   it("Testing for number of pillars: 2, distance: 20 m and width: 25 cm", function(){
//     Test.assertEquals(pillars(2, 20, 25) , 2000);
//   });
//   it("Testing for number of pillars: 11, distance: 15 m and width: 30 cm", function(){
//     Test.assertEquals(pillars(11, 15, 30) , 15270);
//   });
// });