let root = document.getElementById('demo')
let resultsDFS = []
let resultsDFSREC = []
let resultsBFS = []

let stack = []
let queue = []

let getDFS = () => {
  stack.push(root)
  while(stack.length) {
    let node = stack.pop()
    resultsDFS.push(...node.classList)
    stack.push(...node.children)
  }
}

let getDFSRecursive = node => {
  if(!node) return
  resultsDFSREC.push(...node.classList)
  let children = Array.from(node.children)
  children.forEach((child) => {
    getDFSRecursive(child)
  })
}


let getBFS = () => {
  queue.unshift(root)
  while(queue.length) {
    let node = queue.pop()
    resultsBFS.push(...node.classList)
    queue.unshift(...node.children)
  }
}

getDFS()
getDFSRecursive(root)
getBFS()
console.log(resultsDFS)
console.log(resultsDFSREC)
console.log(resultsBFS)


/*
input: 
<div id="demo">
  <div class="a">
      <div class="aa">
          <span class="aaa">
          </span>
          <span class="aab">
          </span>
      </div>
      <div class="ab">
          <span class="aba">
          </span>
          <span class="abb">
          </span>
      </div>
  </div>
</div>

https://stackoverflow.com/questions/39503861/javascript-only-dom-tree-traversal-dfs-and-bfs

*/