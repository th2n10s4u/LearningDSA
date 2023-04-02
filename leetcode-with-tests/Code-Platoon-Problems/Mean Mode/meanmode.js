// take in an array
// if the mode == mean return 1
// if mode != mean return 0
// DEFINITION
// The mean is the average of all elements divided by the length of the array.
// The mode is the number that occurs the most times. (Majority Element)
// I am aware that I could have used map() get() reduce() methods to solve the mode, I still struggle with understanding how to implement key value pairs while looping through an array so I just did it the way that I know best.
// I took a photo of my whiteboard steps to solve this as well.

function ArrayChallenge(arr) {
  let arrSum = 0;
  let arrMean = 0;
  for (let i = 0; i < arr.length; i++) {
    arrSum += arr[i];
  }
  arrMean = arrSum / arr.length;

  let mode = null;
  let sortedArr = arr.sort();
  // if the first index is the same as the last index, return 1 because if all elements are the same the mean = mode.
  let doesArrContainEqualElements =
    sortedArr[0] === sortedArr[sortedArr.length - 1];
  if (doesArrContainEqualElements) {
    return 1;
  }

  let store1 = null;
  let store2 = null;
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] == sortedArr[0]) {
      store1 = sortedArr[i];
      // count1 = 1;
    } else if (sortedArr[i] == store1) {
      count1++;
    } else if (sortedArr[i] != store1 && store2 == null) {
      store2 = sortedArr[i];
      count2++;
    } else if (sortedArr[i] == store2) {
      count2++;
    } else {
      if (count1 > count2) {
        store2 = sortedArr[i];
        count2 = 0;
      } else if (count1 < count2) {
        store1 = sortedArr[i];
        count1 = 0;
      }
    }
    // I do not want to assign a mode here if the count is under 1 for any element.
    if (
      (count1 === 0 && count2 === 0) ||
      (count1 === 1 && count2 === 0) ||
      (count1 === 0 && count2 === 1)
    ) {
      mode = null;
    } else if (count1 > count2) {
      mode = store1;
    } else {
      mode = store2;
    }
    // console.log("store1:",store1,"count1:", count1,"store2:", store2,"count2:", count2,"arr:", arr,"index:", i,"mean:", arrMean,"mode:",mode);
  }
  if (mode !== arrMean) {
    return 0;
  } else return 1;
}

// keep this function call here
console.log(ArrayChallenge(readline()));
