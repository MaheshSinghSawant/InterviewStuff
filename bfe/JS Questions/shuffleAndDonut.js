//https://bigfrontend.dev/problem/can-you-shuffle-an-array


const shuffle = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    const otherIndex = Math.floor(Math.random() * (i + 1))
    if (otherIndex !== undefined) {
      [arr[i], arr[otherIndex]] = [arr[otherIndex], arr[i]]
    }
  }
  return arr
}

console.log(shuffle([1, 2, 3, 4]))
console.log(shuffle([1, 2, 3, 4]))
console.log(shuffle([1, 2, 3, 4]))
console.log(shuffle([1, 2, 3, 4]))
console.log(shuffle([1, 2, 3, 4]))


const donutter = (arr) => {
  let output = []

  while(arr.length >= 2)  {
    let first =  Math.floor(Math.random() * arr.length)
    let item1 = arr[first]
    arr.splice(first, 1)
    let second = Math.floor(Math.random() * arr.length)
    let item2 = arr[second]
    arr.splice(second, 1)
    output.push([item1, item2])
  }

  if(arr.length === 1) {
    output.push([arr[0]])
    arr.splice(0,1)
  }
  return output
}


console.log(donutter([1, 2, 3, 4, "cat", "dog", "parrot"]))