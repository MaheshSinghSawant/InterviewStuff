function isEquals(arr1, arr2) {
  if(!Array.isArray(arr1) || !Array.isArray(arr2)) return false
  if(arr1.length !== arr2.length) return false
  for(let i = 0; i < arr1.length; i++) {
    if(Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      return isEquals(arr1[i], arr2[i])
    } else if(arr1[i] !== arr2[i]) return false
  }

  return true
}





console.log(isEquals([1,2,3], [1,2, 3]))