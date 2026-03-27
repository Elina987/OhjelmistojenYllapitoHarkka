import { expect } from "chai";
import words from "../src/words.js";

describe("words()", () => {
  it("should split simple sentence into words", () => {
    expect(words("hello world")).to.deep.equal(["hello", "world"]);
  });

  it("should ignore punctuation", () => {
    expect(words("fred, barney, & pebbles")).to.deep.equal([
      "fred",
      "barney",
      "pebbles",
    ]);
  });

  it("should work with custom pattern", () => {
    expect(words("fred, barney, & pebbles", /[^, ]+/g)).to.deep.equal([
      "fred",
      "barney",
      "&",
      "pebbles",
    ]);
  });
});
