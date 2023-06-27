// write a fibonacci sequence with memoization
// https://leetcode.com/problems/fibonacci-number/

// Recurisive is just without the cache


let cache = {}

let fibonacci = (n) => {
  if (n === 0 || n === 1) {
    return n
  }

  if (cache[n]) {
    return cache[n]
  }

  return cache[n] = fibonacci(n - 1) + fibonacci(n - 2)
}
