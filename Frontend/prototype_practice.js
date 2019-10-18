
// Lesson 1
function Car(make) {
  this.make = make
  this.wheels = 1
}

// prototype objects are created when functions are created

console.log(Car.prototype)

Car.prototype.wheels = 4

console.log(Car.prototype.wheels)

const myCar = new Car('Ford')

console.log(Object.getPrototypeOf(Car))
console.log(Object.getPrototypeOf(myCar))

console.log(myCar)

// new :
// 1. brand new obj is created or and alternative obj is created based on the funciton used
// 2. protoype linked
// 3. the constructed obj is set as the `this` for that function call

// lesson 2

function Foo() {

}

Object.defineProperty(Foo.prototype, 'constructor', {
  enumerable: false,
  writable: true,
  configurable: true,
  value: Foo
})

console.log(Foo.prototype.constructor)


const a = new Foo()

console.log(a.constructor === Foo)

// lesson 3

'use strict'

function Foo(name) {
  this.name = name
}

Foo.prototype.myName = function() {
  return this.name
}

function Bar(name) {
  Foo.call(this, name)
}

Bar.prototype = Object.create(Foo.prototype)

const a = new Bar('Mahesh')

console.log(a)

// leson 4
let parent = {
  hair: 'black',
  heightInInches() {
    return this.height * 12
  }
}

// create:  parent is the designated prototpe obj of child obj


// assign: known to copy all enumerable own properties and values from one obj to the other obj
const child = Object.assign({height: 6}, parent)


console.log(child.heightInInches())

parent.heightInInches = () => true

console.log(child.heightInInches())