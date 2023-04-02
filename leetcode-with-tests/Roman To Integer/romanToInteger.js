function romanToInt(romanNum) {
  let romanMap = new Map();

  romanMap.set("I", 1);
  romanMap.set("V", 5);
  romanMap.set("X", 10);
  romanMap.set("L", 50);
  romanMap.set("C", 100);
  romanMap.set("D", 500);
  romanMap.set("M", 1000);

  let romanInteger = 0;
  for (let i = 0; i < romanNum.length; i++) {
    // if current is less than next subtract current from the result
    if (romanMap.get(romanNum[i]) < romanMap.get(romanNum[i + 1])) {
      // subtract current from the result
      romanInteger -= romanMap.get(romanNum[i]);
      // otherwise
    } else {
      romanInteger += romanMap.get(romanNum[i]);
    }
  }
  return romanInteger;
}

let s1 = "III";
