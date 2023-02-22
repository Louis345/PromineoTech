import { getAnswer } from "../getAnswer.js";

const createDogObjectStr = getAnswer(
  "../exercises/11-objects/01-create-object.js"
);

const isEvenOrOddStr = getAnswer(
  "../exercises/13-more-conditionals/01-ternary-operator.js"
);

const errorMessageStr = getAnswer(
  "../exercises/13-more-conditionals/02-short-circuiting.js"
);

export const isEvenOrOdd = eval(`(num) => {
  ${isEvenOrOddStr}
  return isEvenOrOdd;
}`);

export const getErrorMessage = eval(`(error) => {
  ${errorMessageStr}
  return errorMessage;
}`);
