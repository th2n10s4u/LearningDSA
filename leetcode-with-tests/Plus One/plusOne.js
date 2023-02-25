//1. Plus One
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most signifiant to least signifacnt in left-to--right order. The large integer does not contain any leading 0's.

function plusOne(arr) {
  let carry = 1;
  for (let Idx = arr.length - 1; Idx >= 0; Idx--) {
    arr[Idx] += carry;
    if (arr[Idx] > 9) {
      arr[Idx] = 0;
      carry = 1;
    } else {
      carry = 0;
    }
  }
  return arr;
}
//PlusOne Tests
let plusOneTestArr1 = [1, 2, 3, 4]; // returns [1,2,3,5]
let plusOneTestArr2 = [1, 2, 3, 9]; // returns [1,2,4,0]
let plusOneTestArr3 = [1, 2, 9, 9]; // returns [1,3,0,0]
let plusOneTestArr4 = [1, 0, 9, 9]; // returns [1,1,0,0]
let plusOneTestArr5 = [0, 0, 0, 0]; // returns [0,0,0,1]
let plusOneTestArr6 = [9]; // returns [0];
let plusOneTestArr7 = [1, 9, 0, 9, 9]; // returns [1,9,1,0,0]

console.log(plusOne(plusOneTestArr1));
console.log(plusOne(plusOneTestArr2));
console.log(plusOne(plusOneTestArr3));
console.log(plusOne(plusOneTestArr4));
console.log(plusOne(plusOneTestArr5));
console.log(plusOne(plusOneTestArr6));
console.log(plusOne(plusOneTestArr7));
