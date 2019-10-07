// https://repl.it/repls/FluffySturdyApplicationsoftware
// bind using call/apply 

Function.prototype.mybind = function(...args) {
  let fn = this
  let params = args.slice(1)

  return function(...args2) {
    fn.apply(args[0], [...params, ...args2])
  }
}

let name = {
  fname: 'mahesh',
  lname: 'sawant'
}

let printName = function(hometown, state) {
  console.log(`${this.fname} ${this.lname} is from ${hometown} in ${state}`)
}

let printMyName = printName.mybind(name, "mumbai" )
printMyName("maharashtra")