// BFS approach for graph uses a Queue
// The creation of adjacency list is the same

// Input: n = 5, and edges = [[0,1], [0,2], [0,3], [1,4]]
// Output: true

let BFSApproach = (n, edges) => {
  // Create an adjacency list for the grap such that each entry has
  // 1. key as the vertex value (usually number)
  // 2. value is an empty Set meant to be the list of neighbors
  // 3. for an undirected graph make sure both the vertices which have a common edge are present in each others entry
  let adjacenyList = new Array(n).fill(null).map(() => new Set());

  for (let edge of edges) {
    const [n1, n2] = edge;
    adjacenyList[n1].add(n2);
    adjacenyList[n2].add(n1);
  }

  console.log("this is the initial Adjacency List", adjacenyList);

  // Now we need to traverse through the list
  // Usually in both DFS and BFS we keep track of the visited nodes which we can then use based on the question
  let visited = new Set();

  // For BFS aaproach we create a queue and
  let queue = [];
  queue.push(0);

  // while the queue has vertices in it, add them to visited and then add the neighbors of the vertex to the queue
  while (queue.length !== 0) {
    let currentVertex = queue.shift();
    if(visited.has(currentVertex)) {
      continue
    }
    visited.add(currentVertex);
    // add all neighbors of current vertex to queue
    for (let neighbor of adjacenyList[currentVertex]) {
      queue.push(neighbor);
      // for the neighbor delete parent corresponding to it in the parent
      adjacenyList[neighbor].delete(currentVertex)
    }
  }

  console.log(visited);
};


BFSApproach(5, [[0,1], [0,2], [0,3], [1,4]])