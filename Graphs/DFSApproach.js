// https://leetcode.com/problems/graph-valid-tree/
// Trying to see if a graph has any cycles, if not it may be a tree if all nodes are connected

// Lets try and do it using DFS and BFS


// DFS

// Input: n = 5, and edges = [[0,1], [0,2], [0,3], [1,4]]
// Output: true

let DFSApproach = (n, edges) => {
  // Create an adjacency list for the grap such that each entry has 
  // 1. key as the vertex value (usually number)
  // 2. value is an empty Set meant to be the list of neighbors
  // 3. for an undirected graph make sure both the vertices which have a common edge are present in each others entry
  let adjacenyList = new Array(n).fill(null).map(() => new Set())
  // for(let i = 0; i < n; i++) {
  //   adjacenyList[i] = new Set();
  // }
  for (let edge of edges) {
    const [n1, n2] = edge
    adjacenyList[n1].add(n2)
    adjacenyList[n2].add(n1)
  }

  console.log('this is the initial Adjacency List', adjacenyList);
  
  // Now we need to traverse through the list
  // Usually in both DFS and BFS we keep track of the visited nodes which we can then use based on the question
  let visited = new Set();

  // Since this is an unconnected graph, we perform DFS on it if it has not already been visited
  // each time DFS is performed on an unvisited node, we can concur that it is a separate component

  for(let i = 0; i < n; i++) {
    if(!visited.has(i)) {
      dfs(i, visited, adjacenyList)
    }
  }

  console.log(visited)
  return 0
}

// Within DFS
let dfs = (vertex, visited, adjacenyList) => {
  if (visited.has(vertex)) return
  visited.add(vertex)

  for(let neighbor of adjacenyList[vertex]) {
    dfs(neighbor, visited, adjacenyList)
  }
}


DFSApproach(5, [[0,1], [0,2], [0,3], [1,4]])
