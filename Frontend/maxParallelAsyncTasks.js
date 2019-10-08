// Uber Question
let asyncTask = function(callback) {
  setTimeout(function() {
    callback()
  }, 2000)
}

let Throttler = function(maxRunning) {
  this.queue = []
  this.running = 0
  this.maxRunning = maxRunning
}

Throttler.prototype.executeTask = function() {
  function done() {
    this.running--
    console.log(this.running, this.maxRunning)
    this.executeTask()
  }

  if(this.running < this.maxRunning && this.queue.length) {
      this.running++
      let task = this.queue[0]
      this.queue.shift()
      let boundDone = done.bind(this)
      task(boundDone)
  }
}

Throttler.prototype.next =  function (task) {
  this.queue.push(task)
  if(this.running < this.maxRunning) {
    this.executeTask()
  }
}

let throttler = new Throttler(4)
throttler.next(asyncTask)
throttler.next(asyncTask)
throttler.next(asyncTask)
throttler.next(asyncTask)
throttler.next(asyncTask)
throttler.next(asyncTask)
throttler.next(asyncTask)



/*
Alternative where they can have the next function take in arguments
let asyncTask = function(callback, n) {
  setTimeout(callback, Math.random() * 5000, n)
}

let Throttler = function(maxRunning) {
  this.queue = []
  this.running = 0
  this.maxRunning = maxRunning
}

Throttler.prototype.executeTask = function() {
  function done(val) {
    this.running--
    console.log('Done!', val)
    this.executeTask()
  }
  let boundDone = done.bind(this)

  if(this.running < this.maxRunning && this.queue.length) {
      this.running++
      let task = this.queue[0][0]
      let numar = this.queue[0][1]
      this.queue.shift()
      task.call(null, boundDone, numar)
  }
}

Throttler.prototype.next =  function (task, num) {
  this.queue.push([task, num])
  if(this.running < this.maxRunning) {
    this.executeTask()
  }
}

let throttler = new Throttler(4)
throttler.next(asyncTask, 1)
throttler.next(asyncTask, 2)
throttler.next(asyncTask, 3)
throttler.next(asyncTask, 4)
throttler.next(asyncTask, 5)
throttler.next(asyncTask, 6)
throttler.next(asyncTask, 7)
*/










// let asyncTask = callback => {
//   setTimeout(() => callback(), 1000)
// }

// // given list of async tasks
// let listOfAsyncTasks = new Array(10).fill(asyncTask)


// // function to execute given number of async tasks parallely
// let executeParallel = (tasks, maxNumber) => {
//   // can choose to create a copy or not. I prefer to do that to keep it pure.
//   let allTasks = tasks
//   let running = 0

//   // use this callback function to perform actions and execute next task
//   let done = () => {
//     console.log('Done')
//     running--
//     executeTask()
//   }

//   // execute a task while there are tasks to execute and if running is less than the max number
//   const executeTask = () => {
//     if (allTasks.length && running < maxNumber) {
//       let task = allTasks[0]
//       allTasks.shift()
//       running++
//       task(done)
//     }
//   }

//   for (let i = 0; i < maxNumber; i++) {
//     executeTask()
//   }
// }

// executeParallel(listOfAsyncTasks, 4)






