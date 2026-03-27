import { expect } from "chai";
import slice from "../src/slice.js";

describe("slice()", () => {
  it("should slice array from start index", () => {
    expect(slice([1, 2, 3, 4], 2)).to.deep.equal([3, 4]);
  });

  it("should slice with start and end", () => {
    expect(slice([1, 2, 3, 4], 1, 3)).to.deep.equal([2, 3]);
  });

  it("should handle negative start", () => {
    expect(slice([1, 2, 3, 4], -2)).to.deep.equal([3, 4]);
  });

  it("should handle negative end", () => {
    expect(slice([1, 2, 3, 4], 0, -1)).to.deep.equal([1, 2, 3]);
  });

  it("should return empty array for empty input", () => {
    expect(slice([], 1, 2)).to.deep.equal([]);
  });
});
