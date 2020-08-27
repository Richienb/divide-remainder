/**
Divide a number and get a quotient and remainder.
@param number The number to divide.
@param divisor The number to divide by.
@example
```
const divideRemainder = require("divide-remainder");

const { quotient, remainder } = divideRemainder(5, 2);

console.log(quotient);
//=> 2

console.log(remainder);
//=> 1
```
*/
declare function divideRemainder(number: number, divisor: number): {
	quotient: number
	remainder: number
}

export = divideRemainder
