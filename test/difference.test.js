import { expect } from "chai";
import difference from "../src/difference.js";

describe("difference", () => {
  it("removes values from array", () => {
    expect(difference([2, 1], [2, 3])).to.deep.equal([1]);
  });
});
