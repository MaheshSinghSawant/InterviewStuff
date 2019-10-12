const graph = {}
graph.tyler = [{ id: 'henry', dog: false }, { id: 'john', dog: false }, { id: 'aimee', dog: false }]
graph.henry = [{ id: 'peggy', dog: true }, { id: 'keli', dog: false }]
graph.john = [{ id: 'keli', dog: false }]
graph.aimee = []
graph.peggy = []
graph.keli = [{ id: 'claire', dog: false }]
graph.claire = []


function search(name) {
  let queue = []
  queue.push(...graph[name])
  let searched = []

  while(queue.length) {
    let person = queue.shift()
    if(!(searched.find(per => per.id === person.id))) {
      if(person.dog) return `${person.id} has a dog`
      else {
        queue.push(...graph[person.id])
        searched.push(person)
      }
    }
  }
  return "there are no dogs"
}

console.log(search('tyler'))