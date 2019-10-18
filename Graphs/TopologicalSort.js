

class Graph{
  constructor(){
      this.adjacencyList = [];
  }
  addVertex(vertex){
      if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1,v2){
      this.adjacencyList[v1].push(v2);
  }
  removeEdge(vertex1,vertex2){
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
          v => v !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
          v => v !== vertex1
      );
  }
  removeVertex(vertex){
      while(this.adjacencyList[vertex].length){
          const adjacentVertex = this.adjacencyList[vertex].pop();
          this.removeEdge(vertex, adjacentVertex);
      }
      delete this.adjacencyList[vertex]
  }
}

let g = new Graph();
g.addVertex(0);
g.addVertex(1);
g.addVertex(2);
g.addVertex(3);
g.addVertex(4)
g.addVertex(5)
g.addEdge(5, 2); 
g.addEdge(5, 0); 
g.addEdge(4, 0); 
g.addEdge(4, 1); 
g.addEdge(2, 3); 
g.addEdge(3, 1); 

console.log(g)
let visited = new Set()
let stack = new Set()
let recStack = new Array(g.length).fill(false)

console.log(recStack)

function topSortUtil(vertex) {
  visited.add(vertex)
  recStack[vertex] = true
  console.log(recStack)
  for(let neighbour of g.adjacencyList[vertex]) {
    if(recStack[neighbour]) console.log('cycle')
    if(visited.has(neighbour)) continue
    topSortUtil(neighbour)
  }
  stack.add(vertex)
  recStack[vertex] = false
}

for(let i = 0; i < g.adjacencyList.length; i++) {
  if(visited.has(g.adjacencyList[i])) continue

  else topSortUtil(i)
}

console.log(stack)


