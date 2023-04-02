export function longestCommonPrefix(strs) {
  let firstWord = strs[0];
  let commonPrefix = "";

  if (strs.length === 0) {
    return commonPrefix;
  }

  for (let j = 0; j < firstWord.length; j++) {
    let letterOfFirstWord = firstWord[j];

    for (let i = 1; i < strs.length; i++) {
      let currentWord = strs[i];
      let letterOfCurrentWord = currentWord[j];
      if (letterOfCurrentWord != letterOfFirstWord) {
        return commonPrefix;
      }
    }
    commonPrefix += letterOfFirstWord;
    console.log(commonPrefix);
  }
  return commonPrefix;
}

export function longestCommonPrefixTests() {
  let tests1 = ["flower", "flow", "flight", "flavor", "flux"];
  let tests2 = ["train", "tractor", "trax", "trampoline", "traffic"];
  longestCommonPrefix(tests1);
  longestCommonPrefix(tests2);
}
