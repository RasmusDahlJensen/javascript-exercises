const ftoc = function (fdeg) {
	let result = ((fdeg - 32) * 5) / 9;

	return Math.round(result * 10) / 10;
};

const ctof = function (cdeg) {
	let result = (cdeg * 9) / 5 + 32;

	return Math.round(result * 10) / 10;
};

// Do not edit below this line
module.exports = {
	ftoc,
	ctof,
};
