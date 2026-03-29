import { expect } from "chai";
import isDate from "../src/isDate.js";

describe("isDate()", () => {
  it("should return true for Date object", () => {
    // test for Date object
    expect(isDate(new Date())).to.equal(true);
  });

  it("should return false for string", () => {
    // test for string
    expect(isDate("2020-01-01")).to.equal(false);
  });

  it("should return false for number", () => {
    // test for number
    expect(isDate(123)).to.equal(false);
  });

  it("should return false for object", () => {
    // test for object
    expect(isDate({})).to.equal(false);
  });
});
