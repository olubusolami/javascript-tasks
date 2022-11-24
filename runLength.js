function runLength(str) {
  let n = 0,
    newStr = "",
    data = str[0];

  for (let i = 0; i < str.length; i++) {
    if (str[i] == data) {
      n++;
    } else {
      newStr += n + data;
      data = str[i];
      n = 1;
    }
  }

  newStr += n + data;
  return newStr;
}

console.log(runLength("wwwbbbw"));
