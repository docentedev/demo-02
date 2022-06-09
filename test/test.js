const assert = require('assert')
const makeFullName = require('../src/utils/makeFullName')

describe('makeFullName', function () {
    it('should return Pedro Pereira', function () {
        const fullName = makeFullName('Pedro', 'Pereira')
        assert.equal(fullName, 'Pedro Pereira')
    });
});