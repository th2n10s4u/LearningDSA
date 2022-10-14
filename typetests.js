
"use strict";


export function typetests() {

   // Primitive Types
   //   a. The variable of a primitive type is the memory location where its value is stored
   //   b. Javascript primitive types are:
   //       1. number - either integer or real (float)
   //       2. boolean
   //       3. string
   //       4. BigInt - - special case
   //       5. null - special case
   //       6. undefined - special case
   //   c. typeof() operator can be used to determine the type of a variable
   
    console.log("-----------------------------");
    console.log("Number: integer");
    console.log("-----------------------------");
    const zero = 0;
    let num1 = zero;
    let num2 = num1;
    console.log(`Initial        : zero = ${zero},      num1 = ${num1},         num2 = ${num2}`);
    num1 = 1;
    console.log(`Modified num1  : zero = ${zero},      num1 = ${num1},         num2 = ${num2}`);

    console.log("-----------------------------");
    console.log("Number: float");
    console.log("-----------------------------");
    const PI = 3.1415;
    let numPI = PI;
    let numPI2 = numPI;
    console.log(`Initial        : PI = ${PI},   numPI = ${numPI},   numPI2 = ${numPI2}`);
    numPI = 2.79;
    console.log(`Modified numPI : PI = ${PI},   numPI = ${numPI},     numPI2 = ${numPI2}`);

    console.log("-----------------------------");
    console.log("Boolean");
    console.log("-----------------------------");
    const bool1 = true;
    let bool2 = bool1;
    let bool3 = bool2;
    console.log(`Initial        : bool1 = ${bool1},  bool2 = ${bool2},     bool3 = ${bool3}`);
    bool2 = false;
    console.log(`Modified bool1 : bool1 = ${bool1},  bool2 = ${bool2},    bool3 = ${bool3}`);
 
    console.log("-----------------------------"); 
    console.log("String");
    console.log("-----------------------------");
    const Tim = "Tim";
    let name1 = Tim;
    let name2 = name1;
    console.log(`Initial        : Tim = ${Tim},     name1 = ${name1},      name2 = ${name2}`);
    name1 = "Evelyn";
    console.log(`Modified name1 : Tim = ${Tim},     name1 = ${name1},   name2 = ${name2}`);
    
    // Complex Types
    // a. the variable of a complex type points to the memory location of the 'object' 
    //    that contains the value(s) of the variable
    //    o assigning the variable (var1) to another variable (var2), eg. var2 = var1;
    //      merge points var2 to the memory location of the object of var1; it does not 
    //      copy the contents (values) of the var1 object into a new var2 object.
    //      if you want to make a copy, you must use a predefined method of one of the predefined complex types
    //      or write your own method (function) to make the copy
    // b. Javascript has a number of predefine Complex types:
    //      1. Arrays
    //      2. Map (& WeakMap)
    //      3. Set (& WeakSet)
    // c. Developer/Coder/Programmer may define their own object (complex types)

    console.log("-----------------------------");
    console.log("Array");
    console.log("-----------------------------");
    const odd = [1, 3, 5, 7, 9];
    let arr1 = odd
    let arr2 = arr1;
    let arr3 = [...arr1];
    console.log(`Initial        : arr1 = ${arr1},        arr2 = ${arr2},        arr3 = ${arr3}`);
    arr1.push(11);
    console.log(`Modified arr1  : arr1 = ${arr1},     arr2 = ${arr2},     arr3 = ${arr3}`);
    
}

