#find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

#For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

#You can modify the input array in-place.

input = [3,4,-1,1]
#input = [1,2,0]
#input = [1,1,3,5]
#input = [2,3,4,5,6,7,8,10]

def findInt(input):
  input.sort()
  print input
  smallest = 0
  for x in input:
    if x <= smallest and x > 0:
      smallest = x
  int = smallest+1
  while int in input:
    int += 1
  if int not in input:
    print int
   


findInt(input)
