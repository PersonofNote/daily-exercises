/*Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/

//Javascript

var arr =[1,2,3,4,5]
var newArr = []

//with division
function products(arr){
for (var i=0; i<arr.length;i++){
var product = 1;
for (var j = 0; j < arr.length; j++) {
  product *= arr[j];
}
 newArr.push(product/arr[i]);
}
console.log(newArr);
return newArr;
}


//without division
function productsWithoutdiv(arr){
for (var i=0; i<arr.length;i++){
var product = 1;
for (var j = 0; j < arr.length; j++) {
  if(arr[j]!=arr[i]) {
  product *= arr[j];
  }
}
 newArr.push(product);
}
console.log(newArr);
return newArr;
}

productsWithoutdiv(arr)

#Python

arr = [1,2,3,4,5]
newArr = []
newArrnoDiv=[]

#with division
for x in arr:
  product = 1
  for y in arr:
      product *= y
  newArr.append(product/x)
print(newArr)


#without division
for x in arr:
  product = 1
  for y in arr:
    if y != x:
      product *= y
  newArrnoDiv.append(product)
print(newArrnoDiv)