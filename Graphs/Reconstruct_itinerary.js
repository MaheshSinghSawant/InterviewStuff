// create adj list
// sort each list of cities
// perform dfs such that ther is a while loop inside while checks till all cities have been dfsed
// then after that it unshifts the source to the resutls


/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  let graph = {}
  let results = []
  
  for(let ticket of tickets) {
      if(!graph[ticket[0]]) {
          graph[ticket[0]] = []
      }
      graph[ticket[0]].push(ticket[1])
  }
  
  
  for(let fromPlace in graph) {
      if(fromPlace && graph[fromPlace].length) {
          graph[fromPlace] = graph[fromPlace].sort()
      }
  }
  console.log('initial graph', graph)
  const DFS = (source) => {
      while(graph[source] && graph[source].length) {
          const destination = graph[source].shift()
          console.log(source, destination)
          DFS(destination)
      }
      console.log('wut', graph)
      results.unshift(source)
  }
  // results.push("JFK")
  DFS("JFK")
  
return results
};
