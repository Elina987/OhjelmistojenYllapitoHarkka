import { expect } from "chai";
import isEmpty from "../src/isEmpty.js";

describe("isEmpty()", () => {
  it("should return true for null", () => {
    expect(isEmpty(null)).to.equal(true);
  });

  it("should return true for empty array", () => {
    expect(isEmpty([])).to.equal(true);
  });

  it("should return false for non-empty array", () => {
    expect(isEmpty([1, 2])).to.equal(false);
  });

  it("should return true for empty string", () => {
    expect(isEmpty("")).to.equal(true);
  });

  it("should return false for non-empty string", () => {
    expect(isEmpty("abc")).to.equal(false);
  });

  it("should return true for empty object", () => {
    expect(isEmpty({})).to.equal(true);
  });

  it("should return false for object with properties", () => {
    expect(isEmpty({ a: 1 })).to.equal(false);
  });
});
