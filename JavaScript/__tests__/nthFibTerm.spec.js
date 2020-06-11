import nthFibTerm from "../nthFibTerm.js";

describe("Passes base cases", () => {
  test("1st term", () => {
    expect(nthFibTerm(1)).toBe(1);
  });
});
