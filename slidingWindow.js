let arrSample = [1, 4, 2, 10, 23, 3, 1, 0, 20]
let k = 4;

let maxSum = (arr, k) => {
  let maxValue = 0
  // windowTotal is sum value for a partilcuar window
  let windowTotal = 0
  // first set value for initial window
  for(let i = 0; i < k; i++) {
    windowTotal += arr[i];
  }

  console.log(windowTotal);

  for(let i = k; i < arr.length; i++) {
    windowTotal = windowTotal + arr[i] - arr[i - k]
    maxValue = Math.max(maxValue, windowTotal)
  }

  return maxValue;
}

console.log(maxSum(arrSample, k))