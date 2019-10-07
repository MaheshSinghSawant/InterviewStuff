let binarySearch = (arr,val) => {
  let [min, max] = [0, arr.length-1]

  while(min <= max) {
    let mid = Math.floor((min+max)/2)
    
    if(val > arr[mid]) min = mid + 1
    else if(val < arr[mid]) max = mid - 1 
    else return mid
  }
  return -1
}

// console.log(binarySearch([1, 9, 21, 33, 51], 51))


let binarySearchRecursive = (arr, val) => {
  let bs = (min=0, max=arr.length-1) => {
    if(min > max) return -1
    let mid = Math.floor((min+max)/2)
    if(val > arr[mid]) bs(mid + 1, max)
    else if(val < arr[mid]) bs(min, mid - 1)
    else return mid
  }
  bs()
}

console.log(binarySearch([1, 9, 21, 33, 51], 7))