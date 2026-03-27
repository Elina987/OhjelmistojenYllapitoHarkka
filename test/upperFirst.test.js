import { expect } from "chai";
import upperFirst from "../src/upperFirst.js";

describe("upperFirst()", () => {
  it("should capitalize first letter", () => {
    expect(upperFirst("hello")).to.equal("Hello");
  });

  it("should not change already capitalized string", () => {
    expect(upperFirst("Hello")).to.equal("Hello");
  });

  it("should handle uppercase string", () => {
    expect(upperFirst("HELLO")).to.equal("HELLO");
  });

  it("should handle empty string", () => {
    expect(upperFirst("")).to.equal("");
  });
});
