let emptyArr = [];
let extraSmallArr = [1];
let smallArr = [4, 8];
let mediumArr = [5, 20, 33];
let largeArr = [2, 5, 9, 19, 22];
let extraLargeArr = [3, 4, 10, 13, 23, 44, 56, 88, 203];

function mergeSorted(arr1, arr2) {
  let result = [];
  let index1 = 0;
  let index2 = 0;
  let resultIndex = 0;

  while (resultIndex < arr1.length + arr2.length) {
    if (
      (index1 < arr1.length && index2 < arr2.length) ||
      arr1[index1] < arr2[index2]
    ) {
      result[resultIndex++] = arr1[index1++];
    } else {
      result[resultIndex++] = arr2[index2++];
    }
  }
  return result;
}
console.log(mergeSorted(emptyArr, extraSmallArr)); // [1]
console.log(mergeSorted(smallArr, mediumArr)); // [4,5,8,20,33]
console.log(mergeSorted(largeArr, extraLargeArr)); // [2,3,4,5,9,10,13,19,22,23,44,56,88,203]
