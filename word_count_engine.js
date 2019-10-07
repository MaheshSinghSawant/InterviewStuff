//https://www.pramp.com/challenge/W5EJq2Jld3t2ny9jyZXG

function wordCountEngine(document) {
  let results = []
  // clean string
    // lowercase
    // to check if a character is valid, i can see the ascii (96 - 122)
  document = document.toLowerCase()
  let newStr = ''
  for(let i = 0; i < document.length; i++) {
    let char = document.charCodeAt(i)
    if((char >= 97 && char <= 122) || document[i] === ' ') {
      newStr += document[i]
    }
  }
  
  document = newStr
  // split at each white space
  let arrStrings = document.split(' ')
  let map = {}
  for(let str of arrStrings) {
    if(str.length) {
      if(!map[str]) {
        map[str] = 1
      } else map[str]++      
    }
  }
  
  let sortedArr = []
  for(let key in map) {
    if(!sortedArr[map[key]]) sortedArr[map[key]] = []
    sortedArr[map[key]].push(key)
  }
  
  for(let i = sortedArr.length - 1; i > 0; i--) {
    sortedArr[i].forEach((ele) => {
      results.push([ele, i.toString()])
    })
  }
  
  console.log(results)
  
  return results
}

wordCountEngine("Every book is a quotation; and every house is a quotation out of all forests, and mines, and stone quarries; and every man is a quotation from all his ancestors. ")