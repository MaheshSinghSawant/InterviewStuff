let showSecs = function() {
  let d = new Date()
  console.log(d.getSeconds())
}

let throttle = function(fn) {
let flag = true
return function() {
  if(flag) {
    let context = this
    let params = arguments
    fn.apply(context, params)
    flag = false
    setTimeout(function() {
      flag = true
  }, 4000)
  }

}
}

let throttledSecs = throttle(showSecs)

document.getElementById('btn').addEventListener('click', throttledSecs)