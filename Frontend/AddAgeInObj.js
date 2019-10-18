let ages = {
  age: 19,
  parent: {
    name: 'SB',
    age: 10
  },
  kids: [
    {
      name: 'Mahendra',
      age: 10
    },
    {
      name: 'Neeta',
      age: 10
    },
    {
      name: 'Mahesh',
      age: 10
    }
  ]
}


function getSum(obj, sum = 0) {
  if(Array.isArray(obj)) {
    for(let ele of obj) {
      sum = getSum(ele, sum)
    }
  } else if(typeof obj === 'object') {
      for(let key in obj)  {
        if(typeof obj[key] !== 'object') {
          if(key === 'age') {
            sum = sum + obj[key]
          }
        } else {
            sum = getSum(obj[key], sum)
        }
      }
    }

    return sum
}

console.log(getSum(ages))