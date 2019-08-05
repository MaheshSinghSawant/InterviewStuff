// https://medium.com/employbl/implement-linear-and-binary-search-algorithms-with-javascript-2149997588f0

function binarySearch(arr, val){
  
  let min = 0
  let max = arr.length - 1
  let middle = Math.floor((min + max)/2)
  
  
  while(min <= max) {
      middle = Math.floor((min + max)/2)
      

      if(val > arr[middle]) {
          min = middle + 1
      } else if(val < arr[middle]) {
          max = middle - 1
      } else {
          return middle
      }
   }
     return -1
}