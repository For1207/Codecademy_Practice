var assert = require("assert");
var Calculate =  require('../Factorial_Feature_testing/index')

describe('Calculate', () => {
  describe('.factorial', () => {
    it("Tests that 5! is 120", () => {
      // Setup
      const expected = 120;
      // Exercise
      const actual = Calculate.factorial(5);
      // Verify
      assert.equal(expected, actual);

    });
    it("Tests for input different from 5", () => {
      // Setup
        const expected = 6;
      // Exercise
        const actual = Calculate.factorial(3);
      // Verify
          assert.equal(expected, actual);
    });
    it ("Tests an edge case when input is 0", () => {
      // Setup
        const expected = 1;
      // Exercise
        const actual = Calculate.factorial(0);
      // Verify
          assert.equal(expected, actual);

    })

  });
});