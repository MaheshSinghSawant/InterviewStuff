const maxDiff = (arr) => {
  // assume max diff to be difference between first two elements
  let maxDiff = Math.abs(arr[1] - arr[0])
  //assume first element to be the min element
  let minElement = arr[0]

  // loop through 1 to n and check difference between arr[i] and minEle is > maxDiff 

  // also check if the current element is minium, if so update min_element

  for(let i = 1; i < arr.length; i++) {
    if(Math.abs(arr[i] - minElement) > maxDiff) {
      maxDiff = Math.abs(arr[i] - minElement)
    }
    if(arr[i] < minElement) {
      minElement = arr[i]
    }
  }

  return maxDiff
}

console.log(maxDiff([35,2,6,115,9,10,33]))