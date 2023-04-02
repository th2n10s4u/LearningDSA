function reverseString(S) {
  let R = "";
  if (!S.length) {
    return "nothing to reverse";
  }
  for (let i = S.length - 1; i >= 0; i--) {
    R += S[i];
  }
  return R;
}

let S1 = "Ramesh";
let S2 = "E";
let S3 = "";

console.log(reverseString(S1));
console.log(reverseString(S2));
console.log(reverseString(S3));
