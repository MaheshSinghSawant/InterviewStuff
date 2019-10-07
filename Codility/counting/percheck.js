// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  let [N, map] = [ Math.max(...A), {}]
  // create a map with all values from 1 to N have 1
  if(A.length < N) return 0
  for(let i = 1; i < N + 1; i++) map[i] = 1
  for(let ele of A) {
      map[ele]--
      if(map[ele] < 0) return 0
  }
  return 1
}
