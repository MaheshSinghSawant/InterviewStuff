// https://drive.google.com/file/d/1OMBY6v-EHszFkciC0V_IIgFO85-yvOYe/view

const rope = {value: 1500, weight: 1}
const food = {value: 2000, weight: 3}
const tent = {value: 3000, weight: 4}

const constraint = [1,2,3,4]
const items = [rope, tent, food]

function createGrid() {
  let newGrid = []
  for(let row = 0; row < items.length; row++) {
    newGrid[row] = []
    for (let col = 0; col < constraint.length; col++) {
      newGrid[row][col] = 0
    }
  }
  return newGrid
}

function createGrid2() {
  return new Array(items.length).fill(null).map(ele => ele = new Array(constraint.length).fill(0))
}


function fillInGrid(grid) {
  for(let row = 0; row < grid.length; row++) {
    let {value, weight} = items[row]
    for(let col = 0; col < grid[0].length; col++) {
      if(typeof grid[row-1] === 'undefined') {
        grid[row][col] = value
        continue
      }
      let prevRowSameCol = grid[row-1][col]
      if(weight > constraint[col]) {
        grid[row][col] = prevRowSameCol
        continue
      }
      if(weight === constraint[col]) {
          grid[row][col] = Math.max(prevRowSameCol, value)
          continue
      }

      let diff = constraint[col - 1] - weight
      let addingWhateverWasThereAtDiffToThisValue = value + grid[row][diff]
      grid[row][col] = Math.max(prevRowSameCol, addingWhateverWasThereAtDiffToThisValue)
    }
  }
}

const matrix = createGrid2()
fillInGrid(matrix)
console.log(matrix)
