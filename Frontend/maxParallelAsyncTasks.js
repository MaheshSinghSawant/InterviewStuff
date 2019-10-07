// a sample async task
let asyncTask = callback => {
  setTimeout(() => callback(), 1000)
}

// given list of async tasks
let listOfAsyncTasks = new Array(10).fill(asyncTask)


// function to execute given number of async tasks parallely
let executeParallel = (tasks, maxNumber) => {
  // can choose to create a copy or not. I prefer to do that to keep it pure.
  let allTasks = tasks
  let running = 0

  // use this callback function to perform actions and execute next task
  let done = () => {
    console.log('Done')
    running--
    executeTask()
  }

  // execute a task while there are tasks to execute and if running is less than the max number
  const executeTask = () => {
    if (allTasks.length && running < maxNumber) {
      let task = allTasks[0]
      allTasks.shift()
      running++
      task(done)
    }
  }

  for (let i = 0; i < maxNumber; i++) {
    executeTask()
  }
}

executeParallel(listOfAsyncTasks, 4)