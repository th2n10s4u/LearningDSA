// Given an array A, return an array B where the contents of B are the reverse of those of A.
// For example A=[1,2,3] returns B = [3,2,1]

function reverseArr(arr) {
  let arrB = [];
  let arrACounter = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    // arrACounter+=1;
    arrB[++arrACounter] = arr[i];
  }
  return arrB;
}

console.log(reverseArr([1, 2, 3]));
