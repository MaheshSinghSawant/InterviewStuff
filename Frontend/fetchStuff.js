/* (async function() {
  const url = 'https://jsonplaceholder.typicode.com/todos/1'
  const badUrl = 'https://jsonplaceholder.typi';

  let data
  data = await fetch(url).then(resp => resp.json())
              .catch((e) => {return {}})
  console.log(data)
})()
 */

function doDtuffWithData(stuff) {
  console.log('this is stuff', stuff)
  }
  
  
  const url = 'https://jsonplaceholder.typicode.com/todos/1'
  const badUrl = 'https://jsonplaceholder.typi';
  
  let data
  fetch(badUrl).then(resp => resp.json())
  .catch((e) => data = 'bad request')
  .then(json => {
    data = json
    doDtuffWithData(data)
  })