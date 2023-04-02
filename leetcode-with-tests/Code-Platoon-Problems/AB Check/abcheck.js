function StringChallenge(str) {
  // code goes here

  // OOOOOHHHH I get it!
  // It took me a few attempts because I misread the requirements.
  for (let i = 0; i < str.length; i++) {
    if (
      (str[i] === "a" && str[i + 4] === "b") ||
      (str[i] === "b" && str[i + 4] === "a")
    ) {
      return true;
    }
  }
  return false;
}
