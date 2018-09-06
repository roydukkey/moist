'use strict';

firstPalindromeNotGreaterThan(999);
//firstPalindromeNotGreaterThan(10000000);

/**
 * Returns true when the value provides is palindromic.
 * 
 * @param {(number|string)} value - The value to be tested.
 * @returns {boolean} Indicates value is a palindrome.
 */
function testPalindrome(value) {
  if (value == null) return;

  value = value.toString();
  
  let middle = Math.ceil(value.length / 2);
  let first = value.slice(0, middle - value.length % 2);
  let last = [...value.slice(middle)].reverse().join('');

  return first === last;
}

/**
 * Attempts to find a palindrome from the product of the specified value and its self, or any combination of numbers less than the specified value.
 * 
 * @param {number} number - The starting number of the search.
 */
function firstPalindromeNotGreaterThan(number) {
  find(number, number);

  function find(number, maxNumber) {
    // Test input by self
    let product = number * number;

    if (testPalindrome(product)) {
      logFound(number, number, product);
    }

    // Test input by numbers great than self and smaller than starting value
    else {
      let iNumber = number + 1;

      for (iNumber; iNumber <= maxNumber; iNumber++) {
        product = iNumber * number;

        if (testPalindrome(product)) {
          logFound(iNumber, number, product);

          return;
        }
      }
      
      // Move to next
      find(--number, maxNumber);
    }
  }

  function logFound(numberOne, numberTwo, palindrome) {
    console.log(`Found the palindrome: ${palindrome} = ${numberOne} * ${numberTwo}.`);
  }
}