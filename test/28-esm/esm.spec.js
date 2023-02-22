import { expect } from "chai";
import { greeter, multiplier } from "../../exercises/28-esm/esm.js";

import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const reviewQuestionsPath = path.resolve(
  __dirname,
  "../../exercises/28-esm/esm.js"
);
const greeterFilePath = path.resolve(
  __dirname,
  "../../exercises/28-esm/greet.js"
);

const multiplyFilePath = path.resolve(
  __dirname,
  "../../exercises/28-esm/multiply.js"
);

describe("ES Modules", () => {
  describe("Default Exports", () => {
    it('should have a new file named "greet.js" inside of "exercises/28-esm/". (NOTE that this is case sensitive)', () => {
      expect(fs.existsSync(greeterFilePath)).to.be.true;
    });
    it('"greet.js" should have the "greet" function inside of it', () => {
      const fileContents = fs.readFileSync(greeterFilePath, "utf8");
      expect(fileContents).to.match(/const\s*greet/);
    });
    it('"greet.js" should export the "greet" function as default', () => {
      const fileContents = fs.readFileSync(greeterFilePath, "utf8");
      expect(fileContents).to.match(/export\s*default\s*greet/);
    });
    it('"esm.js" should import the "greet" function from "greet.js"', () => {
      const fileContents = fs.readFileSync(reviewQuestionsPath, "utf8");
      expect(fileContents).to.match(/import\s*greet\s*from/);
    });
    it('The "greet" function should work, even after you move it to a different file', () => {
      expect(greeter).to.be.a("function");
      const greeting = greeter("Twinkle Toes");
      expect(greeting).to.equal("Hello Twinkle Toes!");
    });
  });

  describe("Named Exports", () => {
    it('should have a new file named "multiply.js" inside of "exercises/28-esm/". (NOTE that this is case sensitive)', () => {
      expect(fs.existsSync(multiplyFilePath)).to.be.true;
    });
    it('"multiply.js" should have the "multiply" function inside of it', () => {
      const fileContents = fs.readFileSync(multiplyFilePath, "utf8");
      expect(fileContents).to.match(/const\s*multiply/);
    });
    it('"multiply.js" should export the "multiply" function using named exports', () => {
      const fileContents = fs.readFileSync(multiplyFilePath, "utf8");
      expect(fileContents).to.match(/export\s*({|const)\s*multiply/);
    });
    it('"esm.js" should import the "multiply" function from "multiply.js"', () => {
      const fileContents = fs.readFileSync(reviewQuestionsPath, "utf8");
      expect(fileContents).to.match(/import\s*{\s*multiply\s*}\s*from/);
    });
    it('The "multiply" function should work, even after you move it to a different file', () => {
      expect(multiplier).to.be.a("function");
      const product = multiplier(2, 5);
      expect(product).to.equal(10);
    });
  });
});
