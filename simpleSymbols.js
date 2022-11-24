function simpleSymbols(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (i = 0; i < str.length; i++) {
    if (alphabet.indexOf(str[i]) !== -1) {
      if (str[i - 1] + str[i + 1] === "++") {
        return true;
      } else {
        return false;
      }
    }
  }
}
console.log(simpleSymbols("+d+=3=+s+"));


//using regex
const forSimpleSymbols = (str) => {
  //break the array into strings
  str = str.split("");
  let newWord = [];
  str.forEach((symbol) => {
    //checking for alphabet and search for a search match
    if (/[a-zA-Z]/.test(symbol)) {
      if (
        str[str.indexOf(symbol) - 1] === "+" &&
        str[str.indexOf(symbol) + 1] === "+"
      ) {
        newWord.push(1);
      } else {
        newWord.push(0);
      }
    }
  });
//checking if one string is found within another 
  if (newWord.includes(0)) {
    return false;
  } else {
    return true;
  }
};
console.log(forSimpleSymbols("f++d+"));
