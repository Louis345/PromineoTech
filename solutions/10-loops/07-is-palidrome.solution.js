/**
 * Check to see if a string is a palindrome.
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or racecar.
 * Use the split and join methods to solve this problem.
 * @param  {string}  string
 * @return {boolean} true is a string is a palindrome, false if it is not.
 * @example isPalindrome("eye"); // true
 * @example isPalindrome("nope"); // false
 */

const isPalindrome = (string) => {
  // WRITE YOUR ANSWER HERE

  // Solution 1: for ... of loop
  let letters = string.split("");
  let reverse = "";
  for (let letter of letters) {
    reverse = letter + reverse;
  }
  if (reverse === string) {
    return true;
  }
  return false;

  // Solution 2: reverse
  const reverse = string.split("").reverse().join("");
  return reverse === string;
};

// IGNORE THIS BELOW. It is for the tests.

export default isPalindrome;
