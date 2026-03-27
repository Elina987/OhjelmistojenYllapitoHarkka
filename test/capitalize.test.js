import { expect } from "chai";
import capitalize from "../src/capitalize.js";

describe("capitalize()", () => {
  it("should capitalize lowercase string", () => {
    expect(capitalize("hello")).to.equal("Hello");
  });

  it("should convert uppercase string", () => {
    expect(capitalize("FRED")).to.equal("Fred");
  });

  it("should handle mixed case", () => {
    expect(capitalize("hELLo")).to.equal("Hello");
  });

  it("should handle empty string", () => {
    expect(capitalize("")).to.equal("");
  });
});
