# divisibleby.js
Check if a number is divisible by a number or an array of numbers.

divisibleby(dividend, divisors)
- divisor must be a array of numbers, can be a single number
- will return true if dividend is dividable by all divisors

```
var divisibleby = require('divisibleby');
divisibleby(15, [3,5]); // returns true
divisibleby(15, [2, 0]); // returns false
```
