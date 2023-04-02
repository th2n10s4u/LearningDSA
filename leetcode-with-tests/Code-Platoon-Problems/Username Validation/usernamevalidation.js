function SearchingChallenge(str) {
  if (str.length < 4 || str.length > 25) {
    return "false";
  }
  //str[0] doesn't begin with a letter return false
  if (!str[0].match(/[a-zA-Z]/)) {
    return "false";
  }
  //str[1] - str[str.length-1] is a letter,number or underscore
  for (let elemOfStr = 1; elemOfStr <= str.length - 1; elemOfStr++) {
    if (str.match([/^[a-zA-Z0-9_]+$/])) {
      // This one is really tricky. When I put if(!str.match[/^[a-zA-Z0-9_]+$/]) it returns false no matter what.
      return "false";
    }
  }
  //last character = _ return false
  if (str[str.length - 1] === "_") {
    return "false";
  }
  return "true";
}

// keep this function call here
console.log(SearchingChallenge(readline()));
