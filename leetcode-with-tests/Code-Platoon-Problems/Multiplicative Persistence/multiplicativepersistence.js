// multiplicative persistance = number of times num first index * next index's result
// My guess would be to use a callback function until arr.length = 1.

// check if num is > 1 || num < 10 if so return 0;
//
// create a counter
// change the number to a string
// if the length of the string is greater than 1
// change the string into an array
// somehow pass that array into a function that multiplies both indices
// use a for loop and multiply num[0] * num[1].
// return that
// add 1 to the counter.

function MathChallenge(num) {
  let counter = 0;
  if (num.toString().length < 1) {
    return 0;
  }
  while (num.toString().length > 1) {
    num = num.toString();
    num = num.split("");
    num = theMaths(num);
    counter++;
  }
  function theMaths(num) {
    return num.reduce(function (a, b) {
      return a * b;
    });
  }
  // console.log(counter, num)
  return counter;
}

// failed attempt to loop through and multiply the result.
//   let product = 1;
//   for (let i = 0; i < num.length; i++){
//     product = num[0] * num[1];
//   console.log(i, num, product, counter)
//   }
//   return product;
// }
// return counter;
// }
