function LongestWord(sen) { 
    sen = sen.split(" ");
    let longest = 0;
    for (let i = 0; i < sen.length; i++) {
      console.log(sen[i].length);
      if (sen[i].length > longest) {
        console.log(sen[i].length + "is longer than" + longest);
        longest = sen[i].length;
      }
      }
  //console.log(longest + " is the longest word.")
  // code goes here  
  return sen; 
}

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}
  
// keep this function call here 
//LongestWord(readline());                            

get = LongestWord("a world, how are you acclimating?");