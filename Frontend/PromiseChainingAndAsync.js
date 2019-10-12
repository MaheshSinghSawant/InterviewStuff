const posts = [
  { title: 'viva la vida', author: 'mahesh', id: 1 },
  { title: 'upheaval', author: 'shreya', id: 2 },
  { title: 'digital fortress', author: 'dan', id: 3 }
]

const author = [
  { name: 'mahesh', twitter: 'mss375', bio: 'mess' },
  { name: 'shreya', twitter: 'sz', bio: 'not a mess' },
  { name: 'dan', twitter: 'db', bio: 'absolute mess' }
]


function getPost(id) {
  return new Promise((resolve, reject) => {
    const post = posts.find((ele) => ele.id === id)
    setTimeout(function() {
      if (post) resolve(post.author)
      else reject(new Error('no post found'))
    }, 1000)
  })
}


function getAuthorTwitter(name) {
  return new Promise((resolve, reject) => {
    const authorObj = author.find((ele) => ele.name === name)
    let twitter = ''
    if (authorObj && authorObj.twitter) twitter = authorObj.twitter

    setTimeout(() => {
      if(twitter) resolve(twitter)
      else reject(new Error('no twitter found'))
    }, 1000)
  })
}

// Chaining promises
// getPost(1).then(results => getAuthorTwitter(results))
//   .then((results) =>  console.log(results))
//   .catch(err => console.log(err.message))

async function stinker() {
  try{
    const authorName = await getPost(1)
    const twitterHandle = await getAuthorTwitter(authorName)
    console.log(twitterHandle)
  } catch(err) {
    console.log(err.message)
  }
}

stinker()






/*
doing this same thing using just callbacks
const posts = [
  { title: 'viva la vida', author: 'mahesh', id: 1 },
  { title: 'upheaval', author: 'shreya', id: 2 },
  { title: 'digital fortress', author: 'dan', id: 3 }
]

const author = [
  { name: 'mahesh', twitter: 'mss375', bio: 'mess' },
  { name: 'shreya', twitter: 'sz', bio: 'not a mess' },
  { name: 'dan', twitter: 'db', bio: 'absolute mess' }
]


function getPost(id, callback) {
    const post = posts.find((ele) => ele.id === id)
    setTimeout(function() {
      getAuthorTwitter(post.author, callback)
    }, 1000)
}


function getAuthorTwitter(name, callb) {
    const authorObj = author.find((ele) => ele.name === name)
    let twitter = ''
    if (authorObj && authorObj.twitter) twitter = authorObj.twitter
    setTimeout(() => {
      callb(twitter)
    }, 1000)
}

getPost(1, (val) => console.log(val))
*/