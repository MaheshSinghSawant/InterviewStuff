function solution(A) {
  if(A.length === 1) return Math.abs(A[0])
  if(A.length === 2) return Math.abs(A[1] - A[0])
  
  
  // calculate sum of all
  let total = A.reduce((a, v) => a + v, 0)
  // go left to right and increment the left sum while decrement the total sum with val at index
  
  let [lSum, minDiff] = [0, Infinity]
  
  for(let i = 0 ; i < A.length -1; i++) {
      lSum += A[i]
      total -= A[i]
      console.log(Math.abs(total - lSum))
      minDiff = Math.min(minDiff, Math.abs(total - lSum))
  }
  
  return minDiff
}

console.log(solution([-10, -20, -30, -40, 100]))

/*
A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.

Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].

The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

In other words, it is the absolute difference between the sum of the first part and the sum of the second part.

For example, consider array A such that:

  A[0] = -10
  A[1] = -20
  A[2] = -30
  A[3] = -40
  A[4] = 100
We can split this tape in four places:

P = 1, difference = |-10 − 10| = 20
P = 2, difference = |-30 − 30| = 60
P = 3, difference = |-60 − 60| = 120
P = 4, difference = |-100 − 100| = 200
Write a function:

function solution(A);

that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.

For example, given:

  A[0] = 3
  A[1] = 1
  A[2] = 2
  A[3] = 4
  A[4] = 3
the function should return 1, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [2..100,000];
each element of array A is an integer within the range [−1,000..1,000].
Copyright 2009–2019 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or discl
*/