//
let stuffToFlatten = [[[1], 2], [3, 4]]
// let flattenArray = (arr) => {
//   return arr.reduce((accumulator, currentValue) => {
//       let toFlatten = Array.isArray(currentValue) ? flattenArray(currentValue) : currentValue
//       return accumulator.concat(toFlatten)
//   }, [])
// }

// let normalFlatten = (arr) => {
//   return [].concat(...arr)
// }







// console.log([].concat(...stuffToFlatten))



let flattenArray = (arr) => {
  return arr.reduce((accumulator, currentValue) => {
    return Array.isArray(currentValue) ? accumulator.concat(flattenArray(currentValue)) : accumulator.concat(currentValue)
  }, [])
}

console.log(flattenArray(stuffToFlatten))