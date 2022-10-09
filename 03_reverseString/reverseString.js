const reverseString = function (string) {
	let result = "";
	result = string.split("").reverse().join("");
	console.log(result);
	return result;
};

// Do not edit below this line
module.exports = reverseString;
