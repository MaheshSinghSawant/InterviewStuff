// Question and Solution https://www.dailycodingproblem.com/solution/1?token=bdc0aca1ba8d294aeeefa7c4dead00df1c1ab48e5b3b156f3011c8dfbc3541765b759c7b
// The generic way on leetcode would be to use a helper map and see if it was seen before
// a new approach stated was to use binary search on a sorted list. lets see how it is done


let findTwoSum = (list = [10, 15, 3, 7], k = 17) => {
  list.sort((a, b) => a - b)
  let n = list.length 
  let l = 0
  let r = n - 1

  while(l <= r) {
    let sum = list[l] + list[r]
    if(sum === k) return [list[l], list[r]]
    if(sum > k) r--
    if(sum < k) l++
  }
  return []
}


console.log(findTwoSum())