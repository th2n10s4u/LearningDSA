function thirdLargest(arr) {
  let largest = -1;
  let secondLargest = -1;
  let thirdLargest = -1;

  if (arr.length === 0) {
    return "Empty Array";
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr.length < 2) {
      return largest;
    }
    if (arr[i] > thirdLargest) {
      if (arr[i] > largest) {
        thirdLargest = secondLargest;
        secondLargest = largest;
        largest = arr[i];
      } else if (arr[i] > secondLargest) {
        thirdLargest = secondLargest;
        secondLargest = arr[i];
      } else thirdLargest = arr[i];
    }
  }
  if (arr.length < 3) {
    return largest;
  }
  return thirdLargest;
}

let emptyArr = [];
let lessThanThree = [1, 2];
let testArr = [1, 2, 3, 4, 5, 6, 7];
let example1 = [55, 51, 22, 33];

console.log(thirdLargest(emptyArr)); // Empty Array
console.log(thirdLargest(lessThanThree)); // [2]
console.log(thirdLargest(testArr)); // 5
console.log(thirdLargest(example1)); // 33
