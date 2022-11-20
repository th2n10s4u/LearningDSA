/*
create a function: 
  it has 2 parameter - user 1 (r, p, s) and user 2 (r, p, s)
  determine whether user 1 or user 2 wins
paper beats rock 
rock beats scissors
scissors beats paper

"rock" "paper" "scissors"

"r" "p" "s"
  */

// const rps = (p1, p2) => {

//   let playerOneWins = "player 1 wins"
//   let playerTwoWins = "player 2 wins"

//   if (p1 === "rock" && p2 === "scissors") {
//     return playerOneWins;
//   } else if (p1 === "scissors" &&  p2 === "paper") {
//     return playerOneWins;
//   } else if (p1 === "paper" && p2 ==="rock") {
//     return playerOneWins;
//   }

//   if (p1 === 'r'){
//     if (p2 === 'r'){
//       // tie
//     }
//     if (p2 === 's'){
//       // p1 wins
//     }
//     if (p2 === 'p'){
//       // p2 wins
//     }
//   }

//   else if (p1 === 's'){
//     if (p2 === 'r'){}
//     if (p2 === 's'){}
//     if (p2 === 'p'){}
//   }

//   else if (p1 === 'p'){
//     if (p2 === 'r'){}
//     if (p2 === 's'){}
//     if (p2 === 'p'){}
//   }
// }

/*
password validator function:
1. password must be at least 8 characters long
2. password cannot be more than 12 characters
3. password must contain at least 1 special character
4. password must contain a number
-- DONE
-- NOT DONE
5. must contain at least 1 lowercase character
6. must constain at least 1 uppercase character 
7. no 2 adjacent items can be ===

   - !, @

   "abc".includes("a") => true 
   "abc".includes("z") => false 
*/

function validateLength(string) {
  if (string.length >= 8 && string.length <= 12) {
    return true;
  }
  return false;
}

function validateSpecialChars(string) {
  // for (let idx = 0; idx < string.length; idx++) {tr
  //   const char = string[idx];
  // }
  for (let char of string) {
    if (char === "!" || char === "@") {
      return true;
    }
  }
  return false;
}

/**
    boolean vs. truthy and falsey values 
  
    boolean: true / false 
  
    truthy values: 
    true
    1
    "1"
    [] 
    {} 
    -1
  
    falsey values: 
    false 
    0 
    ""
    undefined
    null
    NaN
  
  
   */

function validateNum(string) {
  for (let char of string) {
    const numChar = parseInt(char);
    // numChar is either 0, 1, 2, .. 9 OR NaN
    if (char === "0" || numChar) {
      return true;
    }
  }
  return false;
}

// `${i}`
// String(i)
// "" + i

// function validateNum2(string){
//   for (let char of string) {

//     // check if char === "0", "1", "2", "3"..., "9"
//     for (let i = 0; i <= 9; i++) {
//       const numString = "" + i;
//       if (char === i) {
//         return true;
//       }
//     }
//   }
//     return false;
// }

/* Doesn't Work
  function hasLowerCase(string) { 
  //   for (let char of string) {
  //     if (char === char.toLowerCase()) { 
  //       return true;
  //     }
  //     return false;
  //   }
  // }
  */

/* Doesn't work
  function hasLowerCase(string) {
    for (let i=0; i<=string.length; i++) {
      if (string[i] === string.toLowerCase) {
        return true; 
      }
    } return false;
  }
  */
/* Doesn't work
  function hasLowerCase(string) {
    for (let char of string) {
      if (char === char.isInteger()) {
        continue;
      }
      if (char === char.toLowerCase()) {
        return true;
      }
    } return false;
  }
  */

/** doesn't work  
  function hasUpperCase(string) {
    for (let char of string) {
     if (char === Number.isInteger(char)) {
     char++; {
     if (char === char.toUpperCase()) {
      return true;
     }
    }
    } return false;
   }
  }
  */

/* doesn't work
  function hasUpperCase(string) {
    for (let char of string) {
      if (char === char.toUpperCase()) {
        return true;
      }
    } return false;
  }
  */

/*
  function hasUpperCase(string) {
    for (let Number of string) {
      for (let char of string) 
      if (Number === Number.isInteger(string)) {
        continue;
      }
        if (char === char.toUpperCase()) {
          return true;
        }
      } return false;
    }
  */

/* Doesn't work
  function noAdjacentDuplicates(string) {
    for (let i = 0; i <= string.length; i++) {
        if (string[i] === string[i+1]) { 
          return false; 
        }
        return true;
      }
    } 
    */

function ultimateValidator(string) {
  if (
    validateLength(string) &&
    validateSpecialChars(string) &&
    validateNum(string) &&
    hasLowerCase(string) &&
    hasUpperCase(string)
  ) {
    return true;
  }
  return false;
}

// console.log(hasUpperCase("abb"))
console.log(noAdjacentDuplicates("abb"));
// console.log(noAdjacentDuplicates("bcc"))

// console.log(ultimateValidator("Abcdefg!1")) // perfect password
// console.log(ultimateValidator("Abcdefg11")) //doesn't have special character
// console.log(ultimateValidator("Abcdefg!!")) //doesn't have number
// console.log(ultimateValidator("ABCDEFG!1")) //doesn't have lowercase
// console.log(ultimateValidator("abcdefg!1")) //doesn't have uppercase
