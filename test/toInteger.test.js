import { expect } from "chai";
import toInteger from "../src/toInteger.js";

describe("toInteger", () => {
  it("converts float to integer", () => {
    expect(toInteger(3.7)).to.equal(3);
  });

  it("returns same if already integer", () => {
    expect(toInteger(5)).to.equal(5);
  });

  it("works with string number", () => {
    expect(toInteger("4.9")).to.equal(4);
  });

  it("returns 0 for small number", () => {
    expect(toInteger(0.2)).to.equal(0);
  });
});
