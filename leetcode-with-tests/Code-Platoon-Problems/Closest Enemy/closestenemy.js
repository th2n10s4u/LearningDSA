function ArrayChallenge(arr) {
  let searcher = null;

  // loop through the array until we find a 1.
  // when we find 1 start a counter
  // loop through the right until we find 2.
  // loop though the left until we find 2.
  // if left>right return right else return left.

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      // this took me hours to debug... (arr[i] === i) They should add a debugger in this web app.
      searcher = i;
      break;
    }
  }
  if (arr.indexOf(2) === -1) {
    return 0;
  }
  // Right's step counter
  let stepsToFindTwoRight = 0;
  // check the right
  for (let twoHunter = searcher + 1; twoHunter <= arr.length; twoHunter++) {
    if (arr[twoHunter] === 2) {
      stepsToFindTwoRight = twoHunter - searcher;
      break;
    }
  }

  // left's step counter
  let stepsToFindTwoLeft = 0;
  // check the left
  for (let twoHunter = searcher - 1; twoHunter >= 0; twoHunter--) {
    if (arr[twoHunter] === 2) {
      stepsToFindTwoLeft = searcher - twoHunter;
      break;
    }
  }
  // no 2 found
  if (stepsToFindTwoLeft === 0 && stepsToFindTwoRight === 0) {
    return 0;
  }
  // if one of them is 0 return greater
  if (stepsToFindTwoLeft === 0 || stepsToFindTwoRight === 0) {
    return Math.max(stepsToFindTwoLeft, stepsToFindTwoRight);
  }
  // return the min
  return Math.min(stepsToFindTwoLeft, stepsToFindTwoRight);
}
// keep this function call here
console.log(ArrayChallenge(readline()));

//////////////////////////////////////////////////////////////////////////////////////////////////////////
///// || It occured to me that updating counts while looping from left to   //////////////////////////////
///// || right isn't an effecient strategy at solving this. I'm going to    //////////////////////////////
///// || attempt to start a loop in both direction after I find the 1 and   //////////////////////////////
///// || return the shortest counter.    /////////////////////////////////////////////////////////////////

// // iterate until we find a 1 or 2
// // if there are no 2's in the array return 0.

// // when we find 1 counter1 = 0
// // when we find 2 counter2 = 0

// // if the number we found is 1 continue looping through the array and look for 2.
// // if current is not 2 count++.
// // if current is 2 count++ and return count.

// // if the number we found is 2 continue looping through the array and look for 1.
// // if current is not 1 count++.
// // if the number we found is 2 and the 2 counter is greater than 0, reset the counter
// // if current is 1 count++ and return count.

// // if count = 0; return count;

// function ArrayChallenge(arr) {
// let counter1 = 0;
// let counter2 = 0;
// let target = null;

// for (let i = 0; i < arr.length; i++){
//   if (arr[i] === 1){
//     target = i;
//     counter1 = 0;
//     break;
//   } else if (arr[i] === 2) {
//     target = i;
//     counter2 = 0;
//     break;
//   }
// }
// // if there aren't any 2's in the array. . .
// if (target === null) {
//   return 0;
// }
// if (arr[target] === 1) {
// }
