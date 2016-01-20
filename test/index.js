'use strict';

var expect = require('expect');
var divisibleBy =  require('../index');

describe('divisibility check', function() {
  it('should correctly determine if number is divisible by array of numbers', function () {
    expect(divisibleBy(15, [5,3])).toEqual(true);
    expect(divisibleBy(0, [-1])).toEqual(true);
    expect(divisibleBy(1, [2, 0])).toEqual(false);
    expect(divisibleBy(3.14, [2, 1.5]));
  });
});
