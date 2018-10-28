// John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between these towns. ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to Mary that he doesn't want to drive more than t = 174 miles and he will visit only 3 towns.
// Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible
// to please Mary and John- ?
// Example:
// With list ls and 3 towns to visit they can make a choice between: [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].
// The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.
// The biggest possible sum taking a limit of 174 into account is then 173 and the distances of the 3 corresponding towns is [55, 58, 60].
// The function chooseBestSum (or choose_best_sum or ... depending on the language) will take as parameters t (maximum sum of distances, integer >= 0), k (number of towns to visit, k >= 1) and ls (list of distances, all distances are positive or null integers and this list has at least one element). The function returns the "best" sum ie the biggest possible sum of k distances less than or equal to the given limit t, if that sum exists, or otherwise nil, null, None, Nothing, depending on the language. With C++, C, Rust, Swift, Go, Kotlin return -1.
// Examples:
// ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163
// xs = [50] choose_best_sum(163, 3, xs) -> nil (or null or ... or -1 (C++, C, Rust, Swift, Go)
// ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228

// **********************************************************************
// ******************STILL WORKING ON IT ********************************
// **********************************************************************

function chooseBestSum(t, k, ls) {
  if (ls.length < k ) {
    return null;
  };
  // make all possible subArrays of ls where the subArray length is k

  let holder = [];
  for(let i = 0; i < k;i++){
    let j = i + 1;
    holder.push(sample[i])
    holder.push(sample[j]);
    i++;
    // i++;j++;
    console.log(holder);
    console.log(sample[i]);
  }
  console.log(holder);
}

let sample = [50, 55, 57, 58, 60];
console.log(chooseBestSum(174, 3, sample), 173);

// var ts = [50, 55, 56, 57, 58]
// console.log(chooseBestSum(163, 3, ts), 163)
// ts = [50]
// console.log(chooseBestSum(163, 3, ts), null)
// ts = [91, 74, 73, 85, 73, 81, 87]
// console.log(chooseBestSum(230, 3, ts), 228)



// https://www.geeksforgeeks.org/print-all-possible-combinations-of-r-elements-in-a-given-array-of-size-n/
// <?php 
// // Program to print all combination of size r in an array of size n. The main function that prints all combinations of size r in arr[] of size n. This function mainly uses combinationUtil() function printCombination($arr, $n, $r)
// { 
//     // A temporary array to store all combination one by one 
//     $data = array(); 
  
//     // Print all combination using temprary array 'data[]' 
//     combinationUtil($arr, $data, 0, $n - 1, 0, $r); 
// } 
  
/* arr[] ---> Input Array : data[] ---> Temporary array to store current combination start & end ---> Staring and Ending indexes in arr[] index ---> Current index in data[] r ---> Size of a combination to be printed */
// function combinationUtil($arr, $data, $start, $end, $index, $r) 
// { 
//     // Current combination is ready  to be printed, print it 
//     if ($index == $r) { 
//         for ($j = 0; $j < $r; $j++) 
//             echo $data[$j]; 
//         return; 
//     } 
//     // replace index with all possible elements. The condition "end-i+1 >= r-index" makes sure that including one element at index will make a combination with remaining elements at remaining positions 
//     for ($i = $start; $i <= $end && $end - $i + 1 >= $r - $index; $i++) { 
//         $data[$index] = $arr[$i]; 
//         combinationUtil($arr, $data, $i + 1, $end, $index + 1, $r); 
//     }
// }
// // Driver Code 
// $arr = array(1, 2, 3, 4, 5); 
// $r = 3; 
// $n = sizeof($arr); 
// printCombination($arr, $n, $r); 
// // This code is contributed by ajit 
// ?> 