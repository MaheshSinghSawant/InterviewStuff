let arrayDeepEqual = (arr1, arr2) => {
  if(!(arr1 instanceof Array && arr2 instanceof Array)) return false
  if(arr1.length !== arr2.length) return false
  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] instanceof Array) {
      return arrayDeepEqual(arr1[i], arr2[i])
    } else {
      if(arr1[i] !== arr2[i]) return false
    }
  }
  return true
}

console.log(arrayDeepEqual([1,2,3, [4,5]], [1,2,3,[4,5]]))