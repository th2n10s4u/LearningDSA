//store largest remove it from the array.
// call the recusiive function taking in arr and largestNum
// create the recursive function taking in arr and target
// add exception case if arr length is 1 return arr[0] === largestNum will be T/F.
// loop through the array.
// check the array with each element and without i of each iteration. How?
// each iteration needs to check a stored variabel currentIndex - largestNum

function ArrayChallenge(arr) {
  let largestNum = Math.max(...arr);
  let largestIndex = arr.indexOf(largestNum);
  arr.splice(largestIndex, 1);
  // call the recursive function
  return checkinAllOccurances(arr, largestNum);
}

function checkinAllOccurances(arr, target) {
  if (target === 0) {
    return true;
  }
  if (arr.length === 0) {
    return false;
  }
  const num = arr[0];
  const newArr = arr.slice(1);
  // console.log("arr",arr,"newArr", newArr, "target", target,"num", num, "target-num", target-num)
  // check if target can be made by including num or excluding num
  return (
    checkinAllOccurances(newArr, target - num) ||
    checkinAllOccurances(newArr, target)
  );
}

// keep this function call here
console.log(ArrayChallenge(readline()));

// ----------- This was my initial solution @ 7271 minutes to solve...
// ----------- it was only removing the first element through each iteration,
// ----------- I needed it to do a check each iteration with and without arr[i].
// ----------- It was very frustrating to have my tests not work for arr = [1,2,3,4].

//find largest, store it name it largestNum
// create a new array without largest - never mind arrays are mutible so remove the largestNum
// check to see if the sum of all elements === largestNum if not, do the next check.
// This is going to require recursion and a for loop?
// for loop from 0 or arr.length.
// This was my initial solution @ 7271 minutes to solve...
// function ArrayChallenge(arr) {
// let largestNum = Math.max(...arr)
// let largestIndex = arr.indexOf(largestNum)
// arr.splice(largestIndex, 1);
// // call the recursive function
// return checkinAllOccurances(arr, largestNum);
// };
// function checkinAllOccurances(arr, largestNum){
//   for (let i = 0; i < arr.length; i++){
//   const total = arr.reduce((acc, curr) => acc + curr);
//     if(largestNum===total){
//       return true;
//     }
//     if (arr.length === 1){
//       return false;
//     }
// // console.log(arr, largestNum)
// arr.shift();
//   return checkinAllOccurances(arr, largestNum);
//   }
// };
