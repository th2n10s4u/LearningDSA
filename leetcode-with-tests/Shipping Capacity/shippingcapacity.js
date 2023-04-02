function sendOnBoat(weights, M) {
  let currentWeight = 0;
  let dayCounter = 1;

  for (let i = 0; i < weights.length; i++) {
    if (weights[i] + currentWeight <= M) {
      currentWeight += weights[i];
    } else {
      dayCounter++;
      currentWeight = weights[i];
    }
    console.log(weights[i], currentWeight, dayCounter, i);
  }
  return dayCounter;
}

let weight1 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
let M1 = 5;

let weight2 = [3, 2, 2, 4, 1, 4];
let M2 = 5;

let weight3 = [1, 2, 3, 1, 1];
let M3 = 4;

// console.log(sendOnBoat(weight1, M1)); //8
// console.log(sendOnBoat(weight2, M2)); // 6
console.log(sendOnBoat(weight3, M3)); // 3
