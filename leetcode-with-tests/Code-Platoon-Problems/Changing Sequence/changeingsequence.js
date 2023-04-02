function ArrayChallenge(arr) {
  // loop through an array
  // create a variable for next index in the loop
  // create a variable for greaterThanCounter and lessThanCounter
  // if currentIndex is less than nextIndex
  // if lessThanCounter > 0
  // result = i;
  // otherwise greaterThanCounter++
  // rinse and repeate
  // had multiple syntax errors. else needs curly brakets.
  let result = -1;
  let greaterThanCounter = 0;
  let lessThanCounter = 0;
  for (let i = 0; i < arr.length; i++) {
    let next = arr[i + 1];

    if (arr[i] < next) {
      if (lessThanCounter > 0) {
        result = i;
        lessThanCounter = 0;
      } else {
        greaterThanCounter++;
      }
    } else if (arr[i] > next) {
      if (greaterThanCounter > 0) {
        result = i;
        greaterThanCounter = 0;
      } else {
        lessThanCounter++;
      }
    }
  }
  return result;
}
