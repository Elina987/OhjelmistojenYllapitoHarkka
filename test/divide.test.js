import { expect } from "chai";
import divide from "../src/divide.js";

describe("divide()", () => {
  it("should divide two numbers", () => {
    expect(divide(6, 4)).to.equal(1.5);
  });
  it("should handle division by 1", () => {
    // test for division by 1
    expect(divide(5, 1)).to.equal(5);
  });

  it("should handle zero divisor", () => {
    // test for division by zero
    expect(divide(5, 0)).to.equal(Infinity);
  });
});
