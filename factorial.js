let cache = {}
let factorial = (n) => {
  if(n < 2) return 1
  if(cache[n]) {
    return cache[n]
  }

  return cache[n] = n * factorial(n -1)
}

console.log(factorial(6))
