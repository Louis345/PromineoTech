/**
 * Using a for loop, lop through an array
 * and log each item with console.log
 * @param {array} array
 *
 * @example
 * const array = ["Honda", "Ford", "Ferrari"];
 * logArrayWithFor(array);
 * // Honda
 * // Ford
 * // Ferrari
 */

const logArrayWithFor = (array) => {
  // WRITE YOUR ANSWER HERE
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    console.log(item);
  }
};

// IGNORE THIS BELOW. It is for the tests.

export default logArrayWithFor;
