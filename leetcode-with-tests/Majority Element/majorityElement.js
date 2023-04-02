// Brute Force
function mostElements(arr) {
  let half = arr.length / 2;

  for (let i = 0; i < arr.length; i++) {
    let counter = 1;
    let stored = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        counter++;
        stored = arr[i];
      }
    }
    if (counter > half) {
      return stored;
    }
  }
}
let nums1 = [3, 2, 3];
let nums2 = [2, 2, 1, 1, 1, 2, 2];
let nums3 = [1];
console.log(mostElements(nums1));
console.log(mostElements(nums2));
console.log(mostElements(nums3));

/////////////////

// Solved using map
function majorityElement(nums) {
  let countsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (countsMap.has(nums[i])) {
      let prevCount = countsMaps.get(nums[i]);
      let newCount = prevCount++;
      countsMap.set(nums[i], newCount);
    } else {
      let newCount = 1;
      countsMap.set(nums[i], newCount);
    }
  }

  let M;
  countsMap.forEach(function (value, key) {
    if (value > nums.length / 2) {
      M = key;
    }
  });
  return M;
}

num1 = [3, 2, 3];
num2 = [2, 2, 1, 1, 1, 2, 2];
num3 = [1];

console.log(majorityElement(num1));
console.log(majorityElement(num2));
console.log(majorityElement(num3));
