// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
  let i, map = {}, currMove = 0, ans;
  for (i = 0; i < A.length; i++) {
      if (A[i] <= X && !map[currMove+1]) {
              map[currMove+1] = true;
              currMove++;
              if (currMove === X) ans = i;
      }
  }
  console.log(map)
  console.log(ans)
  return ans;
}
solution(5, [1, 3, 1, 4, 2, 3, 5, 4])