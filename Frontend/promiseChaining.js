let firstMethod = function() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log('firstFunciton done!')
      resolve({data: '123'})
    }, 500)
  })
}

let secondMethod = function(someDataFromFirstResolve) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log('second one done')
      resolve({data : someDataFromFirstResolve.data + '456'})
    }, 1000)
  })
}

let thirdMethod = function(someDataFromSecondResolve) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log('third done')
      resolve({data: someDataFromSecondResolve.data + '789'})
    }, 500)
  })
}


firstMethod()
.then((result1) => {
  console.log(secondMethod)
  secondMethod(result1)
})
.then((result2) => thirdMethod(result2))
.then((finalResult) => console.log(finalResult))