// how do you make a function that only calls input function f every 50 milliseconds

let ansFunc = (inputFn) => {
  setInterval(inputFn, 3000);
}

ansFunc(() => {
  console.log("3 secs")
})