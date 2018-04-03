function LongestWord(sen) { 
    sen = sen.split(" ");
    for (let i = 0; i < sen.length; i++) {
      sen[i] = sen[i].replace(/[^\w\s]|_/g, "");
      sen[i] = sen[i].replace(/\s+/g, " ");
      console.log(sen[i].length);
    }
     var longest = sen[0];
     for (let i = 0; i < sen.length; i++) {
      if (sen[i].length > longest.length) {
        longest = sen[i];
        //how to handle equal?
      }
      }
  sen = longest
  return sen; 
}
get = LongestWord("four fawn fall");
