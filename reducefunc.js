Array.prototype.mReduce = function(reducerFunc, accumulator = 0) {
  for (let i of this) {
    accumulator = reducerFunc(accumulator, i);
  }

  return accumulator;
}

let reducer = (accumulator, currentValue) => {
  return accumulator + currentValue
}

console.log([1, 2, 3].mReduce(reducer, 10))
