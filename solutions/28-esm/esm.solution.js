import greet from "./greet.js";
import { multiply } from "./multiply.js";
/**
 * The next two exercises uses ES modules (ESM).
 * ES modules allow you break up your code into multiple files (or modules), and then share code between different files.

/**
 * Problem 1: Default Exports
 * To learn about ES modules, scroll down to where it says "Default Exports" here:
 * @see https://blog.shanemitchell.dev/named-vs-default-exports-es6/
 *
 * 1. Create a new file in the same folder as this file called "greet.js". (NOTE that you will need to include the extension ".js" in order for this to work)
 * 2. Copy the "greet" function below and paste it into the new file "greet.js"

const greet = (name) => {
  return `Hello ${name}!`;
};

 * 3. Export the "greet" function from "greet.js"
 * 4. Import the function at the top of this file using the name "greet"
 *
 * ES Modules Reference:
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
 * @see https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
 */
// Put your answer here

/**
 * Problem 2: Named Exports
 * You are going to follow the same steps,
 * except you will be using a named export instead of default exports.
 * 1. Create a new file in the same folder as this file called "multiply.js".
 * 2. Copy the "multiply" function below and paste it into the new file "multiply.js"

const multiply = (a, b) => {
  return a * b;
};

 * 3. Export the "multiply" function from "multiply.js"
 * 4. Import the function at the top of this file using the name "multiply"
 */
// Put your answer here

/**
 * Ignore me below. This is for the tests.
 */

let greeter;
let multiplier;
try {
  greeter = greet;
  multiplier = multiply;
} catch (e) {
  // Normally it is bad practice to not handle the error.
  // However, I am just using try ... catch to get the unit test to work
}
export { greeter, multiplier };
