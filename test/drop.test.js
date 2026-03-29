import { expect } from "chai";
import drop from "../src/drop.js";

describe("drop()", () => {
  it("should drop first element by default", () => {
    expect(drop([1, 2, 3])).to.deep.equal([2, 3]);
  });

  it("should drop n elements", () => {
    // test for dropping n elements
    expect(drop([1, 2, 3], 2)).to.deep.equal([3]);
  });

  it("should return empty array if n is too large", () => {
    expect(drop([1, 2, 3], 5)).to.deep.equal([]);
  });

  it("should return same array if n is 0", () => {
    expect(drop([1, 2, 3], 0)).to.deep.equal([1, 2, 3]);
  });

  it("should treat negative n as 0", () => {
    expect(drop([1, 2, 3], -1)).to.deep.equal([1, 2, 3]);
  });
});
