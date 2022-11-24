//using charAt
function letterCapitalize(str) {
  str = str.split(" ");
  for (i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() 
    + str[i].slice(1);
  }
  return str.join(" ");
}
console.log(letterCapitalize("hello world"));

//another method
function newLetterCapitalize(str) {
  str = str.split(" ");
  for (i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}
console.log(newLetterCapitalize("i ran there"));
