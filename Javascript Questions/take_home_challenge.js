/*
1.Write a custom method to replace the string "The quick brown fox jumps
over the lazy dog" with the string "The1 quick2 brown3 fox4 jumps5
over6 the7 lazy8 dog9"
*/
let replaceEnd = (str) => {
  // split string into array of words and append id(base 0) + 1 to the word and then join it
  return str.split(' ').map((word, idx) => {
    return word = word + (idx + 1)
  }).join(' ')
}


/*
2. Using a single line of code, reverse the order of words in the string below:
var dwarves = "bashful doc dopey grumpy happy sleepy
sneezy"
*/
let ans = dwarves.split(' ').reverse().join(' ')


/*
3. Write a function that takes a number (from 1 to 12) and return its corresponding month
name as a string.
*/
let monthNameFromNum = (n) => {
  let namesOfMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  return namesOfMonths[n-1] || ''
}


// 4. Write a regular expression that matches any string containing at least one digit.
let regex = /.*[0-9].*/
// console.log(regex.test('omg1lol2'))


// 5. Write a function that returns true if two arrays are identical, and false otherwise.
/* 
This question depends heavily on what the values in the array are
 nly primitivies (String/Number) we can compare each value 
we can sort array in case the numbers are same but in different order */
let isIdenticalOnlyPrimitives = (arr1, arr2) => {
  if(arr1.length !== arr2.length) return false
  arr1 = arr1.sort()
  arr2 = arr2.sort()
  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}
// In case the arrays can contain other object we'd have to go through it recursively and check if they are equal
// since there is a time limit to the questions, I can provide that alternative answer later if required

/*
6. set each property to its described value using the sample response payload provided on the next page: 
*/

let oSiteCatalyst = {}
oSiteCatalyst.products = {
"prod": response.cartItems[0].itemInfo.itemPageUrl.substring(response.cartItems[0].itemInfo.itemPageUrl.lastIndexOf('/prod') + 1, response.cartItems[0].itemInfo.itemPageUrl.lastIndexOf('.ip')),
"quantity": response.cartItems[0].qty.toString(),
// Not sure what the question is about here as the date is June 30th 2019, so cant calculate number of days to ship based on a previous date
"shipdays": parseInt(new Date(response.cartItems[0].itemInfo.minDeliveryDate).toISOString().substring(0, 10).split('-').filter(c => c !== '-').join('')), 
"shipvalue": response.cartItems[0].props.shippingDiscountEligible ? "free-plus" : "",
"subtotal": (response.cartItems[0].qty * response.cartItems[0].priceInfo.listPriceInCents)/100,
"uprice": response.cartItems[0].priceInfo.listPriceInCents/100 // The value of "listPriceInCents"  converted to a readable dollar amount
};