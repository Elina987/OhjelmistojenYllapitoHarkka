import { expect } from "chai";
import add from "../src/add.js";

describe("add()", () => {
  it("should add two positive numbers", () => {
    expect(add(1, 2)).to.equal(3);
  });

  it("should add negative numbers", () => {
    expect(add(-1, -2)).to.equal(-3);
  });

  it("should add positive and negative number", () => {
    expect(add(5, -2)).to.equal(3);
  });

  it("should return number when one argument is missing", () => {
    expect(add(5)).to.equal(5);
  });

  it("should return 0 when no arguments given", () => {
    expect(add()).to.equal(0);
  });
});
