// basic lcs
const lcs = (str1, str2) => {
  let helper = (m, n) => {
    if(m === 0 || n === 0) return 0
    if(str1[m-1] === str2[n-1]) {
      return 1 + helper(m - 1, n - 1)
    } else {
      return Math.max(helper(m-1, n), helper(m, n-1))
    }
  }
  return helper(str1.length, str2.length)
}

console.log(lcs("AEDFHR", "ABCDGH"))


// Lcs with tabulation
// basic lcs
const lcs = (str1, str2) => {
  let m = str1.length
  let n = str2.length
    let L = new Array(m+1).fill(0).map((ele) => ele = new Array(m+1).fill(0))

    for(let i = 0; i <=m; i++) {
      for(let j = 0; j <=n; j++) {
        if(i === 0 || j === 0) {
          L[i][j] = 0
        } else if(str1[i-1] === str2[j-1] && i-1 >=0 && j-1 >= 0) {
          L[i][j] = 1 + L[i-1][j-1]
        } else {
          L[i][j] = Math.max(L[i-1][j], L[i][j-1])
        }
      }
    }
    console.log(L)
    return L[m][n]
  }

console.log(lcs("AEDFHR".split(''), "ABCDGH".split('')))