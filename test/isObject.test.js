import { expect } from "chai";
import isObject from "../src/isObject.js";

describe("isObject", () => {
  it("returns true for object", () => {
    expect(isObject({})).to.equal(true);
  });

  it("returns true for array", () => {
    expect(isObject([1, 2])).to.equal(true);
  });

  it("returns false for null", () => {
    expect(isObject(null)).to.equal(false);
  });

  it("returns false for number", () => {
    expect(isObject(5)).to.equal(false);
  });
});
