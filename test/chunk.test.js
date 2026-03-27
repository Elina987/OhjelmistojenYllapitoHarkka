import { expect } from "chai";
import chunk from "../src/chunk.js";

describe("chunk()", () => {
  it("splits array into chunks", () => {
    expect(chunk([1, 2, 3, 4], 2)).to.deep.equal([
      [1, 2],
      [3, 4],
    ]);
  });

  it("handles uneven chunks", () => {
    expect(chunk([1, 2, 3, 4], 3)).to.deep.equal([[1, 2, 3], [4]]);
  });

  it("returns empty array for empty input", () => {
    expect(chunk([], 2)).to.deep.equal([]);
  });

  it("returns empty array if size is 0", () => {
    expect(chunk([1, 2, 3], 0)).to.deep.equal([]);
  });
});
