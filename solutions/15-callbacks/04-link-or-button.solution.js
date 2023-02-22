// E.g. do not change me
const createLink = (text) => {
  return `<a href="#" class="button">${text}</a>`;
};

// E.g. do not change me
const createButton = (text) => {
  return `<button type="button">${text}</button>`;
};

/**
 * Update the createCallToAction so that it can either:
 * 1. Use createLink
 * 2. Use createButton
 *
 * You must use a callback to solve this problem.
 */

const createCallToAction = (clickableText, callback) => {
  return (
    "<div>Limited Time: Members Save 30%<br>" +
    callback(clickableText) +
    "</div>"
  );
};

// Update me too
createCallToAction("Book Now", createLink);

// IGNORE THIS BELOW. It is for the tests.

export { createCallToAction };
