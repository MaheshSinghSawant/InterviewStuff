// combination of 

var construct = function(grid) {
  const tree = dividedGrid => {
    const node = new Node()
    const isAllOnes = dividedGrid.every(row => row.every(col => col === 1))
    const isAllZeros = dividedGrid.every(row => row.every(col => col === 0))
    if (isAllOnes) {
      node.val = 1
      node.isLeaf = true
    } else if (isAllZeros) {
      node.val = 0
      node.isLeaf = true
    } else {
      // we the tree into 4 parts
      let length = dividedGrid.length
      let left = dividedGrid.map(row => row.slice(0, length / 2))
      let right = dividedGrid.map(row => row.slice(length / 2))
      node.topLeft = tree(left.slice(0, length / 2))
      node.topRight = tree(right.slice(0, length / 2))
      node.bottomLeft = tree(left.slice(length / 2))
      node.bottomRight = tree(right.slice(length / 2))

      node.isLeaf = false
      node.val = "*"
    }
    return node
  }
  const head = tree(grid)
  return head

};