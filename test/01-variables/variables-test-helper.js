import { getAnswer } from "../getAnswer.js";

const myNumberStr = getAnswer("../exercises/01-variables/01-variables.js");

const yearStr = getAnswer("../exercises/01-variables/02-variables.js");

const priceStr = getAnswer("../exercises/01-variables/03-change-a-variable.js");

const pieStr = getAnswer("../exercises/01-variables/04-constants.js");

const numberOfLikesStr = getAnswer("../exercises/01-variables/05-fix-error.js");

export const getMyNumber = eval(`() => {
  ${myNumberStr}
  return myNumber;
}`);

export const getYear = eval(`() => {
  ${yearStr}
  return year;
}`);

export const getChangedVariable = eval(`() => {
  let price = 5.99;
  ${priceStr}
  return price;
}`);

export const getPie = eval(`() => {
  ${pieStr}
  return PIE;
}`);

export const getNumberOfLikes = eval(`() => {
  ${numberOfLikesStr}
  return numberOfLikes;
}`);
