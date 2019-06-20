// https://leetcode.com/problems/graph-valid-tree/
// Trying to see if a graph has any cycles, if not it may be a tree if all nodes are connected

// Lets try and do it using DFS and BFS


// 1. the total nums of edges should be n-1;
// 2. the total nums of visited nodes should equals to n;
// 3. starts from 0 we should be able to traverse the whole tree;
// 4. if we saw a value we've been visited, return fales right away;
// 5. when adding node to queue, should remove it's parent node from this node's adj list.

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

  let containsCycles = false
  let parent = {}

    // Within DFS
let dfs = (vertex, visited, adjacenyList) => {
  if (visited.has(vertex)) {
    valid = false
    return
  }
  visited.add(vertex)

  for(let neighbor of adjacenyList[vertex]) {
    dfs(neighbor, visited, adjacenyList)
  }
}

  console.log('this is the initial Adjacency List', adjacenyList);
  
  // Now we need to traverse through the list
  // Usually in both DFS and BFS we keep track of the visited nodes which we can then use based on the question
  let visited = new Set();

  // FOR DFS approach we go through each vertex and perform DFS on it if it has not already been visited

  for(let i = 0; i < n; i++) {
    if(!visited.has(i)) {
      dfs(i, visited, adjacenyList)
    }
  }


  // console.log(valid)
  console.log(visited.size === n)
  return 0
}




DFSApproach(5, [[0,1], [1,2], [2,3], [1,3], [1,4]])
