import { expect } from "chai";
import upperFirst from "../src/upperFirst.js";

describe("upperFirst()", () => {
  it("should capitalize first letter", () => {
    // test for lowercase string
    expect(upperFirst("hello")).to.equal("Hello");
  });

  it("should not change already capitalized string", () => {
    // test for already capitalized string
    expect(upperFirst("Hello")).to.equal("Hello");
  });

  it("should handle uppercase string", () => {
    // test for uppercase string
    expect(upperFirst("HELLO")).to.equal("HELLO");
  });

  it("should handle empty string", () => {
    // test for empty string
    expect(upperFirst("")).to.equal("");
  });
});
