const add = function (num1, num2) {
	return num1 + num2;
};

const subtract = function (num1, num2) {
	return num1 - num2;
};

const sum = function (arr) {
	result = arr.reduce(
		(previousValue, currentValue) => previousValue + currentValue,
		0
	);
	return +result;
};

const multiply = function (arr) {
	result = arr.reduce(
		(previousValue, currentValue) => previousValue * currentValue
	);
	return +result;
};

const power = function (num1, num2) {
	let result = Math.pow(num1, num2);
	return +result;
};

const factorial = function (num) {
	if (num == 0 || num == 1) {
		return 1;
	} else {
		return num * factorial(num - 1);
	}
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
