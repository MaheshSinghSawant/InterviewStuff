// normal
let createPyramid = (n) => {
  let cols = 2*n -1
  let midPoint = Math.floor(cols/2)
  let matrix = new Array(n).fill('').map((ele) => new Array(cols).fill(''))
  for(let i = 0; i < n; i++) {
    let level = ''
    for (let j = 0; j < cols; j++) {
      if( j >= midPoint - i && j <= midPoint + i) {
        level += '*'
      } else level += ' '
    }
    console.log(level)
  }
}

createPyramid(19)

// recursive
function recPyramid(n, row=0, level='') {
  if(row === n) return
  if(level.length === 2*n -1) {
    console.log(level)
    return recPyramid(n, row+1)
  } else {
    let mid = Math.floor((2*n-1)/2)
    let add = ''
    if(level.length >= mid - row && level.length <= mid + row) {
      add = '+'
    } else add = ' '
    let newLevel = level + add
    recPyramid(n, row, newLevel)
  }
}

recPyramid(20)