import { expect } from "chai";
import { generateLinks } from "./loops-objects-test-helper.js";

describe("12. Loops with Objects", () => {
  describe("01-loop-through-object", () => {
    it("should return a string of <a> tags", () => {
      const anchors = generateLinks({
        Google: "https://www.google.com",
        Facebook: "https://www.facebook.com",
      });
      expect(anchors).to.be.a("string");
      expect(anchors).to.match(/(<a.*){2}/);
      expect(anchors).to.match(/href=("|')?https:\/\/www.google.com/);
      expect(anchors).to.match(/href=("|')?https:\/\/www.facebook.com/);
      expect(anchors).to.match(/>\s?Google\s?</);
      expect(anchors).to.match(/>\s?Facebook\s?</);
    });
  });
});
