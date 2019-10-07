let arr = [12, 9 , 7, 33]
let n = arr.length
let dp = []
let v = []

let maxSum = (i) => {
  if(i >= n) return 0
  dp[i] = Math.max(maxSum(i+1), arr[i] + maxSum(i+2))
  return dp[i]
}

console.log(maxSum(0))