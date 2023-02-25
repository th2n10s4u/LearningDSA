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
/*<===========================================================================>
<=============================================================================>
<=======================ULTIMATE VALIDATOR COMPLETE!==========================>
<=============================================================================>
<===========================================================================>*/

/*
const vs let vs var 
variable data types: numbers, string, bools, arrays, objects
object: 
key, value data structure

conditionals: if/else 
for loops
while loops 

functions 
optionally take input 
does something/anything 
optionally outputs something 

const users = [
  {
    firstName: string 
    lastName: string 
    email: string
    age: number 
  }, {
    firstName: string 
    lastName: string 
    email: string
    age: number 
  }
]

list of users: 
return the count of how many users have firstName shorter than 5 letter. 
return the count of how many users have lastName longer than 5 letter. 
return the count of how many users have email ending with @gmail.com . 
return the count of how many users are older than 21

*/

const users = [
  {
    firstName: "Zac",
    lastName: "Montgomery",
    email: "anemail@gmail.com",
    age: 33,
  },

  {
    firstName: "Anthony",
    lastName: "Zee",
    email: "anotheremail@yahoo.com",
    age: 22,
  },

  {
    firstName: "Br",
    lastName: "Buck",
    email: "athirdemail@gmail.com",
    age: 22,
  },
  {
    firstName: "Tim",
    lastName: "Triston",
    email: "numberfour@gmail.com",
    age: 22,
  },
  {
    firstName: "Phillip",
    lastName: "Hambelton",
    email: "thisis5@hotmail.com",
    age: 22,
  },
  {
    firstName: "billy",
    lastName: "Bobcat",
    email: "finallylastone@gmail.com",
    age: 22,
  },
];

//=========================================>
//==========First Name Less Than 5=========>
//=========================================>

// for loop method
function firstNameShorterThan5(users) {
  let count = 0;
  for (let i = 0; i < users.length; i++) {
    if (users[i].firstName.length < 5) {
      count += 1;
    }
  }
  return `There are ${count} first names shorter than 5`;
}

/*
// .filter() method
function firstNameShorterThan5(users) {
  const filteredUsers = users.filter(({firstName}) => firstName.length < 5);
  return `There are ${filteredUsers.length} first names shorter than 5`;
}
*/

/* 
let firstNameMap = users.map(fName => fName.firstName);
//firstnNameMap creates an array of firstNames 
let count = 0; 
//sets the count to 0

function firstNameShorterThan5(arr) { 
  // creates a function that is supposed to take in the arr firstNameMap
  for (let i = 0; i < firstNameMap.length; i++) {
    // loops through firstNameMap.length
    if (firstNameMap[i].length < 5)  {
      // if the elements in the array are less than 5
      count = count + 1; 
      // add 1 to count
    }
  } 
  // return count outside the scope of the loop
  return `There are ${count} firstName's less than 5`;
}

// console.log(firstNameShorterThan5(firstNameMap));
*/

//=========================================>
//==========Last Name More Than 5==========>
//=========================================>

// for loop method
function lastNameLongerThan5(users) {
  let count = 0;
  for (let i = 0; i < users.length; i++) {
    if (users[i].lastName.length > 5) {
      count += 1;
    }
  }
  return `There are ${count} last names longer than 5`;
}

/*
// .filter() method
function lastNameLongerThan5(users) {
  const usersFiltered = users.filter(({ lastName }) => lastName.length >= 5);
  return `There are ${usersFiltered.length} last names longer than 5`;
}
*/

/*let lastNameMap = users.map(lName => lName.lastName);
// console.log(lastNameMap)

function lastNameLongerThan5(arr) {
let count = 0 
for (let i = 0; i < lastNameMap.length; i++) {
if (lastNameMap[i].length > 5) { 
  count += 1; 
}
}
return `There are ${count} last names's greater than 5`;
}
// console.log(lastNameLongerThan5(lastNameMap));
*/

//=========================================>
//========Count of gmail accounts==========>
//=========================================>

//for loop method
function emailIsGmail(users) {
  let count = 0;
  for (let i = 0; i < users.length; i++) {
    if (users[i].email.endsWith("gmail.com")) {
      count += 1;
    }
  }
  return `There are ${count} gmail accounts`;
}

/*
// .filter() method
function emailIsGmail(users) {
  const emailFilter = users.filter(({email}) => email.endsWith("gmail.com"));
  return `There are ${emailFilter.length} gmail accounts`;
}
*/

/*
// console.log(emailMap);

function emailIsGmail(arr) {
  
  let count = 0; 
  for (let i = 0; i < arr.length; i++) {
    if (emailMap[i].includes("gmail.com")) {
      count += 1; 
    }
  }
  return `There are ${count} gmail accounts`
}
// console.log(emailIsGmail(emailMap));
*/
//=========================================>
//=============Older than 21===============>
//=========================================>

//for loop method
function olderThan21(users) {
  let count = 0;
  for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 21) {
      count += 1;
    }
  }
  return `There are ${count} people over the age of 21`;
}

/*
// .filter() method
function olderThan21(users) {
  const usersThatAreOlder = users.filter(({ age }) => age >= 21);
  return `There are ${usersThatAreOlder.length} over the age of 21`;
};
*/

// const ageMap = users.map(ageOfIndividual => ageOfIndividual.age);
// // console.log(ageMap);

// function olderThan21(arr) {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (ageMap[i] > 21) {
//       count += 1;
//     }
//   }
//   return `There are ${count} who are 21 or older`
// }
// // console.log(olderThan21(ageMap));

function ultimateObjectValidator(arr) {
  console.log(firstNameShorterThan5(users));
  console.log(lastNameLongerThan5(users));
  console.log(emailIsGmail(users));
  console.log(olderThan21(users));
}
console.log(ultimateObjectValidator(users));

//=========================================>
//========Create Ends With function========>
//=========================================>

/**
 * Create a function
 * the function takes a String
 * takes in a phrase
 * checks the phrases length
 * compares the phrase to the final index of the string by looping through the array backwards
 */

//=========================================>
//========Print the index "@" is located===>
//=========================================>

function wheresAt(emailAddress) {
  for (let i = 0; i < emailAddress.length; i++) {
    if (emailAddress[i] === "@") {
      return `The index is ${i}`;
    }
  }
  return false;
}
