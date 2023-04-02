function zeroToEnd(arr) {
  let zero = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === 0 && arr[j] !== 0) {
        arr[i] = arr[j];
        arr[j] = zero;
      }
    }
  }
  return arr;
}

let arr1 = [0, 1, 2, 3, 0, 4, 5, 6];
console.log(zeroToEnd(arr1));
