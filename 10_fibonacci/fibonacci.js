const fibonacci = function (num) {
	if (num < 0) {
		return "OOPS";
	}
	if (num == 1) {
		return 1;
	} else {
		let a = 0;
		let b = 1;
		let sum;
		for (let i = 1; i < +num; i++) {
			sum = a + b;
			a = b;
			b = sum;
		}
		return sum;
	}
};

// Do not edit below this line
module.exports = fibonacci;
