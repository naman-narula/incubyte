import { expect } from 'chai';

import { add } from '../calculator';

describe('Tests for addition operation of calculator', function () {
    it('should return 0 for empty string', function () {
        expect(add('')).equals(0);
    });
});
