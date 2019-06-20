let sortInts = (arr) => {
  return arr.sort((a, b) => {
    return a - b
  })
}

console.log(sortInts([1, 2, 10, 9, -1 , -11]))