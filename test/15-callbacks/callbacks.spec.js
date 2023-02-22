import { expect } from "chai";
import sinon from "sinon";
import { readConsole } from "../getAnswer.js";

import {
  calculate,
  findFirst,
  printerFn,
  createCallToAction,
  sendEmail,
} from "./callback-test-helper.js";

const { printer, printNames } = printerFn;

describe("10. Callbacks", () => {
  describe("01-calculate", () => {
    it("should use the callback", () => {
      const funcStr = calculate.toString();
      const matches = funcStr.match(/callback/g) || [];
      expect(matches.length).to.be.above(1);
    });
    it("should return the result of a callback invoked on two numbers", () => {
      const multiply = (a, b) => {
        return a * b;
      };
      const result = calculate(5, 10, multiply);
      expect(result).to.equal(50);
    });
  });
  describe("02-print-names", () => {
    it("should call on a callback for each item in an array", () => {
      const callback = sinon.spy();
      printNames(["test", "test1", "test3"], callback);
      expect(callback.calledThrice).to.equal(true);
    });
    it('should `console.log` a name when the callback is the "printer" function', () => {
      expect(printer).to.be.a("function");
      expect(printer.toString()).to.include("console.log");
      printNames(["Jamal", "Matina"], printer);
    });
  });
  describe("03-find-first", () => {
    it("should use the callback", () => {
      const funcStr = findFirst.toString();
      const matches = funcStr.match(/callback/g) || [];
      expect(matches.length).to.be.above(1);
    });
    it("should find the first number in an array that, when passed as an argument into a callback, returns true", () => {
      const isNumberDivisibleByThree = (num) => {
        if (num % 3 === 0) return true;
        else return false;
      };
      const result = findFirst([1, 3, 7, 8, 20], isNumberDivisibleByThree);
      expect(result).to.equal(3);
    });
  });
  describe("04-link-or-button", () => {
    it('"createCallToAction" should be able to use "createLink", "createButton", and any other function that returns a string as a callback function', () => {
      const createLabel = (text) => {
        return `<label>${text} <input type="checkbox" class="hidden"></label>`;
      };
      // TODO account for the arguments being in a different order
      const html = createCallToAction("Sign me up", createLabel).replace(
        "\n",
        ""
      );
      expect(html).to.equal(
        '<div>Limited Time: Members Save 30%<br><label>Sign me up <input type="checkbox" class="hidden"></label></div>'
      );
    });
  });
  describe("05-send-email.js", () => {
    it('"sendEmail" should accept a callback as a parameter and log the result from invoking a callback to the screen.', () => {
      const scheduleMeeting = () => {
        return "Do you have time on Monday at 1pm to discuss this?";
      };

      const output = readConsole(sendEmail.bind(null, scheduleMeeting));
      expect(output).to.match(
        /Do you have time on Monday at 1pm to discuss this\?/
      );
    });
  });
});
