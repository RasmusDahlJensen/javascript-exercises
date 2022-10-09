const repeatString = function (word, num) {
	if (num >= 0) {
		let result = "";
		for (let i = 0; i < num; i++) {
			result += word;
		}
		return result;
	} else {
		return "ERROR";
	}
};

// Do not edit below this line
module.exports = repeatString;
