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
