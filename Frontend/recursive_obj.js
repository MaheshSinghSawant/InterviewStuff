function flattenDictionary(dict, prefix = '', fObj = {}) {
  if(typeof dict !== 'object') {
    fObj[prefix] = dict
  } else {
    for(let key of Object.keys(dict)) {
    if(typeof dict[key] !== "object") {
        let finalPre = key === '' ? prefix.substring(0, prefix.length - 1) : prefix + key
        fObj[finalPre] = dict[key]
    } else {
      let pre = prefix + key + '.'
      flattenDictionary(dict[key], pre, fObj)
      }
    }
  }
  return fObj
}


// another answer 
let flatten = (sourceObj, prefix = '', fObj ={}) => {
  for(let key in sourceObj) {
    if(typeof sourceObj[key] !== 'object') {
      let newKey = prefix + key
      fObj[newKey] = sourceObj[key]
    } else {
      let prefixedKey = prefix + key
      flatten(sourceObj[key], prefixedKey, fObj)
    }
  }

  return fObj
}

let a = {
  one: 1,
  two: 2,
  threeObj: {
    a: "wow",
    b: "omg so cool"
  },
  key5: "bleh",
  key6: {
    key7: {
      key8: "ok thats hot"
    }
  }
}