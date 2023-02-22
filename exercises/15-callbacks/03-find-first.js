/**
 * Returns the first number in an array that meets a condition.
 * @param {array} arrayOfNum e.g. [3,4, 20, 333]
 * @param {function} callback that receives a number and returns true or false
 * @returns {number} in the array that is the result of the callback
 *
 * callback
 * @param {number} num an item in an array
 * @returns {boolean} if a number meets a condition
 *
 * @example
 * const isNumberEven = (num) => {
 *   if (num % 2 === 0) return true;
 *   else return false;
 * };
 * const isNumberTwoDigits = (num) => {
 *   if (`${num}`.length === 2) {
 *     return true;
 *   } else return false;
 * };
 * console.log( findFirst([1, 3, 7, 8, 20], isNumberEven) ) // 8
 * console.log( findFirst([4, 500, 30, 2], isNumberTwoDigits) ) // 30
 */

const findFirst = (arrayOfNum, callback) => {
  // WRITE YOUR ANSWER HERE
};

// IGNORE THIS BELOW. It is for the tests.

export { findFirst };
