import { expect } from "chai";
import {
  getMyNumber,
  getYear,
  getChangedVariable,
  getPie,
  getNumberOfLikes,
} from "./variables-test-helper.js";

describe("1. Variables", () => {
  describe("01-variables", () => {
    it('should contain a variable called "myNumber" (that is not declared with "var")', () => {
      const str = getMyNumber.toString();
      expect(str).to.match(/let/);
    });
    it('"myNumber" should equal any number', () => {
      const number = getMyNumber();
      expect(number).to.be.a("number").to.not.equal(NaN);
    });
  });

  describe("02-variables", () => {
    const date = new Date();
    const thisYear = date.getFullYear();

    it('should contain a variable called "year" (that is not declared with "var")', () => {
      const str = getYear.toString();
      expect(str).to.match(/let/);
    });
    it(`"year" should equal ${thisYear}`, () => {
      const number = getYear();
      expect(number).to.be.a("number").to.equal(thisYear);
    });
  });

  describe("03-change-a-variable", () => {
    it('"price" should be greater than 5.99', () => {
      const number = getChangedVariable();
      expect(number).to.be.a("number").to.be.greaterThan(5.99);
    });
  });

  describe("04-constants", () => {
    it('should contain a constant called "PIE"', () => {
      const str = getPie.toString();
      expect(str).to.match(/const/);
    });
    it('"PIE" should equal to 3.14 (or a value with more digits)', () => {
      const number = getPie();
      expect(number).to.be.a("number").to.not.equal(NaN);
      const str = number.toString();
      expect(str.substring(0, 4)).to.equal("3.14");
    });
  });

  describe("05-fix-error", () => {
    it('"numberOfLikes" should not throw an error and be equal to 58', () => {
      const numberOfLikes = getNumberOfLikes();
      expect(numberOfLikes).to.equal(58);
    });
  });
});
