//sort method
function findLongestWord(sen) {
  return (
    sen
      //to remove punctuation
      .replace(/[^\w ]/g, "")
      //make it an array
      .split(" ")
      .sort(function (currentWord, newLongestWord) {
        return currentWord.length - newLongestWord.length;
      })
      .pop()
  );
}

console.log(findLongestWord("fun&!! time"));
