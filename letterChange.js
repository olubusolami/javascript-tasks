
function LetterChanges(str) {
    let newStr = "";
    const vowel = ["a", "e", "i", "o", "u"];
  
    for (let i = 0; i < str.length; i++) {
      const alphabet = str.charCodeAt(i) + 1;
      newStr += String.fromCharCode(alphabet);
    }
    console.log("Before converting vowels :" + newStr);
    let neword = "";
  
    for (i = 0; i < newStr.length; i++) {
      const strng = newStr[i];
      if (vowel.includes(strng)) {
        neword += strng.toUpperCase();
      } else {
        neword += strng;
      }
    };
  console.log("After converting vowels :" + neword);
  }
  LetterChanges("hello*3");


