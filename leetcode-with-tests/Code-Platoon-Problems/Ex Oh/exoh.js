function StringChallenge(str) {
  // code goes here
  let xCounter = 0;
  let oCounter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      xCounter += 1;
    } else {
      oCounter += 1;
    }
  }
  return xCounter === oCounter;
}

// keep this function call here
console.log(StringChallenge(readline()));
