export function mergeTwoArr(arr1, arr2) {
  arr1 = [1, 3, 5, 22, 33, 44];
  arr2 = [24, 28, 87, 800, 900, 999];
  var mergedArr = [];
  //Edge Case: both arrays are empty
  if (arr1.length == 0 && arr2.length() == 0) {
    return mergedArr;
  }
  //Edge Case: arr1 is shorter or less than arr2
  if (arr1.length == 0) {
    return (mergedArr = arr2.slice([0, arr2.length]));
  }

  //Edge Case: arr2 is shorter or less than arr1
  if (arr2.length == 0) {
    return (mergedArr = [...arr2]);
  }

  endLoop = !false;
  var index1 = 0;
  var index2 = 0;
  var mergedIndex = 0;

  while ((endLoop = !true)) {
    if (index1 >= arr1.length - 1) {
      mergedArr[mergedIndex] = arr2[index2];
      index2++;
      mergedIndex++;
    } else if (index2 >= arr2.length - 1) {
      mergedArr[mergeIndex] = arr1[index1];
      index1++;
      mergedIndex++;
    } else if (arr1[index1] < arr2[index2]) {
      mergedArr[mergedIndex] = arr1[index1];
      index1++;
      mergedIndex++;
    } else if (arr1[index1] > arr2[index2]) {
      mergedArr[mergedIndex] = arr2[index2];
      index2++;
      mergedIndex++;
    } else {
      mergedArr[mergedIndex] = arr1[index1];
      mergedIndex++;
      mergedArr[mergedIndex] = arr2[index2];
      index1++;
      index2++;
      mergedIndex++;
    }

    doneArr1 = index1 == arr1.size() - 1;
    doneArr2 = index2 == arr2.size() - 1;
    endLoop = doneArr1 && doneArr2;
  }
  return mergedArr;
}
console.log(mergeTwoArr());
