import { expect } from "chai";
import ceil from "../src/ceil.js";

describe("ceil()", () => {
  it("should round up to nearest integer", () => {
    expect(ceil(4.2)).to.equal(5);
  });

  it("should round up with precision", () => {
    expect(ceil(4.006, 2)).to.equal(4.01);
  });

  it("should handle negative precision", () => {
    expect(ceil(4060, -2)).to.equal(4100);
  });

  it("should return same number if already integer", () => {
    expect(ceil(5)).to.equal(5);
  });

  it("should handle negative numbers", () => {
    expect(ceil(-4.2)).to.equal(-4);
  });
});
