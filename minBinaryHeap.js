class MinBinaryHeap {
  constructor() {
    this.values = []
  }

  enqueue(val) {
    this.values.push(val)
    this.bubbleUp()
  }

  bubbleUp() {
    let idx = this.values.length - 1
    let current = this.values[idx]
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIdx]
      if (current >= parent) break
      this.values[idx] = parent
      this.values[parentIdx] = current
      idx = parentIdx
    }
  }


  dequeue() {
    const min = this.values[0]
    const end = this.values.pop()
    this.values[0] = end
    if (this.values.length > 1) {
      this.sinkDown()
    }
    return min
  }

  sinkDown() {
    let idx = 0
    while (true) {
      let parentIdx = idx
      let parent = this.values[idx]
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 2
      let leftChild = this.values[leftChildIdx]
      let rightChild = this.values[rightChildIdx]
      let min = parent
      let minIdx = idx
      if (leftChild && leftChild < parent) {
        min = leftChild
        minIdx = leftChildIdx
      }
      if (rightChild && rightChild < min) {
        min = rightChild
        minIdx = rightChildIdx
      }

      if (min === parent) {
        break
      }
      this.values[idx] = min
      this.values[minIdx] = parent
      idx = minIdx
    }
  }
}

const minBinaryHeap = new MinBinaryHeap()
minBinaryHeap.enqueue(2)
minBinaryHeap.enqueue(5)
minBinaryHeap.enqueue(7)
minBinaryHeap.enqueue(12)

console.log(minBinaryHeap.values)

// maxBinaryHeap.extractMax()

console.log(minBinaryHeap.dequeue())
console.log(minBinaryHeap.dequeue())
console.log(minBinaryHeap.dequeue())
console.log(minBinaryHeap.dequeue())