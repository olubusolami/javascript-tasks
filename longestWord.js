//reduce method
function findLongestWord(sen) {
  const longestWord = sen
    .split(" ")
    .reduce(function (newLongestWord, currentWord) {
      if (currentWord.length - newLongestWord.length) return currentWord;
      else return newLongestWord;
    }, 
    );
  
  return longestWord;
}
console.log(findLongestWord("fun&!! time"));

console.log(typeof(function() {
    
}))

//sort method
// function findLongestWord(sen) {
//     const longestWord = sen
//       .split(" ")
//       .sort(function (newLongestWord, currentWord) {
//         if (currentWord.length - newLongestWord.length) return currentWord;
//         else return newLongestWord;
//       });
    
//     return longestWord[0];
//   }
//   console.log(findLongestWord("fun&!! time"));