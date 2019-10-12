function findPairsWithGivenDifference(arr, k) {
  /* create a map such that:
  {
     x - k : y
  }
  */
  let output = []
  let map = {}
  for(let i = 0; i < arr.length; i++) {
    // x - k = y
    map[arr[i] -  k] = arr[i]
  }
  console.log(map)
  for(let i = 0; i < arr.length; i++) {
    if(typeof map[arr[i]] !== 'undefined') {
      output.push([map[arr[i]], arr[i]])
    }
  }
  
  return output
}

console.log(findPairsWithGivenDifference([0, -1, -2, 2, 1], 1))