import { expect } from "chai";
import camelCase from "../src/camelCase.js";

// Testing the camelCase function with various cases

describe("camelCase()", () => {
  it("should convert string to camelCase", () => {
    expect(camelCase("Foo Bar")).to.equal("fooBar");
  });

  it("should handle dashed string", () => {
    expect(camelCase("foo-bar")).to.equal("fooBar");
  });

  it("should handle uppercase string", () => {
    expect(camelCase("FOO BAR")).to.equal("fooBar");
  });
});
