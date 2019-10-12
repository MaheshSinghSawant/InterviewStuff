let mergeSort = (arr) => {
  if(arr.length <= 1) return arr
  let mid = Math.floor((0,arr.length-1/2))
  let left = arr.slice(0, mid)
  let right = arr.slice(mid, arr.length)

  return merge(mergeSort(left), mergeSort(right))
}

let merge = (left, right) => {
  let results = []
  while(left.length || right.length) {
    if(left.length && right.length) {
      if(left[0] < right[0]) results.push(left.shift())
      else results.push(right.shift())
    } else {
      if(left.length) results.push(left.shift())
      else results.push(right.shift())
    }
  }

  return results
}

console.log(mergeSort([-1, -8, 20, 13]))