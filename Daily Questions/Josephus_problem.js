/*
This problem was asked by Bloomberg.

There are N prisoners standing in a circle, waiting to be executed. The executions are carried out starting with the kth person, and removing every successive kth person going clockwise until there is no one left.

Given N and k, write an algorithm to determine where a prisoner should stand in order to be the last survivor.

For example, if N = 5 and k = 2, the order of executions would be [2, 4, 1, 5, 3], so you should return 3.

Bonus: Find an O(log N) solution if k = 2.

*/

let giftSequence = (N, K) => {
  let arr = new Array(N)
  for(let i = 0; i < N; i++) arr[i] = i+1
  let nextPtrToGift = K - 1
  while(arr.length > 1) {
    arr.splice(nextPtrToGift, 1)
    nextPtrToGift = (nextPtrToGift + 2) % arr.length
    console.log(arr)
  }
  return arr[0]
}

giftSequence(5, 2)