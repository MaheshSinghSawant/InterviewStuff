// Question:

function f() {
  for(var i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log(i)
    }, 1000 * i)
  }
}


// ans1

function f1() {
  for(let i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log(i)
    }, 1000 * i)
  }
}

//ans 2
function f2() {
  for(var i = 0; i < 3; i++) {
    (function(i_local) {
      return setTimeout(function() {
        console.log(i_local)
    }, 1000 * i)})(i)
  }
}

// ans3 using bind on the settimeout function
function f3() {
  for(var i = 0; i < 3; i++) {
    setTimeout((function(x) {
      console.log(x)
    }).bind(null, i), 1000 * i)
  }
}

// create a private variable using closures
let priv = (function() {
  let private_var = 3
  return {
    getPrivateVar: function() {
      return private_var
    }
  }
})()

console.log(priv.getPrivateVar())

