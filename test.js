const test = require("ava")
const divideRemainder = require(".")

test("main", t => {
	t.deepEqual(divideRemainder(5, 2), {
		quotient: 2,
		remainder: 1
	})
	t.deepEqual(divideRemainder(-5, -2), {
		quotient: 2,
		remainder: -1
	})
})
