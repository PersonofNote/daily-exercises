function LongestWord(sen) { 
    sen = sen.split(" ");
    var longest = 0;
    for (let i = 0; i < sen.length; i++) {
      var length = 0;
      letters = sen[i].split('');
        for (let j=0; j < letters.length; j++) {
          if (isLetter(letters[j]) !== null) {
            length ++
        console.log(letters[j] + " is a letter");
      }
      sen[i] = length;
      if (sen[i] > longest)
        {
          longest = sen[i];
        }
      console.log(sen[i]);
      console.log(longest + "is longest");
      }
}
  // code goes here  
  return sen; 
}

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}
  
// keep this function call here 
//LongestWord(readline());                            

get = LongestWord("Hello world, how are you?");