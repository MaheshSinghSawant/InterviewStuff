/*
  Write a function: function solution(A); 
  that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

  For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

  Given A = [1, 2, 3], the function should return 4.

  Given A = [−1, −3], the function should return 1.

  Write an efficient algorithm for the following assumptions:

  N is an integer within the range [1..100,000];
  each element of array A is an integer within the range [−1,000,000..1,000,000].
*/

function solution(A) {
  // find if A has 1, if so return 1
  let containsOne = false
  for(let ele of A) if(ele === 1) containsOne = true
  if(!containsOne) return 1
  
  // if one [1] in arr, return two
  if(A.length === 1) return 2
  
  // change every negative, 0 and number greater than A.length to 1 so we can use the index approach
  for(let i = 0; i < A.length; i++) {
      if(A[i] <= 0 || A[i] > A.length) {
          A[i] = 1
      }
  }

  // now make A[A[i] - 1] = -1 if A[i] > 0
  for(let i = 0; i < A.length; i++) {
    console.log(A[i])
      if(A[i] > 0 && A[i] - 1 >= 0) {
          A[A[i] - 1] = -1
      }
  }
  for(let i = 0; i < A.length; i++) {
      if(A[i] > 0) return i + 1
  }
  return A.length + 1
}

console.log(solution([4, 1, 5, 6, 2]))