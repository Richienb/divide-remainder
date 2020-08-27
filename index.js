"use strict"

module.exports = (number, divisor) => {
	if (typeof number !== "number") {
		throw new TypeError(`Expected a number, got ${typeof number}`)
	}

	if (typeof divisor !== "number") {
		throw new TypeError(`Expected a number, got ${typeof divisor}`)
	}

	const remainder = number % divisor
	const quotient = (number - remainder) / divisor

	return { quotient, remainder }
}
