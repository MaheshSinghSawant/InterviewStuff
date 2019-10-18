
var people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

const map2 = people.reduce((acc, v) => {
  if(!acc[v.age]) {
    acc[v.age] = []
  }
  acc[v.age].push({
    ...v
  })

  return acc

}, {})

console.log(map2)



// map using reduce 
Array.prototype.myMap = function(fn) {
  let arr = this
  let newArr = arr.reduce(function(acc, v, id) {
    acc = acc.concat(fn(v, id))
    return acc
  }, [])

  return newArr
}


console.log([1,2,3].map((ele, id) => ele = ele + id))
console.log([1,2,3].myMap((ele, id) => ele = ele + id))