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
