const {
	returnTwo,
	greeting,
	add,
	multiply,
	divide,
	subtract,
} = require("./functions");

test("should return 2", () => {
	expect(returnTwo()).toEqual(2);
});

test("should return Hello {name}", () => {
	expect(greeting("Susan")).toEqual("Hello Susan");
});

describe("maths", () => {
	test("should return {num1} + {num2}", () => {
		expect(add(4, 1)).toEqual(5);
		expect(add(3, 1)).toEqual(4);
	}),
		test("should return {num1} * {num2}", () => {
			expect(multiply(2, 2)).toEqual(4);
		}),
		test("should return {num1} / {num2}", () => {
			expect(divide(8, 2)).toEqual(4);
		}),
		test("should return {num1} - {num2}", () => {
			expect(subtract(5, 3)).toEqual(2);
		});
});
