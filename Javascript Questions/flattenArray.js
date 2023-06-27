//
let stuffToFlatten = [[[1], 2], [3, 4]]


const flatten = (a) => {
  let results = []
  const flat = (arr) => {
    for (let ele of arr) {
      if (Array.isArray(ele)) flat(ele)
      else results.push(ele)
    }
  }
  flat(a)
  return results
}

const flattenReduce = (arr) => {
  return arr.reduce((acc, val) => {
    return Array.isArray(val) ? acc.concat(flattenReduce(val)) : acc.concat(val)
  }, [])
}


console.log(flattenReduce([[1, 2, 3], 4, [5, [6, 7]]]))



let flattenArray = (arr) => {
  return arr.reduce((accumulator, currentValue) => {
    return Array.isArray(currentValue) ? accumulator.concat(flattenArray(currentValue)) : accumulator.concat(currentValue)
  }, [])
}

console.log(flattenArray(stuffToFlatten))
