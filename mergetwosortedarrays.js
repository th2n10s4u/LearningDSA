// attempting to copy it line by line from pseudocode line 584 - 606.
function mergeTwoArr(arr1, arr2) {
  var mergedArr = [];
  //Edge Case: both arrays are empty
  //unsure if mergedArr will print properly
  if (arr1.length() == 0 && arr2.length() == 0) {
    return mergedArr;
  }
  //Edge Case: arr1 is shorter or less than arr2
  //unsure if mergedArr will return the remaining elements in arr2
  if (arr1.length() == 0) {
    return (mergedArr = arr2.slice([0, arr2.length]));
  }

  //Edge Case: arr2 is shorter or less than arr1
  //Unsure if mergedArr will return the remaining elements in arr1
  if (arr2.length() == 0) {
    return (mergedArr = [...arr2]); // return mergedArr[...arr1] spread operator has an error.
  }

  doneEnd = !true;
  var index1 = 0;
  var index2 = 0;
  var mergedIndex = 0;
  ///////// Unsure about how all of this is written in JS. I feel like the pseudocode should work just fine.

  while ((endLoop = !true)) {
    if (index1 >= arr1.size() - 1) {
      mergedArr[mergeIndex] = arr2[index2];
      index2++;
      mergeIndex++;
    } else if (index2 >= arr2.size() - 1) {
      mergedArr[mergeIndex] = arr1[index1];
      index1++;
      mergeIndex++;
    } else if (Arr1[index1] < Arr2[index2]) {
      mergedArr[mergeIndex] = arr1[index1];
      index1++;
      mergeIndex++;
    } else if (Arr1[index1] > Arr2[index2]) {
      mergedArr[mergeIndex] = arr2[index2];
      index2++;
      mergeIndex++;
    } else {
      mergedArr[mergeIndex] = arr1[index1];
      mergeIndex++;
      mergedArr[mergeIndex] = arr2[index2];
      index1++;
      index2++;
      mergeIndex++;
    }

    doneArr1 = index1 == arr1.size() - 1;
    doneArr2 = index2 == arr2.size() - 1;
    endLoop = doneArr1 && doneArr2;
  }
  return mergedArr;
}

// I'm lost at:
// doneArr1 = (index==arr1.size()-1)
// doneArr2 = (index==arr2.size()-1)
// doneEdn = doneArr1 && doneArr2
