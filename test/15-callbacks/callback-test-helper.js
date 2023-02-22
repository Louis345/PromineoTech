import { getAnswer } from "../getAnswer.js";

import { calculate } from "../../exercises/15-callbacks/01-calculate.js";

import printerFn from "../../exercises/15-callbacks/02-print-names.js";

import { findFirst } from "../../exercises/15-callbacks/03-find-first.js";

import { createCallToAction } from "../../exercises/15-callbacks/04-link-or-button.js";

const sendEmailStr = getAnswer("../exercises/15-callbacks/05-send-email.js");

export const sendEmail = eval(`(fn) => {
  ${sendEmailStr.replace("askForUpdate", "() => {}")}
  try {
    return sendEmail(fn);
  } catch (err) {}
}`);

export { calculate, findFirst, printerFn, createCallToAction };
