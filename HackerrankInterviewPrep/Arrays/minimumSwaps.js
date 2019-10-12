function minimumSwaps(arr) {
  let swap = 0
  let visited = new Array(arr.length)


  for(let i = 0; i < arr.length; i++) {
    let j = i
    let cycleEdges = 0
    while(!visited[j]) {
      visited[j] = true
      j = arr[j] - 1
      cycleEdges++
    }

    if(cycleEdges !== 0) {
      swap = swap + cycleEdges - 1
    }
  }
  return swap
}

console.log(minimumSwaps([1,2,3,4]))