#Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

#For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17

//Javascript solution
var list = [10, 15, 3, 7, 2,37,5,5,5,89]


function calc(k) {
for (var i = 0; i <= list.length;i++) {
  for (var j = 0; j<=list.length;j++){
    //console.log("i" + i + "= " + list[i]);
    //console.log("j" + j + "= " + list[j]);
  if ((list[j]+list[i] == k) && j!=i) {
    console.log("Match found: " + list[i] + "+" + list[j] + " = " + k )
    return
  }else{
  }
  }
}
}

calc(14);


#Python solution

list = [10, 15, 3, 7, 2]
k = 25
for x in list:
  for y in list:
    if (x + (y) == k) and (x!=y):
      print('Match found')
      break
    else:
      break