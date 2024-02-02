const findLongestWord = (words) => {
    let longestWord = "";
    for (let word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord;
  }
  
  console.log(findLongestWord(["Java", "Python", "JavaScript"])); // "JavaScript"
  console.log(findLongestWord(["football", "basketball", "tennis"])); // "basketball"
  console.log(findLongestWord(["sun", "moon", "stars"])); // "stars"

