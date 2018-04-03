function LongestWord(sen) {
    longSen = {};
    words = sen.split(" ");
    var longest = 0;
    var longestIndex = 0;
    for (let i = 0; i < words.length; i++) {
      var length = 0;
      letters = words[i].split('');
        for (let j=0; j < letters.length; j++) {
          if (isLetter(letters[j]) !== null) {
            length ++;
      }
      if (words[i].length > longest)
        {
          longest = words[i];
          longestIndex = i;
        }
        longSen[i] = words[i].length;
      //console.log(words[i]);
      console.log(longest + " at " + longestIndex + " is longest");
      }
      console.log(longSen);
}
  // code goes here  
  return sen; 
}

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}
  
// keep this function call here 
//LongestWord(readline());                            

get = LongestWord("a world, how are you?");