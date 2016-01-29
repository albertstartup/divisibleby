'use strict';

var expect = require('expect');
var divisibleby =  require('../index');

describe('divisibility check', function() {
  it('should correctly determine if number is divisible by array of numbers', function () {
    expect(divisibleby(15, [5,3])).toEqual(true);
    expect(divisibleby(0, [-1])).toEqual(true);
    expect(divisibleby(1, [2, 0])).toEqual(false);
    expect(divisibleby(3.14, [2, 1.5]));
  });
});
