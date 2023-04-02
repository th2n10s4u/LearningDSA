function palindrome(x) {
  if (!x.length) {
    return false;
  }

  for (let frontIndex = 0; frontIndex < x.length / 2; frontIndex++) {
    let rearIndex = x.length - frontIndex - 1;

    if (x[frontIndex] !== x[rearIndex]) {
      return false;
    }
  }
  return true;
}

let example1 = [1, 2, 1, 2, 1];
let example2 = 10;
let example3 = {};
let example4 = "the fox";
let example5 = "racecar";

console.log(palindrome(example1));
console.log(palindrome(example2));
console.log(palindrome(example3));
console.log(palindrome(example4));
console.log(palindrome(example5));
