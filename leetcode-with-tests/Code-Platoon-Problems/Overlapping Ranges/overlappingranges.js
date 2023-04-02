function ArrayChallenge(arr) {
  let newArr = [];
  let x = arr[4];

  for (let i = arr[0]; i <= arr[1]; i++) {
    newArr.push(i);
  }
  for (let j = arr[2]; j <= arr[3]; j++) {
    newArr.push(j);
  }

  let counter = 0;
  newArr = newArr.sort((a, b) => a - b);
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === newArr[i + 1]) {
      counter += 1;
    }
  }

  // console.log("arr:",arr,"newArr:",newArr,"newArr:",newArr,"counter:", counter,"x:",x);
  if (counter >= x) {
    return true;
  } else {
    return false;
  }
}
