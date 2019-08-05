// count uque values in sorted array of numbers


// maintain a slow and a fast counter which starts at 0 and 1 respectively

// increment fast till the end of the arr
// increment slow if element at slow and fast index dont match
// also in this new slow position, set the value of the element that slow index to be the value at the current fast index
// this way we can still compare the next fast element with the very previous fast element (which is now at the slow index)

// return slow + 1 as arrays start at 0 and we actually will have all unique elements till slow pointer

function countUniqueValues(arr){
  // adding array as  input and defining slow and fast pointers
  
  let slow = 0
  let fast = 0
  
  if(arr.length === 0) return 0
  
  while(fast < arr.length) {
      if(arr[slow] === arr[fast]) {
          fast++
      } else {
          slow++
          arr[slow] = arr[fast]
          fast++
      }
  }
  return slow + 1
  
}