let A = [['A', 'A', 'A', 'B', 'A'],
['B', 'B', 'B', 'B', 'B'],
['A', 'B', 'A', 'A', 'A'],
['A', 'B', 'B', 'B', 'B'],
['A', 'A', 'A', 'A', 'A']];

let rows = A.length
let cols = A[0].length

// visited  is actaul a set of strings which have '0,0', '1,0' etc as vaues
let visited = new Set()
let distance = new Array(rows).fill().map(() => new Array(cols).fill(-1))

let Q = []

// push co-ords into queue
Q.push([0, 0])
distance[0][0] = 0
visited.add([0, 0].toString())

let directionsRow = [-1, 1, 0, 0]
let directionsCol = [0, 0, -1, 1]

while (Q.length) {
  let cur = Q.shift()
  let row = cur[0]
  let col = cur[1]

  // check up down left and right
  for (let direction = 0; direction < 4; direction++) {
    let newRow = row + directionsRow[direction]
    let newCol = col + directionsCol[direction]

    if (!visited.has([newRow, newCol].toString()) && newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && A[newRow][newCol] !== A[row][col]) {
      visited.add([newRow, newCol].toString())
      distance[newRow][newCol] = distance[row][col] + 1
      Q.push([newRow, newCol])

    }
  }
}

  console.log(distance)


if (distance[rows - 1][cols - 1] === -1) console.log("Path does not exist");
else console.log(distance[rows - 1][cols - 1]);