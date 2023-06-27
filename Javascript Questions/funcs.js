//add(2, 5); // 7
// add(2)(5); // 7


// let add = (a, b) => {
//   if(typeof b === 'undefined') {
//     return (othervar) => {
//       return a + othervar;
//     }
//   }
//     return a + b
// }


let add = (a, b, c) => {
  if(typeof b === 'undefined') {
    return (secondVar, thirdVar) => {
      if(typeof thirdVar === 'undefined') {
        return (thirdVar) => {
          return a + secondVar + thirdVar
        }
      } else {
        return a + secondVar + thirdVar
      }
    }
  }
  return a + b + c
}

console.log(add(2)(5, 7));
console.log(add(2, 5, 7));