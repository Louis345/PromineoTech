import { expect } from "chai";
import {
  isEvenOrOdd,
  getErrorMessage,
} from "./more-conditionals-test-helper.js";

describe("13. More Conditionals", () => {
  describe("01-ternary-operator", () => {
    it('"isEvenOrOdd" should equal "even" if "num" is even', () => {
      expect(isEvenOrOdd(22)).to.equal("even");
    });
    it('"isEvenOrOdd" should equal "odd" if "num" is odd', () => {
      expect(isEvenOrOdd(9)).to.equal("odd");
    });
    it("solve this problem with the ternary operator", () => {
      const str = isEvenOrOdd.toString();
      expect(str).to.match(/=[\S\s]*\?[\S\s]*\:/);
    });
  });

  describe("02-short-circuiting", () => {
    it('"errorMessage" should equal "Username already exists." when message equals "Username already exists."', () => {
      const result = getErrorMessage("Username already exists.");
      expect(result).to.equal("Username already exists.");
    });
    it('"errorMessage" should equal "An unexpected error occurred." when message equals "" or another falsey value', () => {
      const result = getErrorMessage("");
      expect(result).to.equal("An unexpected error occurred.");
    });
    it("solve this problem with short circuiting (either || or &&)", () => {
      const str = getErrorMessage.toString();
      expect(str).to.match(/\|\|/);
    });
  });
});
