# divide-remainder [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/divide-remainder/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/divide-remainder)

Divide a number and get a quotient and remainder.

[![NPM Badge](https://nodei.co/npm/divide-remainder.png)](https://npmjs.com/package/divide-remainder)

## Install

```sh
npm install divide-remainder
```

## Usage

```js
const divideRemainder = require("divide-remainder");

const { quotient, remainder } = divideRemainder(5, 2);

console.log(quotient);
//=> 2

console.log(remainder);
//=> 1
```

## API

### divideRemainder(number, divisor)

#### number

Type: `number`

The number to divide.

#### divisor

Type: `number`

The number to divide by.
