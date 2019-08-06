class MaxBinaryHeap {
  constructor() {
    this.values = []
  }

  insert(n) {
    this.values.push(n)
    this.bubbleUp()
  }

  extractMax() {
    // this is the max value of the heap
    const max = this.values[0]
    const end = this.values.pop()
    // in case there was only one element after we popped, we do not need to sink down
    if (this.values.length) {
      // Replace the root with the last element of the calues array
      this.values[0] = end
      // sink down to adjust the array
      this.sinkDown()
    }

    return max
  }

  bubbleUp() {
    // let element = this.values[this.values.length - 1]
    let idx = this.values.length - 1
    const element = this.values[idx]
    while (idx > 0) {
      // get the parent and compare to current element
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIdx]
      if (element <= parent) break
      this.values[parentIdx] = element
      this.values[idx] = parent
      idx = parentIdx
    }
  }


  sinkDown() {
    let idx = 0
    while (true) {
      let parent = this.values[idx]
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 2
      let leftChild = this.values[leftChildIdx]
      let rightChild = this.values[rightChildIdx]
      let maxIdx = idx
      let max = parent
      if (leftChild !== null && leftChild > parent) {
        maxIdx = leftChildIdx
      }
      if (rightChild !== null && rightChild > max) {
        maxIdx = rightChildIdx
      }

      max = this.values[maxIdx]
      if (max === parent) break
      this.values[idx] = this.values[maxIdx]
      this.values[maxIdx] = parent
      idx = maxIdx
    }
  }
}

const maxBinaryHeap = new MaxBinaryHeap()
maxBinaryHeap.insert(2)
maxBinaryHeap.insert(5)
maxBinaryHeap.insert(7)
maxBinaryHeap.insert(12)

// maxBinaryHeap.extractMax()

console.log(maxBinaryHeap.extractMax())