const { add } = require('../src/calculator');

describe('String Calculator', () => {
    it('should return 0 for an empty string',() => {
        expect(add("")).toBe(0);
    });

    it('should return the number when only one number is provided',() => {
        expect(add("1")).toBe(1);
    });

    it('should expect the sum of two numbers',() => {
        expect(add("1,2")).toBe(3);
    });
});