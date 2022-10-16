const sumAll = function (startNum, endNum) {
	if (
		startNum < 0 ||
		endNum < 0 ||
		typeof startNum != "number" ||
		typeof endNum != "number"
	) {
		return "ERROR";
	} else if (startNum > endNum) {
		let sum = 0;
		for (let i = endNum; i <= startNum; i++) {
			sum += i;
		}
		return sum;
	}
	let sum = 0;
	for (let i = startNum; i <= endNum; i++) {
		sum += i;
	}

	return sum;
};

// Do not edit below this line
module.exports = sumAll;
