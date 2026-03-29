import { expect } from "chai";
import difference from "../src/difference.js";

// Testing the difference function with various cases
describe("difference", () => {
  it("removes values from array", () => {
    expect(difference([2, 1], [2, 3])).to.deep.equal([1]);
  });
});
