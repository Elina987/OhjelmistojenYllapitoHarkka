import { expect } from "chai";
import isSymbol from "../src/isSymbol.js";

describe("isSymbol()", () => {
  it("should return true for symbol primitive", () => {
    expect(isSymbol(Symbol("test"))).to.equal(true);
  });

  it("should return false for string", () => {
    expect(isSymbol("abc")).to.equal(false);
  });

  it("should return false for number", () => {
    expect(isSymbol(123)).to.equal(false);
  });

  it("should return false for null", () => {
    expect(isSymbol(null)).to.equal(false);
  });
});
