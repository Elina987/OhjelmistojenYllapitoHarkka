import { expect } from "chai";
import isBoolean from "../src/isBoolean.js";

describe("isBoolean()", () => {
  it("should return true for true", () => {
    // test for true
    expect(isBoolean(true)).to.equal(true);
  });

  it("should return true for false", () => {
    // test for false
    expect(isBoolean(false)).to.equal(true);
  });

  it("should return true for Boolean object", () => {
    expect(isBoolean(new Boolean(true))).to.equal(true);
  });

  it("should return false for null", () => {
    // test for null
    expect(isBoolean(null)).to.equal(false);
  });

  it("should return false for number", () => {
    expect(isBoolean(1)).to.equal(false);
  });

  it("should return false for string", () => {
    // test for string
    expect(isBoolean("true")).to.equal(false);
  });
});
