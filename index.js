var _ = require("underscore");

function sum(range) {
  return _.reduce(range, function(memo, num) { return memo + num; }, 0);
}

function absRemainders(dividend, divisors) {
    return _.map(divisors, function(divisor) {
        return Math.abs(dividend % divisor);
    });
}

function divisibleBy(dividend, divisors) {
  return sum(absRemainders(dividend, divisors)) === 0;
}

module.exports = divisibleBy;
