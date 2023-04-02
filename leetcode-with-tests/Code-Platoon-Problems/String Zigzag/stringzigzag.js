// create a function that takes the number of rows as an aguement strArr[2].
//
// if the second strin is 3 arr= [[][][]]. â
// we need to loop over each character of the first element in the strArr. â
// each character needs to then be pushed to the array off arrays in a zig zag manner
// we have rows the zig zag will first go down, and then go up until the length of the string is copied.
// starting at arr[0][0] incrementing to arr[0][numInArr]
// when it reaches arr[0][numInArr] we need to decrement back to 0.
// We need to loop through the array of arrays and join them together.

// ------------Example----------
// Cat, 3  would result in
// arr = [[c, , ][ ,a, ] [, ,t]]; we don't need to have empty strings in the arrays. Just alternate the push
// arr = [[c][a][t]]
// if arr0 increment if arr.length-1 decrement I think this will be done in a while statement of sorts.
function StringChallenge(strArr) {
  let str = strArr[0];
  let numInArr = Number(strArr[1]); // target second string in the array and convert it to a number.
  let arrOfArr = makeArrOfArr(numInArr); // call the function assigning the new array to arrOfArr.
  // console.log(arrOfArr);

  if (numInArr === 1) return str;

  let row = 0;
  let direction = "down";
  for (let i = 0; i < str.length; i++) {
    // iterate through the string
    arrOfArr[row].push(str[i]);
    if (direction === "down") {
      row++;
      if (row === numInArr) {
        row = numInArr - 2; // this will start decrementing from the correct row.
        direction = "up";
      }
    } else {
      row--;
      if (row === -1) {
        // if row gets past 0 we need to reset the direction
        row = 1;
        direction = "down";
      }
    }
    // console.log(arrOfArr)
  }
  let result = arrOfArr.flat().join("");
  return result;
}
//Create a function arrOfArr that creates a 2d array with the arguement from parent function
function makeArrOfArr(numInArr) {
  let mainArr = [];
  for (let i = 0; i < numInArr; i++) {
    //push the subArray into the mainArray (number) times.
    mainArr.push([]);
  }
  return mainArr;
}

// keep this function call here
console.log(StringChallenge(readline()));
