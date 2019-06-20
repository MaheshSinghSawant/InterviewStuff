let getMin = (arr) => {
  return arr.reduce((acctumulator, currentValue) => {
    return Math.min(acctumulator, currentValue)
  }, 0)
}

console.log(getMin([1, 2, -1, 100]))

console.log(Math.min.apply(null, [1, 2, -1, 100]))