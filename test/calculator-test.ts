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
});
