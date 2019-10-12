function hourglassSum(arr) {
  let r = arr.length
  let c = arr[0].length

  if(r < 3 || c < 3) return -1
  let maxSum = -Infinity
  for(let i = 0; i < r - 2; i++) {
      for(let j = 0; j < c - 2; j++) {
          let sum = arr[i][j] + arr[i][j+1] + arr[i][j+2]
                    + arr[i+1][j+1] +
                    arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]

          maxSum = Math.max(maxSum, sum)
      }
  }
  return maxSum
}