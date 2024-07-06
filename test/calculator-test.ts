import { expect } from 'chai';

import { add } from '../calculator';

describe('Tests for addition operation of calculator', function () {
    it('should return 0 for empty string', function () {
        expect(add('')).equals(0);
    });
    it("should return same number on single input", function () {
        expect(add("1")).equals(1);
    })

    it("should add two numbers seperated by comma", function () {
        expect(add("5,6")).equals(11)
    })

    it("should add all numbers in the experession", function () {
        let randomRange = Math.floor(Math.random() * (13)) + 3;
        let expression = "";
        let sum = 0;
        for (let i = 1; i <= randomRange; i++) {
            expression += (i.toString() + ',')
            sum += i;
        }
        expression = expression.replace(/,$/, "")
        expect(add(expression)).equals(sum);
    })

    it("should handle new line character between numbers", function () {
        expect(add("1\n2,3\n4\n5\n6,7,8\n9")).equals(45);
    })

    it("should support different delimiters", function () {
        expect(add("//;\n1;2;3;4;5")).equals(15);
    })

    it("should throw an exception on negative numbers", function () {
        expect(() => add("//:\n1:2:-3:-4:5")).to.throw(/negative numbers not allowed -3,-4/);
    })

    it("should not add number greater than 1000", function () {
        expect(add("1,2,1001")).equals(3);
    })
});
