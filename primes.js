// numbers primes

/* The logic behind what we’re about to do is as follows:

Create an array from two until the value and assign a value of true since we are going to assume everything is prime to start.
Take the square root of our desired value which will represent a limit to our looping.
Loop from two until our new square rooted limit.
Check to see if our current index is prime, otherwise ignore it.
Loop through (i * i) + ix until our initial value where x is incremental starting from value one.
Set every index hit to false because it is no longer a prime number. */

let showPrimes = (value) => {
  let primes = new Array(value).fill(true)
  let limit = Math.sqrt(value)
  for(let i = 2; i < limit; i++) {
    if(primes[i]) {
      for(let j = i * i; j < value; j = j + i) {
        primes[j] = false;
      }
    }
  }

  console.log(primes)
  for (let i = 2; i < value; i++) {
    if(primes[i]) {
      console.log(i)
    }
  }

}

showPrimes(10)