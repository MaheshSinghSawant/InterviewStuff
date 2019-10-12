function rotLeft(a, d) {
  let leftRorateByOne = (arr) => {
      let temp = arr[0]
      for(let i = 0; i < arr.length- 1; i++) {
          arr[i] = arr[i+1]
      }
      arr[arr.length-1] = temp
  }


  for(let i = 0; i < d; i++) {
      leftRorateByOne(a)
  }
  return a
}


// the other approach involves using gcd, I didnt get the exact result but ill paste the code

function rotLeftGCD(a, d) {
  let getGCD = (a,b) => {
      if(b === 0) return a
      else return getGCD(a, a%b)
  }

  let n = a.length
  let gcd = getGCD(d, n)

  for(let i = 0; i < gcd; i++) {
      let j = i
      let temp = a[i]

      while(true) {
          let k = j + d
          if(k >= n) k = k - n
          if(k === i) break
          a[j] = a[k]
          j = k
      }
      a[j] = temp
  }

return a
}