// Context Help for GitHub Copilot: Palindrome Checker Function

// Intent:
//The goal is to create a function named `is_palindrome_in_array` that checks an array of strings and determines whether any of the strings are palindromes. A palindrome is a word that reads the same backward as forward, e.g., 'radar'.

// Clarity:
// The function should be easy to understand and use. It takes an array of strings as input and returns a boolean value - True if at least one palindrome is found in the array, and False otherwise.

// Specificity:
// Input: An array of strings. Example input: ['apple', 'radar', 'level', 'world'].
// Output: A boolean value. True if a palindrome is found, False if not.
// Example: Given the input ['apple', 'radar', 'world'], the function should return True because 'radar' is a palindrome.

//# Error Handling:

// - The function should exit and return False if the input array is empty, indicating no strings to check.
// - The function should raise a TypeError with the message "Input must be an array of strings" if the input is not an array of strings.

//# Control Structure:
// Utilize a for loop to iterate through each string in the input array. For each string, check if it is a palindrome. This can be done by comparing the string with its reverse. If a palindrome is found, the function should immediately return True. If the loop completes without finding a palindrome, the function should return False after the loop.

// Below is a placeholder for the function. Please complete it following the provided context.

function is_palindrome_in_array(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array of strings")
  }

  if (arr.length === 0) {
    return false
  }

  for (let str of arr) {
    if (str === str.split("").reverse().join("")) {
      return true
    }
  }

  return false
}

// use above function
console.log(is_palindrome_in_array(["apple", "radar1", "world"])) // true
