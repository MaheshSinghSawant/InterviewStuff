// let sampleArr = [1, 2, 3, 4].filter((num) => {
//   return num % 2 === 0
// })


Array.prototype.mFilter = function(fn) {
  let results = []
  console.log(this)
  for(let i = 0; i < this.length; i++) {
    if(fn(this[i])) {
      results.push(this[i])
    }
  }
  return results
}

myFn = (num) => {
  return num % 2 === 0
}

console.log([1, 2, 3, 4].mFilter(myFn))