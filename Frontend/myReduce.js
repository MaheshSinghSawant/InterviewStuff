// create your own reducer function

Array.prototype.myReduce = function(fn, initialVal) {
  let arr = this
  let acc = initialVal
  if(typeof initialVal === 'undefined') {
    acc = arr[0]
  }
  for(let i = 0; i < arr.length; i++) {
    acc = fn(acc, arr[i])
  }

  return acc
}


let a =[1,2,3]
console.log(a.myReduce((acc, v) => acc.concat(v*2), []))